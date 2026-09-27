import { BaseCardConfig, ThresholdConfig } from '../../types';

export interface BarChartCardConfig extends BaseCardConfig {
  type: 'custom:prometheus-bar-card';
  /** Extra queries; each may return several series. `query` is kept for v0.2 configs */
  series?: { query: string; name?: string; color?: string }[];
  group_by?: string;        // label to use as bar name (legend_format has priority)
  orientation?: 'horizontal' | 'vertical';  // default 'horizontal'
  max?: number;             // max value for bar scale
  thresholds?: ThresholdConfig[];
  color_mode?: 'thresholds' | 'series';
  sort?: 'desc' | 'asc' | 'name' | 'none';
  limit?: number;           // show at most N bars
  show_values?: boolean;    // show value labels, default true
  bar_height?: number;      // height of each bar in px for horizontal, default 24
}
