import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StatCardConfig } from './stat-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import {
  colorModeSchema,
  DECIMALS_SCHEMA,
  ENTRY_SCHEMA,
  LEGEND_FORMAT_SCHEMA,
  paletteSchema,
  QUERY_SCHEMA,
  REFRESH_SCHEMA,
  UNIT_SCHEMA
} from '../../shared/editor-utils';
import { localize } from '../../localize';
import { HaFormSchema } from '../../types';

@customElement('prometheus-stat-card-editor')
export class StatCardEditor extends BasePrometheusEditor<StatCardConfig> {
  protected _defaults(): Partial<StatCardConfig> {
    return {
      refresh_interval: 30,
      sparkline: false,
      sparkline_hours: 24,
      line_width: 2,
      sparkline_fill: true,
      reduce: 'none',
      palette: 'classic',
      color_mode: 'thresholds'
    };
  }

  protected _sections(): EditorSection[] {
    const sparkline: HaFormSchema[] = this._config?.sparkline
      ? [
          { name: 'sparkline_hours', selector: { number: { min: 1, max: 720, mode: 'box', unit_of_measurement: 'h' } } },
          { name: 'line_width', selector: { number: { min: 1, max: 10, step: 0.5, mode: 'slider', unit_of_measurement: 'px' } } },
          { name: 'sparkline_fill', selector: { boolean: {} } }
        ]
      : [];
    const reduceOptions = ['none', 'sum', 'avg', 'min', 'max'].map((value) => ({
      value,
      label: localize(`reduce_${value}`, this.hass)
    }));

    return [
      {
        schema: [
          ENTRY_SCHEMA,
          QUERY_SCHEMA,
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'reduce', selector: { select: { mode: 'dropdown', options: reduceOptions } } },
              LEGEND_FORMAT_SCHEMA
            ]
          }
        ]
      },
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
            schema: [{ name: 'sparkline', selector: { boolean: {} } }, ...sparkline]
          }
        ]
      },
      {
        title: 'section_colors',
        schema: [{ name: '', type: 'grid', schema: [colorModeSchema(this.hass), paletteSchema(this.hass)] }]
      },
      { title: 'section_advanced', schema: [REFRESH_SCHEMA] }
    ];
  }

  protected _renderExtra() {
    return html`${this._renderThresholds()}`;
  }
}
