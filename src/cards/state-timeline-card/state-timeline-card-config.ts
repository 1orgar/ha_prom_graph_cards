import { BaseCardConfig, SeriesConfig, ThresholdConfig, ValueMapping } from '../../types';

export interface StateTimelineCardConfig extends BaseCardConfig {
  type: 'custom:prometheus-state-timeline-card';
  title?: string;
  series: SeriesConfig[];     // queries; every returned series becomes one row
  time_range?: string;        // default '6h'
  step?: string;
  /** Exact value (`value`) or range (`from`..`to`) -> display text + colour */
  mappings?: ValueMapping[];
  thresholds?: ThresholdConfig[];
  row_height?: number;        // px, default 26
  show_values?: boolean;      // text inside segments, default true
  show_legend?: boolean;      // legend of states, default true
  merge_values?: boolean;     // merge equal neighbours, default true
}
