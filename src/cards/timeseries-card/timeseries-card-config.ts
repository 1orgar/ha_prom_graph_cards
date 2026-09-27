import { BaseCardConfig, SeriesConfig } from '../../types';

export interface TimeseriesCardConfig extends BaseCardConfig {
  type: 'custom:prometheus-timeseries-card';
  title?: string;
  series: SeriesConfig[];   // queries; every query may return many series
  time_range?: string;      // e.g. '1h', '6h', '24h', '7d', default '1h'
  step?: string;            // override auto step, e.g. '60', '300'
  fill?: boolean;           // area fill, default false
  fill_opacity?: number;    // 0-100, default 20
  line_width?: number;      // default 2
  stacked?: boolean;        // stack series
  show_legend?: boolean;    // default true
  legend_mode?: 'list' | 'table';
  legend_values?: ('last' | 'min' | 'max' | 'mean')[];
  height?: number;          // chart height in px, default 200
  min?: number;             // y axis min
  max?: number;             // y axis max
}
