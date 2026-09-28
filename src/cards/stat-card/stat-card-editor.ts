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
  advancedSection,
  UNIT_SCHEMA
} from '../../shared/editor-utils';
import { localize } from '../../localize';
import { HaFormSchema } from '../../types';

@customElement('prometheus-stat-card-editor')
export class StatCardEditor extends BasePrometheusEditor<StatCardConfig> {
  protected _queryMode(): 'instant' | 'range' {
    return this._config?.sparkline ? 'range' : 'instant';
  }

  protected _defaults(): Partial<StatCardConfig> {
    return {
      refresh_interval: 30,
      sparkline: false,
      sparkline_hours: 24,
      line_width: 2,
      sparkline_fill: true,
      reduce: 'none',
      layout: 'default',
      tile_style: 'gradient',
      tile_height: 110,
      palette: 'classic',
      color_mode: 'thresholds'
    };
  }

  private _options(prefix: string, values: string[]) {
    return values.map((value) => ({ value, label: localize(`${prefix}${value}`, this.hass) }));
  }

  protected _sections(): EditorSection[] {
    const sparkline: HaFormSchema[] = this._config?.sparkline
      ? [
          { name: 'sparkline_hours', selector: { number: { min: 1, max: 720, mode: 'box', unit_of_measurement: 'h' } } },
          { name: 'line_width', selector: { number: { min: 1, max: 10, step: 0.5, mode: 'slider', unit_of_measurement: 'px' } } },
          { name: 'sparkline_fill', selector: { boolean: {} } }
        ]
      : [];
    const reduceOptions = this._options('reduce_', ['none', 'sum', 'avg', 'min', 'max']);
    const tiles = this._config?.layout === 'tiles';

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
              { name: 'layout', selector: { select: { mode: 'dropdown', options: this._options('layout_', ['default', 'tiles']) } } },
              ...(tiles
                ? [
                    { name: 'tile_style', selector: { select: { mode: 'dropdown', options: this._options('tile_style_', ['gradient', 'solid']) } } },
                    { name: 'tile_height', selector: { number: { min: 50, max: 400, mode: 'box', unit_of_measurement: 'px' } } },
                    { name: 'tile_min_width', selector: { number: { min: 60, max: 600, mode: 'box', unit_of_measurement: 'px' } } }
                  ]
                : [])
            ]
          },
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'name', selector: { text: {} } },
              ...(tiles ? [] : [{ name: 'icon', selector: { icon: {} } }]),
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
      advancedSection()
    ];
  }

  protected _renderExtra() {
    return html`${this._renderThresholds()}`;
  }
}
