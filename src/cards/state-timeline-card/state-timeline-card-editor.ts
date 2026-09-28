import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { StateTimelineCardConfig } from './state-timeline-card-config';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import {
  advancedSection,
  DECIMALS_SCHEMA,
  ENTRY_SCHEMA,
  paletteSchema,
  TIME_RANGE_OPTIONS,
  UNIT_SCHEMA
} from '../../shared/editor-utils';
import { localize } from '../../localize';
import { HaFormSchema, SeriesConfig, ValueMapping } from '../../types';

const QUERY_ITEM_SCHEMA: HaFormSchema[] = [
  { name: 'query', required: true, selector: { text: { multiline: true } } },
  { name: 'name', selector: { text: {} } }
];

const MAPPING_SCHEMA: HaFormSchema[] = [
  {
    name: '',
    type: 'grid',
    schema: [
      { name: 'value', selector: { text: {} } },
      { name: 'text', selector: { text: {} } },
      { name: 'from', selector: { number: { mode: 'box', step: 'any' } } },
      { name: 'to', selector: { number: { mode: 'box', step: 'any' } } },
      { name: 'color', selector: { text: { type: 'color' } } }
    ]
  }
];

@customElement('prometheus-state-timeline-card-editor')
export class StateTimelineCardEditor extends BasePrometheusEditor<StateTimelineCardConfig> {
  protected _defaults(): Partial<StateTimelineCardConfig> {
    return {
      time_range: '6h',
      row_height: 26,
      show_values: true,
      show_legend: true,
      merge_values: true,
      palette: 'classic',
      refresh_interval: 60
    };
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
              { name: 'time_range', selector: { select: { mode: 'dropdown', custom_value: true, options: TIME_RANGE_OPTIONS } } },
              { name: 'row_height', selector: { number: { min: 10, max: 80, mode: 'box', unit_of_measurement: 'px' } } },
              UNIT_SCHEMA,
              DECIMALS_SCHEMA
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
              { name: 'show_values', selector: { boolean: {} } },
              { name: 'show_legend', selector: { boolean: {} } },
              { name: 'merge_values', selector: { boolean: {} } },
              paletteSchema(this.hass)
            ]
          }
        ]
      },
      advancedSection({ name: 'step', selector: { text: {} } })
    ];
  }

  protected _renderExtra() {
    return html`
      <div class="section-title">${localize('section_queries', this.hass)}</div>
      <div class="helper">${localize('helper_timeline_query', this.hass)}</div>
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

      <div class="section-title">${localize('section_mappings', this.hass)}</div>
      <div class="helper">${localize('helper_mappings', this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${this._config?.mappings || []}
        .schema=${MAPPING_SCHEMA}
        .addLabel=${localize('add_mapping', this.hass)}
        .newItem=${() => ({ value: '', text: '', color: '#73BF69' })}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          const items = ev.detail.value as ValueMapping[];
          this._updateConfig({ mappings: items.length ? items : undefined });
        }}
      ></prometheus-list-editor>
      ${this._renderThresholds()}
    `;
  }
}
