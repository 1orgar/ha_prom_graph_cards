import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { GaugeCardConfig } from './gauge-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import { DECIMALS_SCHEMA, ENTRY_SCHEMA, QUERY_SCHEMA, REFRESH_SCHEMA, UNIT_SCHEMA } from '../../shared/editor-utils';

@customElement('prometheus-gauge-card-editor')
export class GaugeCardEditor extends BasePrometheusEditor<GaugeCardConfig> {
  protected _defaults(): Partial<GaugeCardConfig> {
    return { min: 0, max: 100, decimals: 1, arc_width: 8, refresh_interval: 30 };
  }

  protected _sections(): EditorSection[] {
    return [
      { schema: [ENTRY_SCHEMA, QUERY_SCHEMA] },
      {
        title: 'section_display',
        schema: [
          { name: 'name', selector: { text: {} } },
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'min', selector: { number: { mode: 'box', step: 'any' } } },
              { name: 'max', selector: { number: { mode: 'box', step: 'any' } } },
              UNIT_SCHEMA,
              DECIMALS_SCHEMA,
              { name: 'arc_width', selector: { number: { min: 2, max: 20, step: 1, mode: 'slider' } } }
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
