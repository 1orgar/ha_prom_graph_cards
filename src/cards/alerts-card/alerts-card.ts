import { html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BasePrometheusCard } from '../../shared/base-prometheus-card';
import { cardStyles } from '../../shared/card-styles';
import { BaseCardConfig } from '../../types';
import type { PrometheusAlert } from '../../prometheus-client';
import { AlertFilter, filterAlerts, severityColor, since } from './alerts-data';
import { localize } from '../../localize';
import './alerts-card-editor';

export interface AlertsCardConfig extends BaseCardConfig, AlertFilter {
  type: 'custom:prometheus-alerts-card';
  show_labels?: boolean;
  show_annotations?: boolean;
  max_rows?: number;
}

const HIDDEN_LABELS = new Set(['alertname', 'severity']);

@customElement('prometheus-alerts-card')
export class AlertsCard extends BasePrometheusCard<AlertsCardConfig> {
  @state() private _alerts: PrometheusAlert[] = [];
  @state() private _loaded = false;

  static get styles() {
    return [
      cardStyles,
      css`
        ha-card { padding: 12px 16px; gap: 8px; }
        .head { display: flex; justify-content: space-between; align-items: center; }
        .name { font-size: 14px; font-weight: 500; color: var(--secondary-text-color); }
        .count { font-size: 12px; color: var(--secondary-text-color); }
        .list { display: flex; flex-direction: column; gap: 6px; }
        .alert { display: flex; gap: 10px; padding: 8px 10px; border-radius: 8px;
          background: var(--secondary-background-color, rgba(127, 127, 127, 0.08)); border-left: 4px solid var(--sev); }
        .alert.pending { opacity: 0.75; border-left-style: dashed; }
        .body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
        .title { display: flex; gap: 8px; align-items: baseline; }
        .alertname { font-weight: 600; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .badge { font-size: 10px; text-transform: uppercase; padding: 1px 6px; border-radius: 8px; color: #fff; background: var(--sev); white-space: nowrap; }
        .time { margin-left: auto; font-size: 11px; color: var(--secondary-text-color); white-space: nowrap; }
        .summary { font-size: 12px; color: var(--primary-text-color); }
        .labels { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }
        .label { font-size: 10px; padding: 1px 6px; border-radius: 6px; background: var(--card-background-color); color: var(--secondary-text-color); }
        .ok { display: flex; align-items: center; gap: 8px; color: var(--success-color, #43a047); font-size: 14px; padding: 8px 0; }
      `
    ];
  }

  static getStubConfig(): Partial<AlertsCardConfig> {
    return { type: 'custom:prometheus-alerts-card', name: 'Alerts', show_annotations: true };
  }

  static getConfigElement() {
    return document.createElement('prometheus-alerts-card-editor');
  }

  public getGridOptions() {
    return { columns: 6, rows: 'auto' as const, min_columns: 4 };
  }

  /** No query needed: always fetch. */
  protected _hasQuery(): boolean {
    return true;
  }

  protected async _fetchData(): Promise<void> {
    try {
      this._loading = true;
      this._alerts = await this._client.getAlerts();
      this._error = undefined;
    } catch (e: any) {
      this._error = this._formatError(e);
    } finally {
      this._loading = false;
      this._loaded = true;
    }
  }

  private _renderAlert(a: PrometheusAlert) {
    const c = this._config;
    const sev = a.labels.severity;
    const summary = a.annotations?.summary || a.annotations?.description;
    const labels = Object.entries(a.labels).filter(([k]) => !HIDDEN_LABELS.has(k));
    return html`
      <div class="alert ${a.state}" style="--sev:${severityColor(sev)}">
        <div class="body">
          <div class="title">
            <span class="alertname" title=${a.labels.alertname}>${a.labels.alertname}</span>
            ${sev ? html`<span class="badge">${sev}</span>` : nothing}
            <span class="time" title=${a.activeAt || ''}>
              ${a.state === 'pending' ? `${localize('state_pending', this._hass)} · ` : ''}${since(a.activeAt)}
            </span>
          </div>
          ${c.show_annotations !== false && summary ? html`<div class="summary">${summary}</div>` : nothing}
          ${c.show_labels && labels.length
            ? html`<div class="labels">${labels.map(([k, v]) => html`<span class="label">${k}=${v}</span>`)}</div>`
            : nothing}
        </div>
      </div>
    `;
  }

  render() {
    const c = this._config;
    if (this._error) return this.renderError();
    if (!this._loaded) return this.renderLoading();
    let list = filterAlerts(this._alerts, c);
    const total = list.length;
    if (c.max_rows) list = list.slice(0, c.max_rows);
    return html`
      <ha-card>
        <div class="head">
          ${c.name ? html`<div class="name">${c.name}</div>` : html`<span></span>`}
          ${total ? html`<span class="count">${total}</span>` : nothing}
        </div>
        ${list.length
          ? html`<div class="list">${list.map((a) => this._renderAlert(a))}</div>`
          : html`<div class="ok"><ha-icon icon="mdi:check-circle"></ha-icon>${localize('no_alerts', this._hass)}</div>`}
      </ha-card>
    `;
  }
}
