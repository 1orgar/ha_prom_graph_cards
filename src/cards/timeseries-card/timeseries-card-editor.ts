import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TimeseriesCardConfig } from './timeseries-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import { DECIMALS_SCHEMA, ENTRY_SCHEMA, REFRESH_SCHEMA, TIME_RANGE_OPTIONS, UNIT_SCHEMA } from '../../shared/editor-utils';
import { localize } from '../../localize';
import { HaFormSchema } from '../../types';

const SERIES_SCHEMA: HaFormSchema[] = [
  { name: 'query', required: true, selector: { text: { multiline: true } } },
  {
    name: '',
    type: 'grid',
    schema: [
      { name: 'name', selector: { text: {} } },
      { name: 'color', selector: { text: { type: 'color' } } },
      { name: 'fill', selector: { boolean: {} } }
    ]
  }
];

@customElement('prometheus-timeseries-card-editor')
export class TimeseriesCardEditor extends BasePrometheusEditor<TimeseriesCardConfig> {
  protected _defaults(): Partial<TimeseriesCardConfig> {
    return { time_range: '1h', height: 200, show_legend: true, fill: false, decimals: 2, refresh_interval: 30 };
  }

  protected _sections(): EditorSection[] {
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
              { name: 'show_legend', selector: { boolean: {} } },
              { name: 'fill', selector: { boolean: {} } }
            ]
          }
        ]
      },
      {
        title: 'section_advanced',
        schema: [
          {
            name: '',
            type: 'grid',
            schema: [REFRESH_SCHEMA, { name: 'step', selector: { text: {} } }]
          }
        ]
      }
    ];
  }

  protected _renderExtra() {
    return html`
      <div class="section-title">${localize('section_series', this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.series || []}
        .schema=${SERIES_SCHEMA}
        .itemTitle=${localize('series_n', this.hass)}
        .addLabel=${localize('add_series', this.hass)}
        .newItem=${() => ({ query: '', name: localize('series_n', this.hass, { n: (this._config?.series?.length || 0) + 1 }) })}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          this._updateConfig({ series: ev.detail.value });
        }}
      ></prometheus-list-editor>
    `;
  }
}
