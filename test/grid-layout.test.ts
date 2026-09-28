import { describe, expect, it } from 'vitest';
import { gridTemplate, normaliseGrid, parseWidths } from '../src/cards/grid-card/grid-layout';

const round = (a: number[]) => a.map((v) => Math.round(v * 100) / 100);

describe('parseWidths', () => {
  it('uses given percentages', () => {
    expect(round(parseWidths('25,25,50', 3))).toEqual([25, 25, 50]);
    expect(round(parseWidths('25% 25% 50%', 3))).toEqual([25, 25, 50]);
  });

  it('normalises to 100', () => {
    expect(round(parseWidths('1,1,2', 3))).toEqual([25, 25, 50]);
    expect(round(parseWidths('60,60', 2))).toEqual([50, 50]);
  });

  it('fills missing with remainder', () => {
    expect(round(parseWidths('50', 3))).toEqual([50, 25, 25]);
  });

  it('equal widths for empty / invalid input', () => {
    expect(round(parseWidths('', 4))).toEqual([25, 25, 25, 25]);
    expect(round(parseWidths('abc', 2))).toEqual([50, 50]);
    expect(round(parseWidths(undefined, 3))).toEqual([33.33, 33.33, 33.33]);
  });

  it('ignores extra values, accepts arrays', () => {
    expect(round(parseWidths('20,30,50,99', 3))).toEqual([20, 30, 50]);
    expect(round(parseWidths([30, 70], 2))).toEqual([30, 70]);
  });
});

describe('gridTemplate / normaliseGrid', () => {
  it('builds fr template', () => {
    expect(gridTemplate([25, 75])).toBe('minmax(0, 25fr) minmax(0, 75fr)');
  });

  it('normalises rows', () => {
    const g = normaliseGrid({ rows: [{ cards: [{ type: 'x' }, null as any] }, {} as any] });
    expect(g.rows).toEqual([{ cards: [{ type: 'x' }] }, { cards: [] }]);
  });
});
