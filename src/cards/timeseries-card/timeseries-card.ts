import { html, css, PropertyValues, unsafeCSS, nothing } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import uPlot from 'uplot';
// @ts-ignore
import uPlotCSSText from 'uplot/dist/uPlot.min.css';
import { BasePrometheusCard } from '../../shared/base-prometheus-card';
import { cardStyles } from '../../shared/card-styles';
import { TimeseriesCardConfig } from './timeseries-card-config';
import { timeseriesStyles } from './timeseries-card-styles';
import { formatValue } from '../../utils/format';
import { DEFAULT_SERIES_COLORS } from '../../utils/color';
import { parseTimeRange, calculateStep } from '../../utils/time';
import { localize } from '../../localize';
import './timeseries-card-editor';

@customElement('prometheus-timeseries-card')
export class TimeseriesCard extends BasePrometheusCard<TimeseriesCardConfig> {
  @state() private _chartData: uPlot.AlignedData = [[]];
  @state() private _currentValues: Record<number, number | null> = {};
  @state() private _hasData = false;

  @query('.chart-container') private _chartContainer?: HTMLElement;

  private _chart?: uPlot;
  private _resizeObserver?: ResizeObserver;

  static get styles() {
    return [cardStyles, css`${unsafeCSS(uPlotCSSText)}`, timeseriesStyles];
  }

  public static getStubConfig(): Partial<TimeseriesCardConfig> {
    return {
      type: 'custom:prometheus-timeseries-card',
      title: 'Prometheus',
      time_range: '1h',
      series: [{ query: 'sum(up)', name: 'Targets up' }]
    };
  }

  static getConfigElement() {
    return document.createElement('prometheus-timeseries-card-editor');
  }

  public setConfig(config: TimeseriesCardConfig): void {
    const series = Array.isArray(config.series) ? config.series : [];
    super.setConfig({ ...config, series });
    // Structure (series/colors/height) may have changed, rebuild chart
    this._destroyChart();
  }

  protected _hasQuery(): boolean {
    return Boolean(this._config?.series?.some((s) => s && s.query && s.query.trim()));
  }

