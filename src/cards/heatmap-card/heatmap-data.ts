import { PrometheusResponse } from '../../types';
import { formatLegend } from '../../utils/format';
import { parseRange } from '../../utils/series';

export interface HeatmapModel {
  times: number[];
  rows: string[];                 // bottom -> top
  cells: (number | null)[][];     // [row][time]
  min: number;
  max: number;
}

function parseLe(le: string): number {
  if (le === '+Inf') return Infinity;
  const v = parseFloat(le);
  return Number.isFinite(v) ? v : NaN;
}

function formatLe(v: number): string {
  if (v === Infinity) return '+Inf';
  return String(parseFloat(v.toPrecision(4)));
}

/**
 * Build a heatmap.
 * - `histogram`: series with an `le` label (cumulative buckets, e.g.
 *   `sum by (le) (rate(x_bucket[5m]))`) -> per-bucket counts (de-cumulated).
 * - `series`: every series is a row (label from `legend`).
 */
export function buildHeatmap(
  res: PrometheusResponse | null | undefined,
  mode: 'histogram' | 'series',
  legend?: string
): HeatmapModel {
  const series = parseRange(res, legend);
  const timeSet = new Set<number>();
  series.forEach((s) => s.points.forEach(([t]) => timeSet.add(t)));
  const times = [...timeSet].sort((a, b) => a - b);
  const idx = new Map(times.map((t, i) => [t, i]));

  let rows: string[];
  let cells: (number | null)[][];

  if (mode === 'histogram') {
    // group by le; if other labels remain (not aggregated), sum them per le
    const byLe = new Map<number, (number | null)[]>();
    for (const s of series) {
      const le = parseLe(s.metric.le ?? '');
      if (Number.isNaN(le)) continue;
      const col = byLe.get(le) ?? new Array(times.length).fill(null);
      for (const [t, v] of s.points) {
        if (v === null) continue;
        const i = idx.get(t)!;
        col[i] = (col[i] ?? 0) + v;
      }
      byLe.set(le, col);
    }
    const les = [...byLe.keys()].sort((a, b) => a - b);
    rows = les.map((le, i) => (i === 0 ? `≤ ${formatLe(le)}` : `${formatLe(les[i - 1])} – ${formatLe(le)}`));
    cells = les.map((le, i) => {
      const cur = byLe.get(le)!;
      if (i === 0) return cur;
      const prev = byLe.get(les[i - 1])!;
      // cumulative -> per bucket; negative (counter resets / jitter) clamped to 0
      return cur.map((v, t) => (v === null ? null : Math.max(0, v - (prev[t] ?? 0))));
    });
  } else {
    rows = series.map((s) => (legend ? s.label : formatLegend(s.metric)));
    cells = series.map((s) => {
      const col = new Array(times.length).fill(null);
      for (const [t, v] of s.points) col[idx.get(t)!] = v;
      return col;
    });
  }

  let min = Infinity;
  let max = -Infinity;
  for (const row of cells) {
    for (const v of row) {
      if (v === null) continue;
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }
  if (!Number.isFinite(min)) {
    min = 0;
    max = 0;
  }
  return { times, rows, cells, min, max };
}

/** Normalised position of a value in [0,1] (optionally logarithmic). */
export function colorPosition(v: number, min: number, max: number, log = false): number {
  if (max <= min) return v > 0 ? 1 : 0;
  if (log) {
    const lmin = Math.log10(Math.max(min, 1e-9) + 1);
    const lmax = Math.log10(max + 1);
    return Math.max(0, Math.min(1, (Math.log10(Math.max(v, 0) + 1) - lmin) / (lmax - lmin || 1)));
  }
  return Math.max(0, Math.min(1, (v - min) / (max - min)));
}

export const HEATMAP_SCHEMES: Record<string, string[]> = {
  oranges: ['#fff5eb', '#fdd0a2', '#fd8d3c', '#d94801', '#7f2704'],
  spectral: ['#3288bd', '#99d594', '#e6f598', '#fee08b', '#fc8d59', '#d53e4f'],
  viridis: ['#440154', '#3b528b', '#21918c', '#5ec962', '#fde725'],
  blues: ['#f7fbff', '#c6dbef', '#6baed6', '#2171b5', '#08306b'],
  greens: ['#f7fcf5', '#c7e9c0', '#74c476', '#238b45', '#00441b'],
  reds: ['#fff5f0', '#fcbba1', '#fb6a4a', '#cb181d', '#67000d'],
  purples: ['#fcfbfd', '#dadaeb', '#9e9ac8', '#6a51a3', '#3f007d']
};

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Interpolated colour of `pos` (0..1) in a scheme. */
export function schemeColor(scheme: string, pos: number): string {
  const stops = HEATMAP_SCHEMES[scheme] || HEATMAP_SCHEMES.oranges;
  const x = Math.max(0, Math.min(1, pos)) * (stops.length - 1);
  const i = Math.min(stops.length - 2, Math.floor(x));
  const f = x - i;
  const a = hexToRgb(stops[i]);
  const b = hexToRgb(stops[i + 1]);
  const c = a.map((v, k) => Math.round(v + (b[k] - v) * f));
  return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
}
