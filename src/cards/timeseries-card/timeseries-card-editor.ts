import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TimeseriesCardConfig } from './timeseries-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import {
  DECIMALS_SCHEMA,
  ENTRY_SCHEMA,
  LEGEND_FORMAT_SCHEMA,
  paletteSchema,
  REFRESH_SCHEMA,
  TIME_RANGE_OPTIONS,
  UNIT_SCHEMA
} from '../../shared/editor-utils';
import { localize } from '../../localize';
import { HaFormSchema, SeriesConfig } from '../../types';

// Per query: only query, legend name and an optional fixed colour.
// Area fill is configured once for the whole card (no duplicate switch).
const SERIES_SCHEMA: HaFormSchema[] = [
  { name: 'query', required: true, selector: { text: { multiline: true } } },
  {
    name: '',
    type: 'grid',
    schema: [
      { name: 'name', selector: { text: {} } },
      { name: 'color', selector: { text: { type: 'color' } } }
    ]
  }
];

@customElement('prometheus-timeseries-card-editor')
export class TimeseriesCardEditor extends BasePrometheusEditor<TimeseriesCardConfig> {
  protected _defaults(): Partial<TimeseriesCardConfig> {
    return {
      time_range: '1h',
      height: 200,
      show_legend: true,
      legend_mode: 'list',
      fill: false,
      fill_opacity: 20,
      line_width: 2,
      stacked: false,
      palette: 'classic',
      refresh_interval: 30
    };
  }

  private _options(prefix: string, values: string[]) {
    return values.map((value) => ({ value, label: localize(`${prefix}${value}`, this.hass) }));
  }

  protected _sections(): EditorSection[] {
    const fill = this._config?.fill || this._config?.stacked;
    return [
      {
        schema: [
          ENTRY_SCHEMA,
          { name: 'title', selector: { text: {} } },
          {
            name: '',
            type: 'grid',
            schema: [
              {
                name: 'time_range',
                selector: { select: { mode: 'dropdown', custom_value: true, options: TIME_RANGE_OPTIONS } }
              },
              { name: 'height', selector: { number: { min: 80, max: 800, mode: 'box', unit_of_measurement: 'px' } } },
              UNIT_SCHEMA,
              DECIMALS_SCHEMA,
              { name: 'min', selector: { number: { mode: 'box', step: 'any' } } },
              { name: 'max', selector: { number: { mode: 'box', step: 'any' } } }
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
              paletteSchema(this.hass),
              { name: 'line_width', selector: { number: { min: 0.5, max: 10, step: 0.5, mode: 'slider', unit_of_measurement: 'px' } } },
              { name: 'fill', selector: { boolean: {} } },
              { name: 'stacked', selector: { boolean: {} } },
              ...(fill
                ? [{ name: 'fill_opacity', selector: { number: { min: 0, max: 100, step: 5, mode: 'slider', unit_of_measurement: '%' } } }]
                : [])
            ]
          }
        ]
      },
      {
        title: 'section_legend',
        schema: [
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'show_legend', selector: { boolean: {} } },
              {
                name: 'legend_mode',
                selector: { select: { mode: 'dropdown', options: this._options('legend_mode_', ['list', 'table']) } }
              }
            ]
          },
          {
            name: 'legend_values',
            selector: {
              select: { multiple: true, mode: 'list', options: this._options('legend_value_', ['last', 'min', 'max', 'mean']) }
            }
          },
          LEGEND_FORMAT_SCHEMA
        ]
      },
      {
        title: 'section_advanced',
        schema: [{ name: '', type: 'grid', schema: [REFRESH_SCHEMA, { name: 'step', selector: { text: {} } }] }]
      }
    ];
  }

  protected _renderExtra() {
    return html`
      <div class="section-title">${localize('section_queries', this.hass)}</div>
      <div class="helper">${localize('helper_series_query', this.hass)}. ${localize('helper_name_series', this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series || []}
        .schema=${SERIES_SCHEMA}
        .itemTitle=${localize('query_n', this.hass)}
        .addLabel=${localize('add_query', this.hass)}
        .newItem=${() => ({ query: '' })}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          // drop legacy per-series `fill` once edited in the UI
          const series = (ev.detail.value as SeriesConfig[]).map(({ fill: _f, ...rest }) => rest);
          this._updateConfig({ series });
        }}
      ></prometheus-list-editor>
    `;
  }
}
