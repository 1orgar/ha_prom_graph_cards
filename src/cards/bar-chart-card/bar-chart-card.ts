import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BasePrometheusCard } from '../../shared/base-prometheus-card';
import { cardStyles } from '../../shared/card-styles';
import { BarChartCardConfig } from './bar-chart-card-config';
import { barChartStyles } from './bar-chart-card-styles';
import { formatValue, shortLabel } from '../../utils/format';
import { getThresholdColor } from '../../utils/color';
import { itemColor, parseInstant } from '../../utils/series';
import { localize } from '../../localize';
import './bar-chart-card-editor';

interface BarData {
  label: string;
  value: number;
  color: string;
  explicitColor?: string;
}

@customElement('prometheus-bar-card')
export class BarChartCard extends BasePrometheusCard<BarChartCardConfig> {
  @state() private _barData: BarData[] = [];
  @state() private _calculatedMax: number = 0;
  @state() private _loaded = false;

  static get styles() {
    return [cardStyles, barChartStyles];
  }

  public static getStubConfig(): Partial<BarChartCardConfig> {
    return {
      type: 'custom:prometheus-bar-card',
      name: 'Scrape duration',
      query: 'scrape_duration_seconds',
      group_by: 'job',
      unit: 's',
      decimals: 3,
      orientation: 'horizontal'
    };
  }

  static getConfigElement() {
    return document.createElement('prometheus-bar-card-editor');
  }

  /** All queries: main `query` + optional extra `series`. */
  private _queries(): { query: string; name?: string; color?: string }[] {
    const list: { query: string; name?: string; color?: string }[] = [];
    if (this._config.query?.trim()) list.push({ query: this._config.query, name: this._config.legend_format });
    for (const s of this._config.series || []) {
      if (s?.query?.trim()) list.push(s);
    }
    return list;
  }

  protected _hasQuery(): boolean {
    return this._queries().length > 0;
  }

  protected async _fetchData(): Promise<void> {
    const c = this._config;
    try {
      this._loading = true;
      const queries = this._queries();
      const responses = await Promise.all(queries.map((q) => this._client.instantQuery(q.query)));
      let data: BarData[] = [];

      responses.forEach((res, qi) => {
        const q = queries[qi];
        const template = q.name && q.name.includes('{{') ? q.name : undefined;
        const series = parseInstant(res, template);
        for (const s of series) {
          if (s.value === null) continue;
          let label = shortLabel(s.metric, template, c.group_by);
          // plain-text name: prefix labels when the query returns many series
          if (q.name && !template) label = series.length > 1 ? `${q.name} ${label}` : q.name;
          data.push({ label, value: s.value, color: '', explicitColor: series.length === 1 ? q.color : undefined });
        }
      });

      const sort = c.sort || 'desc';
      if (sort === 'desc') data.sort((a, b) => b.value - a.value);
      else if (sort === 'asc') data.sort((a, b) => a.value - b.value);
      else if (sort === 'name') data.sort((a, b) => a.label.localeCompare(b.label, undefined, { numeric: true }));
      if (c.limit && c.limit > 0) data = data.slice(0, c.limit);

      const maxVal = data.reduce((m, d) => Math.max(m, d.value), 0);
      this._calculatedMax = c.max || maxVal || 100;

      const byThreshold = c.color_mode !== 'series' && c.thresholds?.length;
      data.forEach((d, i) => {
        const paletteColor = itemColor(i, data.length, c.palette, d.explicitColor);
        d.color = byThreshold ? getThresholdColor(d.value, c.thresholds!, paletteColor) : paletteColor;
      });

      this._barData = data;
      this._error = undefined;
    } catch (e: any) {
      this._error = this._formatError(e);
    } finally {
      this._loading = false;
      this._loaded = true;
    }
  }

  protected render() {
    if (!this._hasQuery()) {
      return this.renderPlaceholder();
    }

    let body;
    if (this._error) {
      body = html`<div class="error-state">${this._error}</div>`;
    } else if (this._barData.length > 0) {
      body = this._renderBars();
    } else if (!this._loaded) {
      body = html`<div class="loading-state"></div>`;
    } else {
      body = html`<div class="placeholder-state">${localize('no_data', this._hass)}</div>`;
    }

    return html`
      <ha-card>
        ${this._config.name ? html`<div class="header">${this._config.name}</div>` : nothing}
        <div class="body">${body}</div>
      </ha-card>
    `;
  }

  private _fmt(value: number): string {
    return formatValue(value, this._config.decimals, this._config.unit);
  }

  private _renderBars() {
    const max = this._calculatedMax || 1;
    const showValues = this._config.show_values !== false;
    if (this._config.orientation === 'vertical') {
      return html`
        <div class="bars-container-vertical">
          ${this._barData.map((d) => {
            const pct = Math.min(100, Math.max(0, (d.value / max) * 100));
            return html`
              <div class="bar-col">
                ${showValues ? html`<div class="bar-col-value">${this._fmt(d.value)}</div>` : nothing}
                <div class="bar-col-track">
                  <div class="bar-col-fill" style="height: ${pct}%; background-color: ${d.color};"></div>
                </div>
                <div class="bar-col-label" title="${d.label}">${d.label}</div>
              </div>
            `;
          })}
        </div>
      `;
    }

    const barHeight = this._config.bar_height || 24;
    return html`
      <div class="bars-container-horizontal">
        ${this._barData.map((d) => {
          const pct = Math.min(100, Math.max(0, (d.value / max) * 100));
          return html`
            <div class="bar-row">
              <div class="bar-label" title="${d.label}">${d.label}</div>
              <div class="bar-track" style="height: ${barHeight}px;">
                <div class="bar-fill" style="width: ${pct}%; background-color: ${d.color};"></div>
              </div>
              ${showValues ? html`<div class="bar-value">${this._fmt(d.value)}</div>` : nothing}
            </div>
          `;
        })}
      </div>
    `;
  }
}
