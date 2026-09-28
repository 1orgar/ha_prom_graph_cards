import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BasePrometheusCard } from '../../shared/base-prometheus-card';
import { cardStyles } from '../../shared/card-styles';
import { StateTimelineCardConfig } from './state-timeline-card-config';
import { stateTimelineStyles } from './state-timeline-card-styles';
import { buildTimeline, TimelineRow } from './state-timeline-data';
import { calculateStep, parseTimeRange } from '../../utils/time';
import { MappedState } from '../../utils/mappings';
import { localize } from '../../localize';
import './state-timeline-card-editor';

@customElement('prometheus-state-timeline-card')
export class StateTimelineCard extends BasePrometheusCard<StateTimelineCardConfig> {
  @state() private _rows: TimelineRow[] = [];
  @state() private _range: [number, number] = [0, 0];
  @state() private _loaded = false;
  @state() private _hover = '';

  static get styles() {
    return [cardStyles, stateTimelineStyles];
  }

  static getStubConfig(): Partial<StateTimelineCardConfig> {
    return {
      type: 'custom:prometheus-state-timeline-card',
      title: 'Targets',
      time_range: '6h',
      series: [{ query: 'up', name: '{{job}}' }],
      mappings: [
        { value: '1', text: 'UP', color: '#73BF69' },
        { value: '0', text: 'DOWN', color: '#F2495C' }
      ]
    };
  }

  static getConfigElement() {
    return document.createElement('prometheus-state-timeline-card-editor');
  }

  public setConfig(config: StateTimelineCardConfig): void {
    super.setConfig({ ...config, series: Array.isArray(config.series) ? config.series : [] });
  }

  protected _hasQuery(): boolean {
    return Boolean(this._config?.series?.some((s) => s?.query?.trim()));
  }

  public getCardSize(): number {
    return 2 + Math.ceil(this._rows.length / 2);
  }

  protected async _fetchData(): Promise<void> {
    const c = this._config;
    try {
      this._loading = true;
      const { start, end } = parseTimeRange(c.time_range || '6h');
      const step = c.step ? String(c.step) : calculateStep(start, end, 300);
      const queries = c.series.filter((s) => s?.query?.trim());
      const responses = await Promise.all(queries.map((q) => this._client.rangeQuery(q.query, start, end, step)));
      this._rows = buildTimeline(responses, queries, c, parseFloat(step) || 60, end);
      this._range = [start, end];
      this._error = undefined;
    } catch (e: any) {
      this._error = this._formatError(e);
    } finally {
      this._loading = false;
      this._loaded = true;
    }
  }

  private _time(ts: number): string {
    const span = this._range[1] - this._range[0];
    const opts: Intl.DateTimeFormatOptions =
      span > 2 * 86400
        ? { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }
        : { hour: '2-digit', minute: '2-digit' };
    return new Date(ts * 1000).toLocaleString(this._hass?.locale?.language, opts);
  }

  private _renderRow(row: TimelineRow) {
    const [start, end] = this._range;
    const span = end - start || 1;
    const showValues = this._config.show_values !== false;
    return html`
      <div class="row-label" title=${row.label}>${row.label}</div>
      <div class="row-bar">
        ${row.segments.map((s) => {
          const left = ((s.start - start) / span) * 100;
          const width = Math.max(0.2, ((s.end - s.start) / span) * 100);
          const tip = `${row.label}: ${s.text} (${this._time(s.start)} – ${this._time(s.end)})`;
          return html`<div
            class="segment"
            style="left:${left}%;width:${width}%;background:${s.color}"
            title=${tip}
            @mouseenter=${() => (this._hover = tip)}
          >
            ${showValues && width > 6 ? html`<span>${s.text}</span>` : nothing}
          </div>`;
        })}
      </div>
    `;
  }

  private _renderLegend() {
    const states = new Map<string, MappedState>();
    this._rows.forEach((r) => r.segments.forEach((s) => states.set(s.key, s)));
    return html`<div class="legend">
      ${[...states.values()].map(
        (s) => html`<div class="legend-item"><span class="legend-color" style="background:${s.color}"></span>${s.text}</div>`
      )}
    </div>`;
  }

  protected render() {
    const c = this._config;
    if (!this._hasQuery()) return this.renderPlaceholder('no_series');
    if (this._error) return this.renderError();
    if (!this._loaded) return this.renderLoading();

    const [start, end] = this._range;
    const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => start + (end - start) * f);

    return html`
      <ha-card>
        ${c.title ? html`<div class="header">${c.title}</div>` : nothing}
        ${this._rows.length
          ? html`
              <div class="timeline" style="--row-height: ${c.row_height || 26}px" @mouseleave=${() => (this._hover = '')}>
                ${this._rows.map((r) => this._renderRow(r))}
                <div class="axis">${ticks.map((t) => html`<span>${this._time(t)}</span>`)}</div>
              </div>
              <div class="tooltip">${this._hover}</div>
              ${c.show_legend !== false ? this._renderLegend() : nothing}
            `
          : html`<div class="placeholder-state">${localize('no_data', this._hass)}</div>`}
      </ha-card>
    `;
  }
}
