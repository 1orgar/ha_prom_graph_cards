import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BarChartCardConfig } from './bar-chart-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import { DECIMALS_SCHEMA, ENTRY_SCHEMA, QUERY_SCHEMA, REFRESH_SCHEMA, UNIT_SCHEMA } from '../../shared/editor-utils';
import { localize } from '../../localize';

@customElement('prometheus-bar-card-editor')
export class BarChartCardEditor extends BasePrometheusEditor<BarChartCardConfig> {
  protected _defaults(): Partial<BarChartCardConfig> {
    return { orientation: 'horizontal', decimals: 2, show_values: true, bar_height: 24, refresh_interval: 30 };
  }

  protected _sections(): EditorSection[] {
    return [
      {
        schema: [
          ENTRY_SCHEMA,
          QUERY_SCHEMA,
          { name: 'group_by', selector: { text: {} } }
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
              {
                name: 'orientation',
                selector: {
                  select: {
                    mode: 'dropdown',
                    options: [
                      { value: 'horizontal', label: localize('horizontal', this.hass) },
                      { value: 'vertical', label: localize('vertical', this.hass) }
                    ]
                  }
                }
              },
              { name: 'show_values', selector: { boolean: {} } },
              UNIT_SCHEMA,
              DECIMALS_SCHEMA,
              { name: 'max', selector: { number: { mode: 'box', step: 'any' } } },
              { name: 'bar_height', selector: { number: { min: 4, max: 80, mode: 'box', unit_of_measurement: 'px' } } }
            ]
          }
        ]
      },
      { title: 'section_advanced', schema: [REFRESH_SCHEMA] }
    ];
  }

  protected _renderExtra() {
    return html`${this._renderThresholds()}`;
  }
}
