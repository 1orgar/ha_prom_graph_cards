import { html, css, PropertyValues, unsafeCSS, nothing } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import uPlot from 'uplot';
// @ts-ignore
import uPlotCSSText from 'uplot/dist/uPlot.min.css';
import { BasePrometheusCard } from '../../shared/base-prometheus-card';
import { cardStyles } from '../../shared/card-styles';
import { TimeseriesCardConfig } from './timeseries-card-config';
import { timeseriesStyles } from './timeseries-card-styles';
import { buildChartData, ChartData, ChartSeries, toAligned } from './timeseries-data';
import { formatValue } from '../../utils/format';
import { withAlpha } from '../../utils/color';
import { parseTimeRange, calculateStep } from '../../utils/time';
import { localize } from '../../localize';
import './timeseries-card-editor';

type LegendStat = 'last' | 'min' | 'max' | 'mean';

@customElement('prometheus-timeseries-card')
export class TimeseriesCard extends BasePrometheusCard<TimeseriesCardConfig> {
  @state() private _data: ChartData = { times: [], series: [] };
  @state() private _cursorIdx: number | null = null;
  @state() private _hidden = new Set<string>();

  @query('.chart-container') private _chartContainer?: HTMLElement;

  private _chart?: uPlot;
  private _chartSignature = '';
  private _resizeObserver?: ResizeObserver;

  static get styles() {
    return [cardStyles, css`${unsafeCSS(uPlotCSSText)}`, timeseriesStyles];
  }

  public static getStubConfig(): Partial<TimeseriesCardConfig> {
    return {
      type: 'custom:prometheus-timeseries-card',
      title: 'Prometheus',
      time_range: '1h',
      series: [{ query: 'up', name: '{{job}} {{instance}}' }]
    };
  }

  static getConfigElement() {
    return document.createElement('prometheus-timeseries-card-editor');
  }

  public setConfig(config: TimeseriesCardConfig): void {
    const series = Array.isArray(config.series) ? config.series : [];
    super.setConfig({ ...config, series });
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
    if (!this._data.times.length || !this._chartContainer) return;
    // Rebuild when the set of series changes, otherwise just update data
    const signature = this._data.series.map((s) => `${s.key}|${s.color}`).join(',');
    if (!this._chart || signature !== this._chartSignature) {
      this._destroyChart();
      this._chartSignature = signature;
      this._initChart();
    } else if (changedProps.has('_data') || changedProps.has('_hidden')) {
      this._chart.setData(this._aligned());
      this._data.series.forEach((s, i) => this._chart!.setSeries(i + 1, { show: !this._hidden.has(s.key) }));
    }
  }

  private _aligned(): uPlot.AlignedData {
    return toAligned(this._data, Boolean(this._config.stacked), this._hidden);
  }

  private _destroyChart() {
    this._resizeObserver?.disconnect();
    this._resizeObserver = undefined;
    this._chart?.destroy();
    this._chart = undefined;
    this._chartSignature = '';
  }

  /** Canvas cannot use CSS variables, resolve them to real colors. */
  private _cssVar(name: string, fallback: string): string {
    return getComputedStyle(this).getPropertyValue(name).trim() || fallback;
  }

  private _fmt(v: number | null | undefined): string {
    return v === null || v === undefined ? '-' : formatValue(v, this._config.decimals, this._config.unit);
  }

  private _initChart() {
    if (!this._chartContainer || !this._config) return;
    const c = this._config;
    const width = this._chartContainer.clientWidth || 400;
    const height = c.height || 200;
    const textColor = this._cssVar('--secondary-text-color', '#888');
    const gridColor = this._cssVar('--divider-color', 'rgba(127,127,127,0.2)');
    const lineWidth = c.line_width ?? 2;
    const fillOn = c.fill || c.stacked || c.series.some((s) => s.fill);
    const opacity = Math.max(0, Math.min(100, c.fill_opacity ?? 20)) / 100;

    const series: uPlot.Series[] = [{}];
    this._data.series.forEach((s) => {
      series.push({
        label: s.label,
        stroke: s.color,
        width: lineWidth,
        fill: fillOn ? withAlpha(s.color, opacity) : undefined,
        spanGaps: true,
        show: !this._hidden.has(s.key),
        points: { show: false }
      });
    });

    const axes: uPlot.Axis[] = [
      { stroke: textColor, grid: { stroke: gridColor, width: 1 }, ticks: { stroke: gridColor, width: 1 } },
      {
        stroke: textColor,
        size: 70,
        grid: { stroke: gridColor, width: 1 },
        ticks: { stroke: gridColor, width: 1 },
        values: (_u, vals) => vals.map((v) => (v == null ? '' : this._fmt(v)))
      }
    ];

    const opts: uPlot.Options = {
      width,
      height,
      series,
      axes,
      legend: { show: false },
      scales: {
        y: {
          range: (_u, dmin, dmax) => {
            const min = c.min ?? (c.stacked ? Math.min(0, dmin) : dmin);
            const max = c.max ?? dmax;
            return min === max ? [min - 1, max + 1] : [min, max];
          }
        }
      },
      cursor: { points: { size: 6 } },
      hooks: {
        setCursor: [(u) => (this._cursorIdx = u.cursor.idx ?? null)]
      }
    };

    this._chart = new uPlot(opts, this._aligned(), this._chartContainer);
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
    const queries = this._config.series;
    try {
      this._loading = true;
      const { start, end } = parseTimeRange(this._config.time_range || '1h');
      const step = this._config.step ? String(this._config.step) : calculateStep(start, end);
      const responses = await Promise.all(
        queries.map((s) =>
          s.query && s.query.trim() ? this._client.rangeQuery(s.query, start, end, step) : Promise.resolve(null)
        )
      );
      this._data = buildChartData(responses, queries, this._config.palette);
      this._error = undefined;
    } catch (e: any) {
      this._error = this._formatError(e);
    } finally {
      this._loading = false;
    }
  }

