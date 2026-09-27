import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StatCardConfig } from './stat-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import { DECIMALS_SCHEMA, ENTRY_SCHEMA, QUERY_SCHEMA, REFRESH_SCHEMA, UNIT_SCHEMA } from '../../shared/editor-utils';

@customElement('prometheus-stat-card-editor')
export class StatCardEditor extends BasePrometheusEditor<StatCardConfig> {
  protected _defaults(): Partial<StatCardConfig> {
    return { decimals: 1, refresh_interval: 30, sparkline: false, sparkline_hours: 24 };
  }

  protected _sections(): EditorSection[] {
    const sections: EditorSection[] = [
      { schema: [ENTRY_SCHEMA, QUERY_SCHEMA] },
      {
        title: 'section_display',
        schema: [
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'name', selector: { text: {} } },
              { name: 'icon', selector: { icon: {} } },
              UNIT_SCHEMA,
              DECIMALS_SCHEMA
            ]
          },
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'sparkline', selector: { boolean: {} } },
              ...(this._config?.sparkline
                ? [{ name: 'sparkline_hours', selector: { number: { min: 1, max: 720, mode: 'box', unit_of_measurement: 'h' } } }]
                : [])
            ]
          }
        ]
      },
      { title: 'section_advanced', schema: [REFRESH_SCHEMA] }
    ];
    return sections;
  }

  protected _renderExtra() {
    return html`${this._renderThresholds()}`;
  }
}
