import { HomeAssistant, PrometheusResponse, PrometheusEntry } from './types';
import { demoCallWS } from './demo/demo-data';

export interface PrometheusAlert {
  labels: Record<string, string>;
  annotations?: Record<string, string>;
  state: 'firing' | 'pending' | 'inactive';
  activeAt?: string;
  value?: string;
  /** `home_assistant` for PromQL alerts defined in the integration (not Prometheus rules) */
  source?: string;
}

export interface MetadataEntry {
  type: string;
  help: string;
  unit: string;
}

/**
 * Thin client around the websocket API exposed by the
 * `prometheus_dashboard` backend integration (https://github.com/1orgar/ha_prom_graph).
 *
 * If `entryId` is empty the backend uses the first configured Prometheus server.
 */
export class PrometheusClient {
  /**
   * @param demo answer with built-in demo data instead of calling the backend
   *             (card previews in the "Add card" picker, README screenshots).
   */
  constructor(
    private hass: HomeAssistant,
    public readonly entryId?: string,
    public readonly demo = false
  ) {}

  private _ws<T>(msg: Record<string, unknown>): Promise<T> {
    return this.demo ? demoCallWS<T>(msg) : this.hass.callWS<T>(msg);
  }

  private _msg(type: string, extra: Record<string, unknown> = {}): Record<string, unknown> {
    const msg: Record<string, unknown> = { type: `prometheus_dashboard/${type}` };
    if (this.entryId) {
      msg.entry_id = this.entryId;
    }
    for (const [key, value] of Object.entries(extra)) {
      if (value !== undefined) {
        msg[key] = value;
      }
    }
    return msg;
  }

  async instantQuery(query: string, time?: number): Promise<PrometheusResponse> {
    return this._ws<PrometheusResponse>(this._msg('query', { query, time }));
  }

  async rangeQuery(query: string, start: number, end: number, step: string): Promise<PrometheusResponse> {
    return this._ws<PrometheusResponse>(this._msg('query_range', { query, start, end, step }));
  }

  async getLabels(): Promise<string[]> {
    const res = await this._ws<{ status: string; data: string[] }>(this._msg('labels'));
    return res.data;
  }

  async getLabelValues(label: string): Promise<string[]> {
    const res = await this._ws<{ status: string; data: string[] }>(this._msg('label_values', { label }));
    return res.data;
  }

  async getMetadata(metric?: string): Promise<Record<string, MetadataEntry[]>> {
    const res = await this._ws<{ status: string; data: Record<string, MetadataEntry[]> }>(
      this._msg('metadata', { metric })
    );
    return res.data;
  }

  async getSeries(matchers: string[]): Promise<Record<string, string>[]> {
    const res = await this._ws<{ status: string; data: Record<string, string>[] }>(
      this._msg('series', { match: matchers })
    );
    return res.data;
  }

  async getAlerts(): Promise<PrometheusAlert[]> {
    const res = await this._ws<{ alerts: PrometheusAlert[] }>(this._msg('alerts'));
    return res.alerts || [];
  }

  static async getEntries(hass: HomeAssistant): Promise<PrometheusEntry[]> {
    return hass.callWS<PrometheusEntry[]>({
      type: 'prometheus_dashboard/entries'
    });
  }
}
