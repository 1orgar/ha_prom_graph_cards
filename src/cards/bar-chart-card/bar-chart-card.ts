import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BasePrometheusCard } from '../../shared/base-prometheus-card';
import { cardStyles } from '../../shared/card-styles';
import { BarChartCardConfig } from './bar-chart-card-config';
import { barChartStyles } from './bar-chart-card-styles';
import { formatValue } from '../../utils/format';
import { getThresholdColor } from '../../utils/color';
import { localize } from '../../localize';
import './bar-chart-card-editor';

interface BarData {
  label: string;
  value: number;
  color: string;
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

  protected async _fetchData(): Promise<void> {
    try {
      this._loading = true;
      const response = await this._client.instantQuery(this._config.query!);
      const results = response?.data?.result || [];
      const data: BarData[] = [];
      let maxVal = 0;

      for (const res of results) {
        let label = 'Value';
        if (this._config.group_by && res.metric[this._config.group_by]) {
          label = res.metric[this._config.group_by];
        } else {
          const keys = Object.keys(res.metric).filter((k) => k !== '__name__');
          if (keys.length > 0) {
            label = res.metric[keys[0]];
          } else if (res.metric.__name__) {
            label = res.metric.__name__;
          }
        }

        const value = res.value ? parseFloat(res.value[1]) : 0;
        if (!Number.isFinite(value)) continue;
        if (value > maxVal) maxVal = value;
        data.push({ label, value, color: 'var(--primary-color)' });
      }

      data.sort((a, b) => b.value - a.value);
      this._calculatedMax = this._config.max || maxVal || 100;

      const thresholds = this._config.thresholds || [];
      data.forEach((d) => {
        d.color = thresholds.length ? getThresholdColor(d.value, thresholds) : 'var(--primary-color)';
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
    return formatValue(value, this._config.decimals ?? 2, this._config.unit);
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
