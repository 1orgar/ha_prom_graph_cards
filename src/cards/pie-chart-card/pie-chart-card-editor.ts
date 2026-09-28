import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PieChartCardConfig } from './pie-chart-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import { advancedSection, DECIMALS_SCHEMA, ENTRY_SCHEMA, paletteSchema, UNIT_SCHEMA } from '../../shared/editor-utils';
import { localize } from '../../localize';
import { HaFormSchema, SeriesConfig } from '../../types';

const QUERY_ITEM_SCHEMA: HaFormSchema[] = [
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

@customElement('prometheus-pie-card-editor')
export class PieChartCardEditor extends BasePrometheusEditor<PieChartCardConfig> {
  protected _defaults(): Partial<PieChartCardConfig> {
    return {
      pie_type: 'donut',
      donut_width: 40,
      show_legend: true,
      legend_position: 'right',
      legend_values: ['value'],
      show_labels: false,
      show_total: true,
      sort: 'desc',
      size: 180,
      palette: 'classic',
      refresh_interval: 30
    };
  }

  private _options(prefix: string, values: string[]) {
    return values.map((value) => ({ value, label: localize(`${prefix}${value}`, this.hass) }));
  }

  protected _sections(): EditorSection[] {
    const donut = this._config?.pie_type !== 'pie';
    return [
      {
        schema: [
          ENTRY_SCHEMA,
          { name: 'title', selector: { text: {} } },
          { name: '', type: 'grid', schema: [UNIT_SCHEMA, DECIMALS_SCHEMA] }
        ]
      },
      {
        title: 'section_display',
        schema: [
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'pie_type', selector: { select: { mode: 'dropdown', options: this._options('pie_type_', ['donut', 'pie']) } } },
              ...(donut
                ? [
                    { name: 'donut_width', selector: { number: { min: 10, max: 90, step: 5, mode: 'slider', unit_of_measurement: '%' } } },
                    { name: 'show_total', selector: { boolean: {} } }
                  ]
                : []),
              { name: 'show_labels', selector: { boolean: {} } },
              { name: 'size', selector: { number: { min: 80, max: 500, mode: 'box', unit_of_measurement: 'px' } } },
              { name: 'sort', selector: { select: { mode: 'dropdown', options: this._options('sort_', ['desc', 'asc', 'none']) } } },
              { name: 'limit', selector: { number: { min: 1, max: 50, mode: 'box' } } },
              paletteSchema(this.hass)
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
                name: 'legend_position',
                selector: { select: { mode: 'dropdown', options: this._options('legend_position_', ['right', 'bottom']) } }
              }
            ]
          },
          {
            name: 'legend_values',
            selector: { select: { multiple: true, mode: 'list', options: this._options('legend_pie_', ['value', 'percent']) } }
          }
        ]
      },
      advancedSection()
    ];
  }

  protected _renderExtra() {
    return html`
      <div class="section-title">${localize('section_queries', this.hass)}</div>
      <div class="helper">${localize('helper_pie_query', this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series || []}
        .schema=${QUERY_ITEM_SCHEMA}
        .itemTitle=${localize('query_n', this.hass)}
        .addLabel=${localize('add_query', this.hass)}
        .newItem=${() => ({ query: '' })}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          this._updateConfig({ series: ev.detail.value as SeriesConfig[] });
        }}
      ></prometheus-list-editor>
    `;
  }
}
