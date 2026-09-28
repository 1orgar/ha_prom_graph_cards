import { LitElement, html, css, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cardStyles } from '../../shared/card-styles';
import { HomeAssistant } from '../../types';
import { GridCardConfig, gridTemplate, normaliseGrid, parseWidths } from './grid-layout';
import { localize } from '../../localize';
import './grid-card-editor';

type CardElement = HTMLElement & { hass?: HomeAssistant; setConfig?: (c: unknown) => void };

let helpersPromise: Promise<any> | undefined;
const cardHelpers = () => (helpersPromise ??= (window as any).loadCardHelpers?.() ?? Promise.resolve(undefined));

/**
 * Layout grid: vertical rows, each row has any number of cards with width
 * ratios (e.g. 25/25/50), all on one shared background.
 * Child cards are created with HA's card helpers, so any card type works.
 */
@customElement('prometheus-grid-card')
export class GridCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ type: Boolean, reflect: true }) public preview = false;
  @state() private _config?: GridCardConfig;
  @state() private _elements: CardElement[][] = [];

  static get styles() {
    return [
      cardStyles,
      css`
        ha-card { padding: var(--grid-pad, 12px); gap: var(--grid-gap, 8px); }
        ha-card.custom-bg { background: var(--grid-bg); }
        .title { font-size: 1.2rem; font-weight: 500; color: var(--primary-text-color); padding: 0 4px 4px; }
        .row { display: grid; gap: var(--grid-gap, 8px); align-items: stretch; }
        .cell { min-width: 0; display: flex; flex-direction: column; }
        .cell > * { flex: 1; }
        .row.fixed .cell { height: var(--row-h); overflow: hidden; }
        .empty { color: var(--secondary-text-color); font-size: 13px; padding: 8px; text-align: center;
          border: 1px dashed var(--divider-color); border-radius: 8px; }
        .inner-transparent .cell > * {
          --ha-card-background: transparent;
          --card-background-color: transparent;
          --ha-card-box-shadow: none;
          --ha-card-border-width: 0;
        }
        @media (max-width: 600px) {
          .row.stack { grid-template-columns: minmax(0, 1fr) !important; }
        }
      `
    ];
  }

  static getStubConfig(): Partial<GridCardConfig> {
    return {
      type: 'custom:prometheus-grid-card',
      rows: [
        {
          widths: '25,25,50',
          cards: [
            { type: 'custom:prometheus-stat-card', name: 'Targets', query: 'count(up)', transparent: true },
            { type: 'custom:prometheus-stat-card', name: 'Up', query: 'sum(up)', transparent: true },
            { type: 'custom:prometheus-gauge-card', name: 'Up %', query: 'avg(up) * 100', unit: 'percent', transparent: true }
          ]
        },
        {
          cards: [{ type: 'custom:prometheus-timeseries-card', time_range: '1h', transparent: true, series: [{ query: 'sum(up)', name: 'Up' }] }]
        }
      ]
    };
  }

  static getConfigElement() {
    return document.createElement('prometheus-grid-card-editor');
  }

  public setConfig(config: GridCardConfig): void {
    if (!config) throw new Error('Invalid configuration');
    this._config = normaliseGrid(config);
    this._build();
  }

  public getCardSize(): number {
    return Math.max(1, (this._config?.rows.length || 1) * 3);
  }

  public getGridOptions() {
    return { columns: 12, rows: 'auto' as const, min_columns: 6 };
  }

  private async _build() {
    const config = this._config;
    if (!config) return;
    const helpers = await cardHelpers();
    if (config !== this._config) return; // a newer config arrived meanwhile
    this._elements = config.rows.map((row) =>
      row.cards.map((cardConfig) => {
        const el: CardElement = helpers
          ? helpers.createCardElement(cardConfig)
          : Object.assign(document.createElement('div'), { textContent: String((cardConfig as any).type) });
        if (this.hass) el.hass = this.hass;
        // child cards may ask to be rebuilt (e.g. after lazy-loading their definition)
        el.addEventListener('ll-rebuild', (ev) => {
          ev.stopPropagation();
          this._build();
        }, { once: true });
        return el;
      })
    );
  }

  protected updated(changed: PropertyValues) {
    super.updated(changed);
    if (changed.has('hass') && this.hass) {
      for (const row of this._elements) for (const el of row) el.hass = this.hass;
    }
  }

  render() {
    const c = this._config;
    if (!c) return nothing;
    const bg = c.background || 'card';
    const style = [
      `--grid-gap:${c.gap ?? 8}px`,
      bg === 'custom' && c.background_color ? `--grid-bg:${c.background_color}` : '',
      bg === 'transparent' ? '--grid-pad:0px' : ''
    ].filter(Boolean).join(';');
    const cls = [bg === 'custom' ? 'custom-bg' : '', c.inner_transparent !== false ? 'inner-transparent' : ''].join(' ');

    return html`
      <ha-card class=${cls} style=${style}>
        ${c.title ? html`<div class="title">${c.title}</div>` : nothing}
        ${c.rows.map((row, r) => {
          const els = this._elements[r] || [];
          if (!row.cards.length) {
            return this.preview || this.hasAttribute('editing')
              ? html`<div class="empty">${localize('empty_row', this.hass)}</div>`
              : nothing;
          }
          const widths = parseWidths(row.widths, row.cards.length);
          const rowCls = `row ${row.height ? 'fixed' : ''} ${c.stack_on_mobile !== false ? 'stack' : ''}`;
          return html`<div class=${rowCls} style="grid-template-columns:${gridTemplate(widths)};--row-h:${row.height || 0}px">
            ${els.map((el) => html`<div class="cell">${el}</div>`)}
          </div>`;
        })}
      </ha-card>
    `;
  }
}
