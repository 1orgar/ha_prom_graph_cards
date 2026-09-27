import { css } from 'lit';
import { HaFormSchema, INTEGRATION_DOMAIN } from '../types';

export const editorStyles = css`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .section-title {
    font-weight: 500;
    font-size: 15px;
    margin: 8px 0 -4px;
    color: var(--primary-text-color);
  }
  .helper {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
`;

export function fireEvent(
  node: HTMLElement,
  type: string,
  detail?: any,
  options?: { bubbles?: boolean; cancelable?: boolean; composed?: boolean }
) {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new CustomEvent(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
    detail
  });
  node.dispatchEvent(event);
  return event;
}

export function fireConfigChanged(element: HTMLElement, config: any) {
  fireEvent(element, 'config-changed', { config });
}

/**
 * HA lazy-loads <ha-form> and selectors. When a custom card editor is opened
 * they may not be registered yet, so we force-load them via a built-in card editor.
 */
let _haComponentsPromise: Promise<void> | undefined;
export function loadHaComponents(): Promise<void> {
  if (customElements.get('ha-form') && customElements.get('ha-selector')) {
    return Promise.resolve();
  }
  if (!_haComponentsPromise) {
    _haComponentsPromise = (async () => {
      try {
        const helpers = await (window as any).loadCardHelpers?.();
        if (!helpers) return;
        const card = await helpers.createCardElement({ type: 'entities', entities: [] });
        await (card?.constructor as any)?.getConfigElement?.();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('prometheus-cards: failed to preload HA form components', e);
      }
    })();
  }
  return _haComponentsPromise;
}

/** Remove keys with empty values so YAML stays clean. */
export function cleanConfig<T extends Record<string, any>>(config: T): T {
  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined || value === null || value === '') continue;
    if (typeof value === 'number' && Number.isNaN(value)) continue;
    result[key] = value;
  }
  return result as T;
}

// ---- Reusable schema pieces -------------------------------------------------

export const ENTRY_SCHEMA: HaFormSchema = {
  name: 'entry_id',
  selector: { config_entry: { integration: INTEGRATION_DOMAIN } }
};

export const QUERY_SCHEMA: HaFormSchema = {
  name: 'query',
  required: true,
  selector: { text: { multiline: true } }
};

export const REFRESH_SCHEMA: HaFormSchema = {
  name: 'refresh_interval',
  selector: { number: { min: 5, max: 86400, step: 1, mode: 'box', unit_of_measurement: 's' } }
};

export const DECIMALS_SCHEMA: HaFormSchema = {
  name: 'decimals',
  selector: { number: { min: 0, max: 6, step: 1, mode: 'box' } }
};

export const UNIT_SCHEMA: HaFormSchema = {
  name: 'unit',
  selector: { text: {} }
};

export const TIME_RANGE_OPTIONS = ['15m', '30m', '1h', '3h', '6h', '12h', '24h', '2d', '7d', '30d'];
