import { BaseCardConfig, ThresholdConfig } from '../../types';

export interface GaugeCardConfig extends BaseCardConfig {
  type: 'custom:prometheus-gauge-card';
  min?: number;            // default 0
  max?: number;            // default 100
  thresholds?: ThresholdConfig[];
  arc_width?: number;      // SVG arc width, default 8
  show_labels?: boolean;   // series label under each gauge when many, default true
  color_mode?: 'thresholds' | 'series';
}
