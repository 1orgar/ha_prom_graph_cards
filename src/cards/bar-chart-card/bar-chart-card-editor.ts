import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BarChartCardConfig } from './bar-chart-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import {
  advancedSection,
  colorModeSchema,
  DECIMALS_SCHEMA,
  ENTRY_SCHEMA,
  LEGEND_FORMAT_SCHEMA,
  paletteSchema,
  QUERY_SCHEMA,
  UNIT_SCHEMA
} from '../../shared/editor-utils';
import { localize } from '../../localize';
import { HaFormSchema } from '../../types';

const EXTRA_QUERY_SCHEMA: HaFormSchema[] = [
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

@customElement('prometheus-bar-card-editor')
export class BarChartCardEditor extends BasePrometheusEditor<BarChartCardConfig> {
  protected _defaults(): Partial<BarChartCardConfig> {
    return {
      orientation: 'horizontal',
      show_values: true,
      bar_height: 24,
      refresh_interval: 30,
      sort: 'desc',
      palette: 'classic',
      color_mode: 'thresholds'
    };
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
          LEGEND_FORMAT_SCHEMA
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
                selector: { select: { mode: 'dropdown', options: this._options('', ['horizontal', 'vertical']) } }
              },
              { name: 'show_values', selector: { boolean: {} } },
              UNIT_SCHEMA,
              DECIMALS_SCHEMA,
              {
                name: 'sort',
                selector: { select: { mode: 'dropdown', options: this._options('sort_', ['desc', 'asc', 'name', 'none']) } }
              },
              { name: 'limit', selector: { number: { min: 1, max: 100, mode: 'box' } } },
              { name: 'max', selector: { number: { mode: 'box', step: 'any' } } },
              { name: 'bar_height', selector: { number: { min: 4, max: 80, mode: 'box', unit_of_measurement: 'px' } } }
            ]
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
    return html`
      <div class="section-title">${localize('section_queries', this.hass)}</div>
      <div class="helper">${localize('helper_series_query', this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series || []}
        .schema=${EXTRA_QUERY_SCHEMA}
        .entryId=${this._config?.entry_id}
        .itemTitle=${localize('query_n', this.hass)}
        .addLabel=${localize('add_query', this.hass)}
        .newItem=${() => ({ query: '' })}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          const items = ev.detail.value as BarChartCardConfig['series'];
          this._updateConfig({ series: items && items.length ? items : undefined });
        }}
      ></prometheus-list-editor>
      ${this._renderThresholds()}
    `;
  }
}
