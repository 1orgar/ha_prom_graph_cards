import { BaseCardConfig, ThresholdConfig } from '../../types';
import { ReduceMode } from '../../utils/series';

export type StatReduce = ReduceMode;

export interface StatCardConfig extends BaseCardConfig {
  type: 'custom:prometheus-stat-card';
  icon?: string;            // mdi icon, e.g. 'mdi:memory'
  sparkline?: boolean;      // show mini sparkline, default false
  sparkline_hours?: number; // sparkline time range, default 24
  line_width?: number;      // sparkline stroke width in px, default 2
  sparkline_fill?: boolean; // gradient under the sparkline, default true
  /** Several series: `none` = one row per series, otherwise combine into one value */
  reduce?: StatReduce;
  color_mode?: 'thresholds' | 'series';
  thresholds?: ThresholdConfig[];
}
