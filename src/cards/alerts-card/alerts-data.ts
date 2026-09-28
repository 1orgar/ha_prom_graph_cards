import type { PrometheusAlert } from '../../prometheus-client';

export interface AlertFilter {
  states?: string[];        // default: firing + pending
  severities?: string;      // comma separated, empty = all
  name_filter?: string;     // substring / regex on alertname
}

const SEVERITY_ORDER: Record<string, number> = { critical: 0, error: 1, warning: 2, info: 3, none: 4 };
const STATE_ORDER: Record<string, number> = { firing: 0, pending: 1, inactive: 2 };

/** Filter and sort alerts: firing first, then by severity, then newest first. */
export function filterAlerts(alerts: PrometheusAlert[], f: AlertFilter): PrometheusAlert[] {
  const states = new Set(f.states?.length ? f.states : ['firing', 'pending']);
  const severities = (f.severities || '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  let nameRe: RegExp | undefined;
  if (f.name_filter?.trim()) {
    try {
      nameRe = new RegExp(f.name_filter.trim(), 'i');
    } catch {
      const needle = f.name_filter.trim().toLowerCase();
      nameRe = { test: (s: string) => s.toLowerCase().includes(needle) } as RegExp;
    }
  }
  return alerts
    .filter((a) => states.has(a.state))
    .filter((a) => !severities.length || severities.includes((a.labels.severity || '').toLowerCase()))
    .filter((a) => !nameRe || nameRe.test(a.labels.alertname || ''))
    .sort(
      (a, b) =>
        (STATE_ORDER[a.state] ?? 9) - (STATE_ORDER[b.state] ?? 9) ||
        (SEVERITY_ORDER[(a.labels.severity || 'none').toLowerCase()] ?? 5) -
          (SEVERITY_ORDER[(b.labels.severity || 'none').toLowerCase()] ?? 5) ||
        (b.activeAt || '').localeCompare(a.activeAt || '')
    );
}

export function severityColor(severity?: string): string {
  switch ((severity || '').toLowerCase()) {
    case 'critical':
    case 'error':
      return '#F2495C';
    case 'warning':
      return '#FF9830';
    case 'info':
      return '#5794F2';
    default:
      return '#8E8E8E';
  }
}

/** "5m", "2h 3m", "3d 4h" since `iso`. */
export function since(iso: string | undefined, now = Date.now()): string {
  if (!iso) return '';
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return '';
  let s = Math.max(0, Math.floor((now - t) / 1000));
  const d = Math.floor(s / 86400);
  s -= d * 86400;
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  if (d) return `${d}d ${h}h`;
  if (h) return `${h}h ${m}m`;
  return `${m}m`;
}
