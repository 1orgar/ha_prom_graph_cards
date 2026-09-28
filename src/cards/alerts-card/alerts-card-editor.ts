import { customElement } from 'lit/decorators.js';
import type { AlertsCardConfig } from './alerts-card';
import { BasePrometheusEditor, EditorSection } from '../../shared/base-editor';
import { advancedSection, ENTRY_SCHEMA } from '../../shared/editor-utils';
import { localize } from '../../localize';

@customElement('prometheus-alerts-card-editor')
export class AlertsCardEditor extends BasePrometheusEditor<AlertsCardConfig> {
  protected _defaults(): Partial<AlertsCardConfig> {
    return { states: ['firing', 'pending'], show_annotations: true, show_labels: false, refresh_interval: 30 };
  }

  protected _sections(): EditorSection[] {
    const states = ['firing', 'pending', 'inactive'].map((value) => ({ value, label: localize(`state_${value}`, this.hass) }));
    return [
      {
        schema: [
          ENTRY_SCHEMA,
          { name: 'name', selector: { text: {} } },
          { name: 'states', selector: { select: { multiple: true, mode: 'list', options: states } } },
          {
            name: '',
            type: 'grid',
            schema: [
              { name: 'severities', selector: { text: {} } },
              { name: 'name_filter', selector: { text: {} } },
              { name: 'show_annotations', selector: { boolean: {} } },
              { name: 'show_labels', selector: { boolean: {} } },
              { name: 'max_rows', selector: { number: { min: 1, max: 200, mode: 'box' } } }
            ]
          }
        ]
      },
      advancedSection()
    ];
  }
}
