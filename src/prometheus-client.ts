import { HomeAssistant, PrometheusResponse, PrometheusEntry } from './types';

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
  constructor(private hass: HomeAssistant, public readonly entryId?: string) {}

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
    return this.hass.callWS<PrometheusResponse>(this._msg('query', { query, time }));
  }

  async rangeQuery(query: string, start: number, end: number, step: string): Promise<PrometheusResponse> {
    return this.hass.callWS<PrometheusResponse>(this._msg('query_range', { query, start, end, step }));
  }

  async getLabels(): Promise<string[]> {
    const res = await this.hass.callWS<{ status: string; data: string[] }>(this._msg('labels'));
    return res.data;
  }

  async getLabelValues(label: string): Promise<string[]> {
    const res = await this.hass.callWS<{ status: string; data: string[] }>(this._msg('label_values', { label }));
    return res.data;
  }

  async getMetadata(metric?: string): Promise<Record<string, MetadataEntry[]>> {
    const res = await this.hass.callWS<{ status: string; data: Record<string, MetadataEntry[]> }>(
      this._msg('metadata', { metric })
    );
    return res.data;
  }

  async getSeries(matchers: string[]): Promise<Record<string, string>[]> {
    const res = await this.hass.callWS<{ status: string; data: Record<string, string>[] }>(
      this._msg('series', { match: matchers })
    );
    return res.data;
  }

  static async getEntries(hass: HomeAssistant): Promise<PrometheusEntry[]> {
    return hass.callWS<PrometheusEntry[]>({
      type: 'prometheus_dashboard/entries'
    });
  }
}
