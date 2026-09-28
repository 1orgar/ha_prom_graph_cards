import { describe, expect, it } from 'vitest';
import { rangeWindow, stepSeconds } from '../src/utils/time';
import { parseInstant, reduceValues } from '../src/utils/series';
import { buildTable } from '../src/cards/table-card/table-data';
import { buildHeatmap, colorPosition, schemeColor } from '../src/cards/heatmap-card/heatmap-data';
import type { PrometheusResponse } from '../src/types';
import { matrix, vector } from './helpers';

describe('time windows (request de-duplication)', () => {
  it('nice steps', () => {
    expect(stepSeconds(0, 3600, 500)).toBe(10);
    expect(stepSeconds(0, 86400, 500)).toBe(300);
  });

  it('two cards a few seconds apart get identical windows', () => {
    const a = rangeWindow('1h', 500, 1_700_000_003_000);
    const b = rangeWindow('1h', 500, 1_700_000_007_000);
    expect(a).toEqual(b);
    expect(a.end % 10).toBe(0);
    expect(a.end - a.start).toBe(3600);
  });
});

describe('series helpers', () => {
  it('scalar result', () => {
    const res = { status: 'success', data: { resultType: 'scalar', result: [0, '7'] } } as unknown as PrometheusResponse;
    expect(parseInstant(res)).toEqual([{ metric: {}, label: 'Value', value: 7 }]);
  });

  it('reduce', () => {
    expect(reduceValues([1, null, 3], 'sum')).toBe(4);
    expect(reduceValues([1, 3], 'avg')).toBe(2);
    expect(reduceValues([null], 'max')).toBeNull();
  });
});

describe('table', () => {
  const res = vector([
    [{ __name__: 'up', job: 'a', instance: 'x' }, 1],
    [{ __name__: 'up', job: 'b', instance: 'y' }, 0]
  ]);

  it('auto columns without a constant __name__', () => {
    const t = buildTable(res, {});
    expect(t.columns).toEqual(['instance', 'job']);
    expect(t.rows.map((r) => r.value)).toEqual([1, 0]);
  });

  it('explicit columns, hide, sort asc, max rows', () => {
    const t = buildTable(res, { columns: ['job', 'instance'], hide: ['instance'], sortDir: 'asc', maxRows: 1 });
    expect(t.columns).toEqual(['job']);
    expect(t.rows).toHaveLength(1);
    expect(t.rows[0].labels.job).toBe('b');
  });
});

describe('heatmap', () => {
  it('de-cumulates histogram buckets', () => {
    const res = matrix([
      [{ le: '0.1' }, [1, 2]],
      [{ le: '0.5' }, [3, 5]],
      [{ le: '+Inf' }, [4, 5]]
    ]);
    const m = buildHeatmap(res, 'histogram');
    expect(m.rows).toEqual(['≤ 0.1', '0.1 – 0.5', '0.5 – +Inf']);
    expect(m.cells).toEqual([[1, 2], [2, 3], [1, 0]]);
    expect([m.min, m.max]).toEqual([0, 3]);
  });

  it('series mode and colours', () => {
    const m = buildHeatmap(matrix([[{ job: 'a' }, [1]], [{ job: 'b' }, [2]]]), 'series', '{{job}}');
    expect(m.rows).toEqual(['a', 'b']);
    expect(colorPosition(5, 0, 10)).toBe(0.5);
    expect(colorPosition(0, 0, 0)).toBe(0);
    expect(schemeColor('blues', 0)).toBe('rgb(247, 251, 255)');
  });
});
