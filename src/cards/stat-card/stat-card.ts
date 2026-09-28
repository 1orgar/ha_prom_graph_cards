import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BasePrometheusCard } from '../../shared/base-prometheus-card';
import { cardStyles } from '../../shared/card-styles';
import { formatParts, shortLabel } from '../../utils/format';
import { getThresholdColor } from '../../utils/color';
import { calculateStep } from '../../utils/time';
import { itemColor, lastValue, parseInstant, parseRange, reduceValues } from '../../utils/series';
import '../../shared/sparkline';
import './stat-card-editor';
import { StatCardConfig } from './stat-card-config';
import { statStyles } from './stat-card-styles';

interface StatItem {
  label: string;
  value: number | null;
  history: (number | null)[];
}

@customElement('prometheus-stat-card')
export class StatCard extends BasePrometheusCard<StatCardConfig> {
  @state() private _items: StatItem[] = [];
  @state() private _loaded = false;

  static get styles() {
    return [cardStyles, statStyles];
  }

  static getStubConfig(): Partial<StatCardConfig> {
    return {
      type: 'custom:prometheus-stat-card',
      name: 'Prometheus',
      query: 'up',
      icon: 'mdi:chart-line',
      decimals: 0,
      sparkline: true
    };
  }

  static getConfigElement() {
    return document.createElement('prometheus-stat-card-editor');
  }

  protected async _fetchData() {
    const config = this._config;
    try {
      this._loading = true;
      if (config.sparkline) {
        const hours = config.sparkline_hours || 24;
        const end = Math.floor(Date.now() / 1000);
        const start = end - hours * 3600;
        const res = await this._client.rangeQuery(config.query!, start, end, calculateStep(start, end, 120));
        this._items = parseRange(res, config.legend_format).map((s) => ({
          label: shortLabel(s.metric, config.legend_format),
          value: lastValue(s.points),
          history: s.points.map((p) => p[1])
        }));
      } else {
        const res = await this._client.instantQuery(config.query!);
        this._items = parseInstant(res, config.legend_format).map((s) => ({
          ...s,
          label: shortLabel(s.metric, config.legend_format),
          history: []
        }));
      }
      this._error = undefined;
    } catch (e: any) {
      this._error = this._formatError(e);
    } finally {
      this._loading = false;
      this._loaded = true;
    }
  }

  /** Items to display: one per series, or one combined item. */
  private _displayItems(): StatItem[] {
    const mode = this._config.reduce || 'none';
    if (mode === 'none' || this._items.length <= 1) return this._items;
    const len = Math.max(...this._items.map((i) => i.history.length));
    const history: (number | null)[] = [];
    for (let i = 0; i < len; i++) {
      history.push(reduceValues(this._items.map((it) => it.history[i] ?? null), mode));
    }
    const value = reduceValues(this._items.map((i) => i.value), mode);
    return [{ label: this._config.name || '', value, history }];
  }

  private _color(item: StatItem, index: number, total: number): string {
    const c = this._config;
    const byThreshold = c.color_mode !== 'series' && (c.thresholds?.length || total === 1);
    if (byThreshold) {
      const fallback = total > 1 ? itemColor(index, total, c.palette) : undefined;
      return getThresholdColor(item.value ?? 0, c.thresholds || [], fallback);
    }
    return itemColor(index, total, c.palette);
  }

  private _renderValue(value: number | null, cls = 'value') {
    const f = formatParts(value, this._config.unit, this._config.decimals);
    const unit = f.suffix.trim();
    return html`<span class=${cls}>${f.prefix}${f.text}</span>${unit ? html`<span class="unit">${unit}</span>` : nothing}`;
  }

  private _renderRows(items: StatItem[]) {
    return html`<div class="rows">
      ${items.map(
        (item, i) => html`<div class="row">
          <span class="dot" style="background: ${this._color(item, i, items.length)}"></span>
          <span class="label" title=${item.label}>${item.label}</span>
          <span class="row-value">${this._renderValue(item.value, '')}</span>
        </div>`
      )}
    </div>`;
  }

  /** Grafana-like tile background: gradient from a lighter to a darker shade of the colour. */
  private _tileBackground(color: string): string {
    if (this._config.tile_style === 'solid') return color;
    return `linear-gradient(120deg, color-mix(in srgb, ${color} 70%, white) 0%, ${color} 45%, color-mix(in srgb, ${color} 75%, black) 100%)`;
  }

  private _renderTiles(items: StatItem[]) {
    const c = this._config;
    const list = items.length ? items : [{ label: c.name || '', value: null, history: [] }];
    const many = list.length > 1;
    const style = [
      `--tile-min: ${c.tile_min_width || (many ? 140 : 200)}px`,
      `--tile-height: ${c.tile_height || 110}px`,
      `--tile-font: ${many ? 28 : 40}px`
    ].join(';');
    return html`
      <ha-card>
        ${c.name && many ? html`<div class="card-title">${c.name}</div>` : nothing}
        <div class="tiles" style=${style}>
          ${list.map((item, i) => {
            const color = this._color(item, i, list.length);
            const label = many ? item.label : c.name || item.label;
            return html`
              <div class="tile" style="--tile-bg: ${this._tileBackground(color)}">
                ${label ? html`<div class="tile-label" title=${label}>${label}</div>` : nothing}
                <div class="tile-value">${this._renderValue(item.value, '')}</div>
                ${c.sparkline && item.history.length > 1
                  ? html`<prometheus-sparkline
                      .series=${[{ values: item.history, color: 'rgba(255,255,255,0.85)' }]}
                      .fill=${c.sparkline_fill !== false}
                      .lineWidth=${c.line_width ?? 2}
                      .height=${Math.round((c.tile_height || 110) * 0.4)}
                    ></prometheus-sparkline>`
                  : nothing}
              </div>
            `;
          })}
        </div>
      </ha-card>
    `;
  }

  render() {
    const config = this._config;
    if (!this._hasQuery()) return this.renderPlaceholder();
    if (this._error) return this.renderError();
    if (!this._loaded) return this.renderLoading();

    const items = this._displayItems();
    if (config.layout === 'tiles') return this._renderTiles(items);
    const single = items.length <= 1;
    const main = items[0] || { label: '', value: null, history: [] };
    const mainColor = this._color(main, 0, items.length);
    const valueStyle = config.thresholds?.length ? `--value-color: ${mainColor}` : '';
    const showSpark = config.sparkline && items.some((i) => i.history.length > 1);

    return html`
      <ha-card>
        <div class="stat-container">
          ${config.icon
            ? html`<div class="icon-container" style="--icon-color: ${mainColor}">
                <ha-icon .icon=${config.icon}></ha-icon>
              </div>`
            : nothing}
          <div class="info-container">
            ${config.name ? html`<div class="name">${config.name}</div>` : nothing}
            ${single ? html`<div class="value-container" style=${valueStyle}>${this._renderValue(main.value)}</div>` : nothing}
          </div>
        </div>
        ${single ? nothing : this._renderRows(items)}
        ${showSpark
          ? html`<prometheus-sparkline
              .series=${items.map((item, i) => ({ values: item.history, color: this._color(item, i, items.length) }))}
              .fill=${config.sparkline_fill !== false}
              .lineWidth=${config.line_width ?? 2}
              .height=${40}
            ></prometheus-sparkline>`
          : nothing}
      </ha-card>
    `;
  }

  public getCardSize(): number {
    if (this._config?.layout === 'tiles') return 3;
    return 2 + Math.min(4, Math.max(0, this._displayItems().length - 1));
  }
}