  public getCardSize(): number {
    return Math.ceil(((this._config?.height || 200) + 100) / 50);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._destroyChart();
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);
    if (this._chartContainer && !this._chart && this._hasData) {
      this._initChart();
    } else if (this._chart && changedProps.has('_chartData')) {
      this._chart.setData(this._chartData);
    }
  }

  private _destroyChart() {
    this._resizeObserver?.disconnect();
    this._resizeObserver = undefined;
    this._chart?.destroy();
    this._chart = undefined;
  }

  /** Canvas cannot use CSS variables, resolve them to real colors. */
  private _cssVar(name: string, fallback: string): string {
    return getComputedStyle(this).getPropertyValue(name).trim() || fallback;
  }

  private _seriesColor(index: number): string {
    const s = this._config.series[index];
    return (s && s.color) || DEFAULT_SERIES_COLORS[index % DEFAULT_SERIES_COLORS.length];
  }

  private _latest(column: (number | null | undefined)[]): number | null {
    for (let i = column.length - 1; i >= 0; i--) {
      const v = column[i];
      if (v !== null && v !== undefined) return v;
    }
    return null;
  }

  private _initChart() {
    if (!this._chartContainer || !this._config) return;

    const width = this._chartContainer.clientWidth || 400;
    const height = this._config.height || 200;
    const textColor = this._cssVar('--secondary-text-color', '#888');
    const gridColor = this._cssVar('--divider-color', 'rgba(127,127,127,0.2)');

    const series: uPlot.Series[] = [{}];
    this._config.series.forEach((s, i) => {
      const color = this._seriesColor(i);
      const fill = s.fill ?? this._config.fill;
      series.push({
        label: s.name || `Series ${i + 1}`,
        stroke: color,
        width: 2,
        fill: fill && /^#[0-9a-f]{6}$/i.test(color) ? `${color}33` : undefined,
        spanGaps: true,
        points: { show: false }
      });
    });

    const axes: uPlot.Axis[] = [
      {
        stroke: textColor,
        grid: { stroke: gridColor, width: 1 },
        ticks: { stroke: gridColor, width: 1 }
      },
      {
        stroke: textColor,
        size: 60,
        grid: { stroke: gridColor, width: 1 },
        ticks: { stroke: gridColor, width: 1 },
        values: (_u, vals) =>
          vals.map((v) => (v == null ? '' : formatValue(v, this._config.decimals ?? 2, this._config.unit)))
      }
    ];

    const opts: uPlot.Options = {
      width,
      height,
      series,
      axes,
      legend: { show: false },
      cursor: { points: { size: 6 } },
      hooks: {
        setCursor: [
          (u) => {
            const idx = u.cursor.idx;
            const values: Record<number, number | null> = {};
            for (let i = 1; i < u.series.length; i++) {
              const column = u.data[i] as (number | null | undefined)[];
              values[i - 1] = idx != null ? (column[idx] ?? null) : this._latest(column);
            }
            this._currentValues = values;
          }
        ]
      }
    };

    this._chart = new uPlot(opts, this._chartData, this._chartContainer);

    this._resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === this._chartContainer && this._chart && entry.contentRect.width > 0) {
          this._chart.setSize({ width: entry.contentRect.width, height: this._config.height || 200 });
        }
      }
    });
    this._resizeObserver.observe(this._chartContainer);
  }

  protected async _fetchData(): Promise<void> {
    const seriesConfig = this._config.series;
    try {
      this._loading = true;
      const { start, end } = parseTimeRange(this._config.time_range || '1h');
      const step = this._config.step ? String(this._config.step) : calculateStep(start, end);

      const results = await Promise.all(
        seriesConfig.map((s) =>
          s.query && s.query.trim() ? this._client.rangeQuery(s.query, start, end, step) : Promise.resolve(null)
        )
      );

      const timeMap = new Map<number, (number | null)[]>();
      results.forEach((res, sIdx) => {
        const values = res?.data?.result?.[0]?.values || [];
        for (const [t, raw] of values) {
          if (!timeMap.has(t)) {
            timeMap.set(t, new Array(seriesConfig.length).fill(null));
          }
          const val = parseFloat(raw);
          timeMap.get(t)![sIdx] = Number.isFinite(val) ? val : null;
        }
      });

      const times = Array.from(timeMap.keys()).sort((a, b) => a - b);
      const aligned: uPlot.AlignedData = [times];
      for (let i = 0; i < seriesConfig.length; i++) {
        aligned.push(times.map((t) => timeMap.get(t)![i]));
      }

      const latest: Record<number, number | null> = {};
      for (let i = 0; i < seriesConfig.length; i++) {
        latest[i] = this._latest(aligned[i + 1] as (number | null)[]);
      }

      this._currentValues = latest;
      this._chartData = aligned;
      this._hasData = times.length > 0;
      this._error = undefined;
    } catch (e: any) {
      this._error = this._formatError(e);
    } finally {
      this._loading = false;
    }
  }


  protected render() {
    if (!this._hasQuery()) {
      return this.renderPlaceholder('no_series');
    }

    let overlay: unknown = nothing;
    if (this._error) {
      overlay = html`<div class="overlay error-state">${this._error}</div>`;
    } else if (!this._hasData) {
      overlay = html`<div class="overlay">
        ${this._loading
          ? html`<div class="loading-state"></div>`
          : html`<div class="placeholder-state">${localize('no_data', this._hass)}</div>`}
      </div>`;
    }

    return html`
      <ha-card>
        ${this._config.title ? html`<div class="header">${this._config.title}</div>` : nothing}
        <div class="chart-container" style="min-height: ${this._hasData ? this._config.height || 200 : 0}px"></div>
        ${overlay}
        ${this._config.show_legend !== false && this._hasData ? this._renderLegend() : nothing}
      </ha-card>
    `;
  }

  private _renderLegend() {
    return html`
      <div class="legend">
        ${this._config.series.map((s, i) => {
          const val = this._currentValues[i];
          const formatted =
            val !== null && val !== undefined ? formatValue(val, this._config.decimals ?? 2, this._config.unit) : '-';
          return html`
            <div class="legend-item">
              <div class="legend-color" style="background-color: ${this._seriesColor(i)}"></div>
              <span class="legend-name">${s.name || `Series ${i + 1}`}</span>
              <span class="legend-value">${formatted}</span>
            </div>
          `;
        })}
      </div>
    `;
  }
}

