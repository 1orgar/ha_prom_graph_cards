import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HaFormSchema, HomeAssistant } from '../../types';
import { GridCardConfig, GridRow, normaliseGrid, parseWidths } from './grid-layout';
import { gridEditorStyles } from './grid-card-editor-styles';
import { fireConfigChanged, loadHaComponents } from '../../shared/editor-utils';
import { localize } from '../../localize';

const ICON = {
  up: 'M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z',
  down: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
  del: 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z',
  edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
  plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z'
};

/** HA lazy-loads the card element editor / card picker; the vertical-stack editor pulls them in. */
let stackEditorLoaded: Promise<void> | undefined;
function loadStackEditor(): Promise<void> {
  if (customElements.get('hui-card-element-editor') && customElements.get('hui-card-picker')) return Promise.resolve();
  return (stackEditorLoaded ??= (async () => {
    const helpers = await (window as any).loadCardHelpers?.();
    const stack = await helpers?.createCardElement({ type: 'vertical-stack', cards: [] });
    await (stack?.constructor as any)?.getConfigElement?.();
  })().catch(() => undefined));
}

/** Where the inline card editor / picker is open: [row, card] (card = -1 -> picker) */
type Selection = { row: number; card: number } | null;

@customElement('prometheus-grid-card-editor')
export class GridCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public lovelace?: unknown;
  @state() private _config?: GridCardConfig;
  @state() private _sel: Selection = null;
  @state() private _ready = false;

  static styles = gridEditorStyles;

  public setConfig(config: GridCardConfig): void {
    this._config = normaliseGrid(config);
  }

  connectedCallback() {
    super.connectedCallback();
    Promise.all([loadHaComponents(), loadStackEditor()]).then(() => (this._ready = true));
  }

  private _t = (key: string, vars?: Record<string, string | number>) => localize(key, this.hass, vars);

  private _update(next: GridCardConfig) {
    this._config = next;
    fireConfigChanged(this, next);
  }

  private _rows(fn: (rows: GridRow[]) => GridRow[]) {
    if (!this._config) return;
    this._update({ ...this._config, rows: fn(this._config.rows.map((r) => ({ ...r, cards: [...r.cards] }))) });
  }

  private _move<T>(list: T[], from: number, to: number): T[] {
    if (to < 0 || to >= list.length) return list;
    const copy = [...list];
    const [item] = copy.splice(from, 1);
    copy.splice(to, 0, item);
    return copy;
  }

  // ---- general settings -------------------------------------------------

  private _generalSchema(): HaFormSchema[] {
    const bg = ['card', 'transparent', 'custom'].map((value) => ({ value, label: this._t(`background_${value}`) }));
    return [
      { name: 'title', selector: { text: {} } },
      {
        name: '',
        type: 'grid',
        schema: [
          { name: 'background', selector: { select: { mode: 'dropdown', options: bg } } },
          ...(this._config?.background === 'custom' ? [{ name: 'background_color', selector: { text: { type: 'color' } } }] : []),
          { name: 'gap', selector: { number: { min: 0, max: 48, mode: 'box', unit_of_measurement: 'px' } } },
          { name: 'inner_transparent', selector: { boolean: {} } },
          { name: 'stack_on_mobile', selector: { boolean: {} } }
        ]
      }
    ];
  }

  private _generalChanged(ev: CustomEvent) {
    ev.stopPropagation();
    if (!this._config) return;
    const v = ev.detail.value;
    const next: Record<string, unknown> = { ...this._config, ...v };
    for (const k of ['title', 'background_color', 'gap']) if (v[k] === '' || v[k] === undefined) delete next[k];
    this._update(next as unknown as GridCardConfig);
  }

  private _rowChanged(r: number, ev: CustomEvent) {
    ev.stopPropagation();
    const v = ev.detail.value;
    this._rows((rows) => {
      const row: GridRow = { ...rows[r], widths: v.widths || undefined, height: v.height || undefined };
      if (!row.widths) delete row.widths;
      if (!row.height) delete row.height;
      rows[r] = row;
      return rows;
    });
  }

  // ---- cards ------------------------------------------------------------

  private _cardPicked(r: number, ev: CustomEvent) {
    ev.stopPropagation();
    const config = ev.detail.config;
    this._rows((rows) => {
      rows[r].cards.push(config);
      return rows;
    });
    this._sel = { row: r, card: this._config!.rows[r].cards.length - 1 };
  }

  private _cardChanged(r: number, c: number, ev: CustomEvent) {
    ev.stopPropagation();
    const config = ev.detail.config;
    if (!config) return;
    this._rows((rows) => {
      rows[r].cards[c] = config;
      return rows;
    });
  }

  private _cardTitle(card: Record<string, unknown>, c: number): string {
    const type = String(card.type || '').replace('custom:', '');
    const name = (card.name || card.title) as string | undefined;
    return `${this._t('card_n', { n: c + 1 })} · ${name ? `${name} (${type})` : type}`;
  }

  // ---- render -----------------------------------------------------------

  private _iconBtn(path: string, label: string, onClick: () => void, disabled = false) {
    return html`<ha-icon-button .path=${path} .label=${label} ?disabled=${disabled} @click=${onClick}></ha-icon-button>`;
  }

  private _renderCard(r: number, c: number, card: Record<string, unknown>, pct: number, count: number) {
    const open = this._sel?.row === r && this._sel.card === c;
    return html`
      <div class="card">
        <div class="card-head">
          <span class="title" title=${String(card.type)}>${this._cardTitle(card, c)}</span>
          <span class="pct">${Math.round(pct)}%</span>
          ${this._iconBtn(ICON.up, this._t('move_up'), () => this._rows((rows) => {
            rows[r].cards = this._move(rows[r].cards, c, c - 1);
            return rows;
          }), c === 0)}
          ${this._iconBtn(ICON.down, this._t('move_down'), () => this._rows((rows) => {
            rows[r].cards = this._move(rows[r].cards, c, c + 1);
            return rows;
          }), c === count - 1)}
          ${this._iconBtn(ICON.edit, this._t('edit_card'), () => (this._sel = open ? null : { row: r, card: c }))}
          ${this._iconBtn(ICON.del, this._t('remove'), () => {
            this._sel = null;
            this._rows((rows) => {
              rows[r].cards.splice(c, 1);
              return rows;
            });
          })}
        </div>
        ${open
          ? html`<hui-card-element-editor
              .hass=${this.hass}
              .lovelace=${this.lovelace}
              .value=${card}
              @config-changed=${(ev: CustomEvent) => this._cardChanged(r, c, ev)}
            ></hui-card-element-editor>`
          : nothing}
      </div>
    `;
  }

  private _renderRow(row: GridRow, r: number) {
    const count = this._config!.rows.length;
    const widths = parseWidths(row.widths, Math.max(1, row.cards.length));
    const picking = this._sel?.row === r && this._sel.card === -1;
    const rowSchema: HaFormSchema[] = [
      {
        name: '',
        type: 'grid',
        schema: [
          { name: 'widths', selector: { text: {} } },
          { name: 'height', selector: { number: { min: 20, max: 1200, mode: 'box', unit_of_measurement: 'px' } } }
        ]
      }
    ];
    return html`
      <div class="row">
        <div class="row-head">
          <span class="title">${this._t('row_n', { n: r + 1 })} · ${row.cards.length}</span>
          ${this._iconBtn(ICON.up, this._t('move_up'), () => this._rows((rows) => this._move(rows, r, r - 1)), r === 0)}
          ${this._iconBtn(ICON.down, this._t('move_down'), () => this._rows((rows) => this._move(rows, r, r + 1)), r === count - 1)}
          ${this._iconBtn(ICON.del, this._t('remove'), () => {
            this._sel = null;
            this._rows((rows) => rows.filter((_, i) => i !== r));
          })}
        </div>
        ${row.cards.length
          ? html`<div class="preview">${widths.map((w) => html`<span style="width:${w}%"></span>`)}</div>`
          : nothing}
        <ha-form
          .hass=${this.hass}
          .data=${{ widths: row.widths || '', height: row.height }}
          .schema=${rowSchema}
          .computeLabel=${(s: HaFormSchema) => this._t(s.name === 'height' ? 'row_height_grid' : s.name)}
          .computeHelper=${(s: HaFormSchema) => (s.name === 'widths' ? this._t('helper_widths') : undefined)}
          @value-changed=${(ev: CustomEvent) => this._rowChanged(r, ev)}
        ></ha-form>
        ${row.cards.map((card, c) => this._renderCard(r, c, card, widths[c], row.cards.length))}
        ${picking
          ? html`<hui-card-picker
              .hass=${this.hass}
              .lovelace=${this.lovelace}
              @config-changed=${(ev: CustomEvent) => this._cardPicked(r, ev)}
            ></hui-card-picker>`
          : html`<div class="actions">
              <ha-button @click=${() => (this._sel = { row: r, card: -1 })}>
                <ha-svg-icon slot="start" .path=${ICON.plus}></ha-svg-icon>${this._t('add_card')}
              </ha-button>
            </div>`}
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config || !this._ready) return nothing;
    const c = this._config;
    const data = { background: 'card', gap: 8, inner_transparent: true, stack_on_mobile: true, ...c };
    return html`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .data=${data}
          .schema=${this._generalSchema()}
          .computeLabel=${(s: HaFormSchema) => this._t(s.name)}
          @value-changed=${this._generalChanged}
        ></ha-form>
        <div class="section-title">${this._t('rows')}</div>
        ${c.rows.map((row, r) => this._renderRow(row, r))}
        <div class="actions">
          <ha-button @click=${() => this._rows((rows) => [...rows, { cards: [] }])}>
            <ha-svg-icon slot="start" .path=${ICON.plus}></ha-svg-icon>${this._t('add_row')}
          </ha-button>
        </div>
      </div>
    `;
  }
}

