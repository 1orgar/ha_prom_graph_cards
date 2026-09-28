import { LitElement, html, TemplateResult, PropertyValues } from 'lit';
import { state } from 'lit/decorators.js';
import { HomeAssistant, BaseCardConfig } from '../types';
import { PrometheusClient } from '../prometheus-client';
import { cardStyles } from './card-styles';
import { localize } from '../localize';
import { isDemoContext } from '../demo/demo-data';

const DEFAULT_REFRESH_INTERVAL = 30;

export abstract class BasePrometheusCard<C extends BaseCardConfig = BaseCardConfig> extends LitElement {
  @state() protected _config!: C;
  @state() protected _error?: string;
  @state() protected _loading: boolean = false;

  protected _hass?: HomeAssistant;
  private _interval?: number;
  private _cachedClient?: PrometheusClient;
  private _connected = false;
  private _demo?: boolean;

  static styles = cardStyles;

  public setConfig(config: C): void {
    if (!config || !config.type) {
      throw new Error('Invalid configuration');
    }
    this._config = config;
    this._error = undefined;
    this.toggleAttribute('transparent', Boolean(config.transparent));
    this._restart();
  }

  public set hass(hass: HomeAssistant) {
    const isFirstLoad = !this._hass;
    this._hass = hass;
    if (isFirstLoad) {
      this._restart();
    }
  }

  public get hass(): HomeAssistant | undefined {
    return this._hass;
  }

  connectedCallback() {
    super.connectedCallback();
    this._connected = true;
    document.addEventListener('visibilitychange', this._onVisibility);
    this._restart();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._connected = false;
    document.removeEventListener('visibilitychange', this._onVisibility);
    this._stopAutoRefresh();
  }

  /** Pause polling on hidden tabs / screens off; refresh immediately when visible again. */
  private _onVisibility = () => {
    if (document.visibilityState === 'hidden') {
      this._stopAutoRefresh();
    } else {
      this._restart();
    }
  };

  /** Sizes for the "Sections" dashboard view (12-column grid). Overridden per card. */
  public getGridOptions(): { columns?: number | 'full'; rows?: number | 'auto'; min_columns?: number; min_rows?: number } {
    return { columns: 6, rows: 'auto', min_columns: 3 };
  }

  /** Whether the config contains enough info to query Prometheus. */
  protected _hasQuery(): boolean {
    return Boolean(this._config?.query && this._config.query.trim());
  }

  protected get _client(): PrometheusClient {
    const entryId = this._config.entry_id || undefined;
    const demo = this._isDemo();
    if (!this._cachedClient || this._cachedClient.entryId !== entryId || this._cachedClient.demo !== demo) {
      this._cachedClient = new PrometheusClient(this._hass!, entryId, demo);
    }
    return this._cachedClient;
  }

  /**
   * Previews in the dashboard "Add card" picker are rendered with built-in demo data,
   * so every card shows a meaningful picture regardless of the metrics on the server.
   */
  private _isDemo(): boolean {
    if (this._demo === undefined && this._connected) {
      this._demo = isDemoContext(this);
    }
    return Boolean(this._demo);
  }

  protected abstract _fetchData(): Promise<void>;

  protected async _safeFetch(): Promise<void> {
    if (!this._hass || !this._config || !this._hasQuery()) {
      return;
    }
    try {
      await this._fetchData();
    } catch (e: any) {
      this._error = this._formatError(e);
      this._loading = false;
    }
  }

  protected _formatError(e: any): string {
    if (!e) return 'Error';
    if (typeof e === 'string') return e;
    if (e.code === 'unknown_command') {
      return 'Prometheus Dashboard integration is not installed or not loaded';
    }
    return e.message || e.code || 'Error fetching data';
  }

  private _restart() {
    if (!this._hass || !this._config || !this._connected) {
      return;
    }
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
      return;
    }
    this._startAutoRefresh();
    this._safeFetch();
  }

  private _startAutoRefresh() {
    this._stopAutoRefresh();
    const seconds = Number(this._config.refresh_interval) || DEFAULT_REFRESH_INTERVAL;
    this._interval = window.setInterval(() => this._safeFetch(), Math.max(5, seconds) * 1000);
  }

  private _stopAutoRefresh() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = undefined;
    }
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    return Boolean(this._config) && super.shouldUpdate(changedProps);
  }

  public getCardSize(): number {
    return 3;
  }

  protected renderError(): TemplateResult {
    return html`
      <ha-card>
        <div class="error-state">${this._error}</div>
      </ha-card>
    `;
  }

  protected renderLoading(): TemplateResult {
    return html`
      <ha-card>
        <div class="loading-state"></div>
      </ha-card>
    `;
  }

  protected renderPlaceholder(key = 'no_query'): TemplateResult {
    return html`
      <ha-card>
        <div class="placeholder-state">${localize(key, this._hass)}</div>
      </ha-card>
    `;
  }
}