  private _toggle(key: string, ev: MouseEvent) {
    const next = new Set(this._hidden);
    const all = this._data.series.map((s) => s.key);
    if (ev.ctrlKey || ev.metaKey || ev.shiftKey) {
      if (next.has(key)) next.delete(key);
      else next.add(key);
    } else {
      // Grafana behaviour: click isolates a series, click again shows all
      const isolated = next.size === all.length - 1 && !next.has(key);
      next.clear();
      if (!isolated) all.filter((k) => k !== key).forEach((k) => next.add(k));
    }
    this._hidden = next;
  }

  private _current(s: ChartSeries): number | null {
    return this._cursorIdx !== null ? s.values[this._cursorIdx] ?? null : s.stats.last;
  }


  protected render() {
    if (!this._hasQuery()) return this.renderPlaceholder('no_series');
    const hasData = this._data.times.length > 0;

    let overlay: unknown = nothing;
    if (this._error) {
      overlay = html`<div class="overlay error-state">${this._error}</div>`;
    } else if (!hasData) {
      overlay = html`<div class="overlay">
        ${this._loading
          ? html`<div class="loading-state"></div>`
          : html`<div class="placeholder-state">${localize('no_data', this._hass)}</div>`}
      </div>`;
    }

    return html`
      <ha-card>
        ${this._config.title ? html`<div class="header">${this._config.title}</div>` : nothing}
        <div class="chart-container" style="min-height: ${hasData ? this._config.height || 200 : 0}px"></div>
        ${overlay}
        ${this._config.show_legend !== false && hasData ? this._renderLegend() : nothing}
      </ha-card>
    `;
  }

  /** Current (hovered or last) value column, controlled by `show_current` (default on). */
  private _showCurrent(): boolean {
    return this._config.show_current !== false;
  }

  private _renderLegendTable(stats: LegendStat[]) {
    // `last` in the stats list is the static last value; the "current" column follows the cursor
    const cols = stats;
    const showCurrent = this._showCurrent();
    return html`
      <div class="legend-table-wrap">
        <table class="legend-table">
          <thead>
            <tr>
              <th></th>
              ${cols.map((st) => html`<th>${localize(`legend_value_${st}`, this._hass)}</th>`)}
              ${showCurrent ? html`<th>${localize('current', this._hass)}</th>` : nothing}
            </tr>
          </thead>
          <tbody>
            ${this._data.series.map(
              (s) => html`
                <tr class=${this._hidden.has(s.key) ? 'hidden' : ''} @click=${(e: MouseEvent) => this._toggle(s.key, e)}>
                  <td>
                    <div class="name-cell" title=${s.label}>
                      <span class="legend-color" style="background:${s.color}"></span><span>${s.label}</span>
                    </div>
                  </td>
                  ${cols.map((st) => html`<td>${this._fmt(s.stats[st])}</td>`)}
                  ${showCurrent ? html`<td>${this._fmt(this._current(s))}</td>` : nothing}
                </tr>
              `
            )}
          </tbody>
        </table>
      </div>
    `;
  }

  private _renderLegend() {
    const stats = (this._config.legend_values || []) as LegendStat[];
    if (this._config.legend_mode === 'table') return this._renderLegendTable(stats);
    return html`
      <div class="legend">
        ${this._data.series.map(
          (s) => html`
            <div
              class="legend-item ${this._hidden.has(s.key) ? 'hidden' : ''}"
              title=${s.label}
              @click=${(e: MouseEvent) => this._toggle(s.key, e)}
            >
              <div class="legend-color" style="background-color: ${s.color}"></div>
              <span class="legend-name">${s.label}</span>
              ${stats.map(
                (st) => html`<span class="legend-value"
                  ><span class="legend-stat">${localize(`legend_value_${st}`, this._hass)}:</span>
                  ${this._fmt(s.stats[st])}</span
                >`
              )}
              ${this._showCurrent() ? html`<span class="legend-value">${this._fmt(this._current(s))}</span>` : nothing}
            </div>
          `
        )}
      </div>
    `;
  }
}

