import { LitElement, html, TemplateResult, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { BaseCardConfig, HaFormSchema, HomeAssistant } from '../types';
import { localize } from '../localize';
import { cleanConfig, editorStyles, fireConfigChanged, loadHaComponents } from './editor-utils';
import './list-editor';

const THRESHOLD_SCHEMA: HaFormSchema[] = [
  {
    name: '',
    type: 'grid',
    schema: [
      { name: 'value', required: true, selector: { number: { mode: 'box', step: 'any' } } },
      { name: 'color', required: true, selector: { text: { type: 'color' } } }
    ]
  }
];

export interface EditorSection {
  title?: string;
  schema: HaFormSchema[];
}

/**
 * Base class for all visual card editors. Subclasses describe the form with
 * `ha-form` schemas (the same mechanism HA's built-in cards use), so the
 * editors match the native look and every field supports UI configuration.
 */
export abstract class BasePrometheusEditor<C extends BaseCardConfig> extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() protected _config?: C;
  @state() private _ready = false;

  static styles = editorStyles;

  public setConfig(config: C): void {
    this._config = config;
  }

  connectedCallback(): void {
    super.connectedCallback();
    loadHaComponents().then(() => {
      this._ready = true;
    });
  }

  /** Form sections, rendered one after another. */
  protected abstract _sections(): EditorSection[];

  /** Default values shown in the form for missing keys. */
  protected _defaults(): Partial<C> {
    return {};
  }

  /** Extra UI rendered after the forms (e.g. list editors). */
  protected _renderExtra(): TemplateResult | typeof nothing {
    return nothing;
  }

  /** Shared list editor for `thresholds` (stat, gauge, bar cards). */
  protected _renderThresholds(): TemplateResult {
    const config = this._config as unknown as { thresholds?: Record<string, unknown>[] };
    return html`
      <div class="section-title">${localize('section_thresholds', this.hass)}</div>
      <div class="helper">${localize('helper_thresholds', this.hass)}</div>
      <prometheus-list-editor
        .hass=${this.hass}
        .items=${config.thresholds || []}
        .schema=${THRESHOLD_SCHEMA}
        .newItem=${() => ({ value: 0, color: '#4CAF50' })}
        .addLabel=${localize('add_threshold', this.hass)}
        @value-changed=${(ev: CustomEvent) => {
          ev.stopPropagation();
          const items = ev.detail.value as Record<string, unknown>[];
          this._updateConfig({ thresholds: items.length ? items : undefined } as unknown as Partial<C>);
        }}
      ></prometheus-list-editor>
    `;
  }

  protected _computeLabel = (schema: HaFormSchema): string => localize(schema.name, this.hass);

  protected _computeHelper = (schema: HaFormSchema): string | undefined => {
    const key = `helper_${schema.name}`;
    const text = localize(key, this.hass);
    return text === key ? undefined : text;
  };

  protected _updateConfig(patch: Partial<C>): void {
    if (!this._config) return;
    this._config = cleanConfig({ ...this._config, ...patch }) as C;
    fireConfigChanged(this, this._config);
  }

  private _formChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    if (!this._config) return;
    const value = ev.detail.value as Partial<C>;
    const next = cleanConfig({ ...this._config, ...value } as Record<string, any>);
    // ha-form omits cleared fields from `value`, drop them explicitly
    for (const section of this._sections()) {
      for (const name of this._fieldNames(section.schema)) {
        if (!(name in value) || value[name as keyof C] === '' || value[name as keyof C] === undefined) {
          delete next[name];
        }
      }
    }
    // Defaults are only displayed; don't persist them unless the user changed them
    const defaults = this._defaults() as Record<string, unknown>;
    for (const [key, def] of Object.entries(defaults)) {
      if (!(key in this._config) && next[key] === def) {
        delete next[key];
      }
    }
    next.type = this._config.type;
    this._config = next as C;
    fireConfigChanged(this, this._config);
  }

  private _fieldNames(schema: HaFormSchema[]): string[] {
    const names: string[] = [];
    for (const item of schema) {
      if (item.schema) {
        names.push(...this._fieldNames(item.schema));
      } else {
        names.push(item.name);
      }
    }
    return names;
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config || !this._ready) {
      return html``;
    }
    const data = { ...this._defaults(), ...this._config };
    return html`
      <div class="card-config">
        ${this._sections().map(
          (section) => html`
            ${section.title ? html`<div class="section-title">${localize(section.title, this.hass)}</div>` : nothing}
            <ha-form
              .hass=${this.hass}
              .data=${data}
              .schema=${section.schema}
              .computeLabel=${this._computeLabel}
              .computeHelper=${this._computeHelper}
              @value-changed=${this._formChanged}
            ></ha-form>
          `
        )}
        ${this._renderExtra()}
      </div>
    `;
  }
}
