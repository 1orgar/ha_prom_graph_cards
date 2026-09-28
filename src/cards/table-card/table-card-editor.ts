import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { TableCardConfig } from './table-card';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import { advancedSection, DECIMALS_SCHEMA, ENTRY_SCHEMA, QUERY_SCHEMA, UNIT_SCHEMA } from '../../shared/editor-utils';
import { localize } from '../../localize';

@customElement('prometheus-table-card-editor')
export class TableCardEditor extends BasePrometheusEditor<TableCardConfig> {
  protected _defaults(): Partial<TableCardConfig> {
    return { sort_by: 'value', sort_dir: 'desc', color_cells: false, refresh_interval: 30 };
  }

  private _options(prefix: string, values: string[]) {
    return values.map((value) => ({ value, label: localize(`${prefix}${value}`, this.hass) }));
  }

  protected _sections(): EditorSection[] {
    return [
      {
        schema: [
          ENTRY_SCHEMA,
          QUERY_SCHEMA,
          { name: 'columns', selector: { text: { multiple: true } } },
          { name: 'hide_columns', selector: { text: { multiple: true } } }
        ]
      },
      {
        title: 'section_display',
        schema: [
          { name: 'name', selector: { text: {} } },
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'value_column', selector: { text: {} } },
              UNIT_SCHEMA,
              DECIMALS_SCHEMA,
              { name: 'max_rows', selector: { number: { min: 1, max: 1000, mode: 'box' } } },
              { name: 'sort_by', selector: { select: { mode: 'dropdown', options: this._options('sort_by_', ['value', 'label']) } } },
              { name: 'sort_dir', selector: { select: { mode: 'dropdown', options: this._options('sort_dir_', ['desc', 'asc']) } } },
              { name: 'color_cells', selector: { boolean: {} } }
            ]
          }
        ]
      },
      advancedSection()
    ];
  }

  protected _renderExtra() {
    return html`${this._renderThresholds()}`;
  }
}
