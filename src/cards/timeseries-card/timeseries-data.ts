import type uPlot from 'uplot';
import { PrometheusResponse, SeriesConfig, PaletteOption } from '../../types';
import { itemColor, MAX_SERIES, parseRange } from '../../utils/series';
import { shortLabel } from '../../utils/format';

export interface ChartSeries {
  key: string;
  label: string;
  color: string;
  values: (number | null)[];
  stats: { last: number | null; min: number | null; max: number | null; mean: number | null };
}

export interface ChartData {
  times: number[];
  series: ChartSeries[];
}

function stats(values: (number | null)[]): ChartSeries['stats'] {
  let min: number | null = null;
  let max: number | null = null;
  let sum = 0;
  let n = 0;
  let last: number | null = null;
  for (const v of values) {
    if (v === null) continue;
    min = min === null ? v : Math.min(min, v);
    max = max === null ? v : Math.max(max, v);
    sum += v;
    n++;
    last = v;
  }
  return { last, min, max, mean: n ? sum / n : null };
}

/**
 * Turn range responses (one per configured query) into aligned chart data.
 * Every query may return many series: each becomes its own line with a
 * distinct palette colour and a Grafana-like legend label.
 */
export function buildChartData(
  responses: (PrometheusResponse | null)[],
  queries: SeriesConfig[],
  palette?: PaletteOption
): ChartData {
  type Raw = { key: string; label: string; explicit?: string; points: Map<number, number | null> };
  const raw: Raw[] = [];
  const timeSet = new Set<number>();

  responses.forEach((res, qi) => {
    const q = queries[qi];
    // Legend label comes from the query "Name" field only:
    // `{{label}}` placeholders are expanded, plain text is used as is (+ labels if many series)
    const name = q.name?.trim();
    const template = name && name.includes('{{') ? name : undefined;
    const plainName = name && !template ? name : undefined;
    const parsed = parseRange(res, template);
    parsed.forEach((s, si) => {
      let label = s.label;
      if (plainName) {
        // exactly the name for a single series; name + distinguishing labels if the query returns many
        label = parsed.length > 1 ? `${plainName} ${shortLabel(s.metric)}` : plainName;
      }
      label = label || `Series ${qi + 1}`;
      const points = new Map<number, number | null>();
      for (const [t, v] of s.points) {
        points.set(t, v);
        timeSet.add(t);
      }
      raw.push({ key: `${qi}:${si}:${label}`, label, explicit: parsed.length === 1 ? q.color : undefined, points });
    });
  });

  const limited = raw.slice(0, MAX_SERIES);
  const times = Array.from(timeSet).sort((a, b) => a - b);
  const series = limited.map((r, i) => {
    const values = times.map((t) => (r.points.has(t) ? r.points.get(t)! : null));
    return {
      key: r.key,
      label: r.label,
      color: itemColor(i, limited.length, palette, r.explicit),
      values,
      stats: stats(values)
    };
  });
  return { times, series };
}

/** Cumulative sums for stacked mode (nulls are treated as 0 in the stack). */
export function stackValues(series: ChartSeries[], hidden: Set<string>): (number | null)[][] {
  const acc: number[] = [];
  return series.map((s) => {
    if (hidden.has(s.key)) return s.values.map(() => null);
    return s.values.map((v, i) => {
      acc[i] = (acc[i] || 0) + (v ?? 0);
      return v === null ? null : acc[i];
    });
  });
}

export function toAligned(data: ChartData, stacked: boolean, hidden: Set<string>): uPlot.AlignedData {
  const cols = stacked ? stackValues(data.series, hidden) : data.series.map((s) => s.values);
  return [data.times, ...cols] as uPlot.AlignedData;
}
