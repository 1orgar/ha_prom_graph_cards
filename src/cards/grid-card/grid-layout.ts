/**
 * Width ratios of a grid row.
 * "25,25,50" -> [25, 25, 50]; values are normalised to sum to 100; missing
 * values share the remaining space equally; invalid input -> equal widths.
 */
export function parseWidths(input: string | number[] | undefined, count: number): number[] {
  if (count <= 0) return [];
  let raw: (number | null)[] = [];
  if (Array.isArray(input)) raw = input.map((v) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Number(v) : null));
  else if (typeof input === 'string' && input.trim()) {
    raw = input
      .split(/[,;\s/]+/)
      .filter(Boolean)
      .map((s) => {
        const v = parseFloat(s.replace('%', ''));
        return Number.isFinite(v) && v > 0 ? v : null;
      });
  }
  raw = raw.slice(0, count);
  while (raw.length < count) raw.push(null);

  const given = raw.filter((v): v is number => v !== null);
  const sumGiven = given.reduce((a, b) => a + b, 0);
  const missing = raw.length - given.length;
  if (!given.length) return new Array(count).fill(100 / count);

  // fill missing with the remainder (if < 100) or with the average of given values
  const remainder = Math.max(0, 100 - sumGiven);
  const fillValue = missing ? (remainder > 0 ? remainder / missing : sumGiven / given.length) : 0;
  const filled = raw.map((v) => (v === null ? fillValue : v));
  const total = filled.reduce((a, b) => a + b, 0);
  return filled.map((v) => (v / total) * 100);
}

/** CSS grid-template-columns from percentages (fr keeps gaps exact). */
export function gridTemplate(widths: number[]): string {
  return widths.map((w) => `minmax(0, ${Math.round(w * 100) / 100}fr)`).join(' ');
}

export interface GridRow {
  widths?: string;
  height?: number;
  cards: Record<string, unknown>[];
}

export interface GridCardConfig {
  type: 'custom:prometheus-grid-card';
  title?: string;
  rows: GridRow[];
  gap?: number;
  background?: 'card' | 'transparent' | 'custom';
  background_color?: string;
  inner_transparent?: boolean;
  stack_on_mobile?: boolean;
}

/** Normalise a (possibly hand-written) config. */
export function normaliseGrid(config: Partial<GridCardConfig>): GridCardConfig {
  const rows = Array.isArray(config.rows) ? config.rows : [];
  return {
    ...config,
    type: 'custom:prometheus-grid-card',
    rows: rows.map((r) => ({ ...r, cards: Array.isArray(r?.cards) ? r.cards.filter(Boolean) : [] }))
  } as GridCardConfig;
}
