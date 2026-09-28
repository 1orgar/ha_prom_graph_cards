import { customElement } from 'lit/decorators.js';
import type { HeatmapCardConfig } from './heatmap-card';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import {
  advancedSection,
  DECIMALS_SCHEMA,
  ENTRY_SCHEMA,
  LEGEND_FORMAT_SCHEMA,
  QUERY_SCHEMA,
  TIME_RANGE_OPTIONS,
  UNIT_SCHEMA
} from '../../shared/editor-utils';
import { localize } from '../../localize';

@customElement('prometheus-heatmap-card-editor')
export class HeatmapCardEditor extends BasePrometheusEditor<HeatmapCardConfig> {
  protected _queryMode(): 'instant' | 'range' {
    return 'range';
  }

  protected _defaults(): Partial<HeatmapCardConfig> {
    return {
      time_range: '6h',
      heatmap_mode: 'histogram',
      color_scheme: 'oranges',
      log_scale: false,
      height: 200,
      show_legend_scale: true,
      refresh_interval: 60
    };
  }

  private _options(prefix: string, values: string[]) {
    return values.map((value) => ({ value, label: localize(`${prefix}${value}`, this.hass) }));
  }

  protected _sections(): EditorSection[] {
    const series = this._config?.heatmap_mode === 'series';
    return [
      {
        schema: [
          ENTRY_SCHEMA,
          QUERY_SCHEMA,
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'heatmap_mode', selector: { select: { mode: 'dropdown', options: this._options('heatmap_mode_', ['histogram', 'series']) } } },
              ...(series ? [LEGEND_FORMAT_SCHEMA] : [])
            ]
          }
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
              { name: 'time_range', selector: { select: { mode: 'dropdown', custom_value: true, options: TIME_RANGE_OPTIONS } } },
              { name: 'height', selector: { number: { min: 80, max: 800, mode: 'box', unit_of_measurement: 'px' } } },
              {
                name: 'color_scheme',
                selector: {
                  select: {
                    mode: 'dropdown',
                    options: this._options('scheme_', ['oranges', 'spectral', 'viridis', 'blues', 'greens', 'reds', 'purples'])
                  }
                }
              },
              { name: 'log_scale', selector: { boolean: {} } },
              UNIT_SCHEMA,
              DECIMALS_SCHEMA,
              { name: 'show_legend_scale', selector: { boolean: {} } }
            ]
          }
        ]
      },
      advancedSection()
    ];
  }
}
