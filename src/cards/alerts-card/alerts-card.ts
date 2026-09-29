import { html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BasePrometheusCard } from '../../shared/base-prometheus-card';
import { cardStyles } from '../../shared/card-styles';
import { BaseCardConfig } from '../../types';
import type { PrometheusAlert } from '../../prometheus-client';
import { AlertFilter, filterAlerts, groupAlerts, severityColor, since } from './alerts-data';
import { localize } from '../../localize';
import './alerts-card-editor';

export interface AlertsCardConfig extends BaseCardConfig, AlertFilter {
  type: 'custom:prometheus-alerts-card';
  show_labels?: boolean;
  show_annotations?: boolean;
  max_rows?: number;
  /** one row per alert name with the number of series (default: every series is a row) */
  group_by_name?: boolean;
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
        .list { display: flex; flex-direction: column; gap: 6px; overflow-y: auto; }
        .list.fill { min-height: 0; }
        .series-count { font-size: 11px; color: var(--secondary-text-color); white-space: nowrap; }
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
    return { type: 'custom:prometheus-alerts-card', title: 'Alerts', show_annotations: true };
  }

  static getConfigElement() {
    return document.createElement('prometheus-alerts-card-editor');
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

  private _renderAlert(a: PrometheusAlert, count = 1, showLabels = false) {
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
            ${count > 1 ? html`<span class="series-count">× ${count}</span>` : nothing}
            <span class="time" title=${a.activeAt || ''}>
              ${a.state === 'pending' ? `${localize('state_pending', this._hass)} · ` : ''}${since(a.activeAt)}
            </span>
          </div>
          ${c.show_annotations !== false && summary ? html`<div class="summary">${summary}</div>` : nothing}
          ${(c.show_labels || showLabels) && count === 1 && labels.length
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
    const filtered = filterAlerts(this._alerts, c);
    // every series of an alert is a row; optionally collapsed to one row per alert name
    let rows = c.group_by_name ? groupAlerts(filtered) : filtered.map((alert) => ({ alert, count: 1 }));
    const total = filtered.length;
    if (c.max_rows) rows = rows.slice(0, c.max_rows);
    // several series of one alert: always show their labels so the rows can be told apart
    const perName = new Map<string, number>();
    filtered.forEach((a) => perName.set(a.labels.alertname, (perName.get(a.labels.alertname) || 0) + 1));
    const count = total ? html`<span class="card-extra">${total}</span>` : nothing;
    return html`
      <ha-card>
        ${this.renderHeader(count)}
        ${rows.length
          ? html`<div class="list ${this._fixedHeight() ? 'fill' : ''}">
              ${rows.map((r) => this._renderAlert(r.alert, r.count, (perName.get(r.alert.labels.alertname) || 0) > 1))}
            </div>`
          : html`<div class="ok"><ha-icon icon="mdi:check-circle"></ha-icon>${localize('no_alerts', this._hass)}</div>`}
      </ha-card>
    `;
  }
}
