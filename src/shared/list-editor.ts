import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HaFormSchema, HomeAssistant } from '../types';
import { localize } from '../localize';
import { fireEvent } from './editor-utils';

const MDI_DELETE =
  'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z';
const MDI_PLUS = 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z';

/**
 * Generic editor for a list of objects (thresholds, series...).
 * Each item is edited with its own <ha-form>. Fires `value-changed` with the new array.
 */
@customElement('prometheus-list-editor')
export class PrometheusListEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public items: Record<string, unknown>[] = [];
  @property({ attribute: false }) public schema: HaFormSchema[] = [];
  @property({ attribute: false }) public newItem: () => Record<string, unknown> = () => ({});
  @property() public itemTitle = '';
  @property() public addLabel = '';

  private _computeLabel = (schema: HaFormSchema): string => localize(schema.name, this.hass);

  private _emit(items: Record<string, unknown>[]) {
    fireEvent(this, 'value-changed', { value: items });
  }

  private _itemChanged(index: number, ev: CustomEvent) {
    ev.stopPropagation();
    const items = [...this.items];
    const value = { ...ev.detail.value };
    for (const key of Object.keys(value)) {
      if (value[key] === '' || value[key] === undefined) delete value[key];
    }
    items[index] = value;
    this._emit(items);
  }

  private _remove(index: number) {
    const items = [...this.items];
    items.splice(index, 1);
    this._emit(items);
  }

  private _add() {
    this._emit([...this.items, this.newItem()]);
  }

  render() {
    return html`
      ${this.items.map(
        (item, i) => html`
          <div class="item">
            <div class="item-header">
              <span>${this.itemTitle ? this.itemTitle.replace('{n}', String(i + 1)) : nothing}</span>
              <ha-icon-button
                .label=${localize('remove', this.hass)}
                .path=${MDI_DELETE}
                @click=${() => this._remove(i)}
              ></ha-icon-button>
            </div>
            <ha-form
              .hass=${this.hass}
              .data=${item}
              .schema=${this.schema}
              .computeLabel=${this._computeLabel}
              @value-changed=${(ev: CustomEvent) => this._itemChanged(i, ev)}
            ></ha-form>
          </div>
        `
      )}
      <ha-button class="add" @click=${this._add}>
        <ha-svg-icon slot="start" .path=${MDI_PLUS}></ha-svg-icon>
        <ha-svg-icon slot="icon" .path=${MDI_PLUS}></ha-svg-icon>
        ${this.addLabel}
      </ha-button>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .item {
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-card-border-radius, 12px);
      padding: 4px 12px 12px;
    }
    .item-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;
      color: var(--secondary-text-color);
    }
    .add {
      align-self: flex-start;
    }
  `;
}
