import { HomeAssistant } from './types';

type Dict = Record<string, string>;

const en: Dict = {
  // common fields
  entry_id: 'Prometheus server',
  query: 'PromQL query',
  name: 'Name',
  title: 'Title',
  icon: 'Icon',
  unit: 'Unit',
  decimals: 'Decimals',
  refresh_interval: 'Refresh interval (s)',
  min: 'Min',
  max: 'Max',
  arc_width: 'Arc width',
  sparkline: 'Show sparkline',
  sparkline_hours: 'Sparkline range (hours)',
  time_range: 'Time range',
  step: 'Step (s, empty = auto)',
  fill: 'Fill area',
  show_legend: 'Show legend',
  height: 'Chart height (px)',
  group_by: 'Group by label',
  orientation: 'Orientation',
  show_values: 'Show values',
  bar_height: 'Bar height (px)',
  value: 'Value',
  color: 'Color',
  // sections
  section_display: 'Display',
  section_advanced: 'Advanced',
  section_thresholds: 'Thresholds',
  section_series: 'Series',
  // helpers
  helper_entry_id: 'Leave empty to use the first configured server',
  helper_unit: 'Special units: %, bytes, bps, s, short',
  helper_group_by: 'Label whose value is used as the bar name (e.g. job, instance)',
  helper_thresholds: 'The color of the highest threshold not greater than the value is used',
  // actions
  add_threshold: 'Add threshold',
  add_series: 'Add series',
  remove: 'Remove',
  series_n: 'Series {n}',
  // options
  horizontal: 'Horizontal',
  vertical: 'Vertical',
  // card states
  no_query: 'Set a PromQL query in the card editor',
  no_series: 'Add at least one series in the card editor',
  no_data: 'No data',
  // card picker
  stat_name: 'Prometheus Stat',
  stat_desc: 'Single Prometheus metric value with optional sparkline',
  gauge_name: 'Prometheus Gauge',
  gauge_desc: 'Radial gauge with threshold colors',
  timeseries_name: 'Prometheus Time Series',
  timeseries_desc: 'Grafana-like line/area chart for one or more PromQL queries',
  bar_name: 'Prometheus Bar Chart',
  bar_desc: 'Bar chart grouped by a Prometheus label'
};

const ru: Dict = {
  entry_id: 'Сервер Prometheus',
  query: 'Запрос PromQL',
  name: 'Название',
  title: 'Заголовок',
  icon: 'Иконка',
  unit: 'Единица измерения',
  decimals: 'Знаков после запятой',
  refresh_interval: 'Интервал обновления (с)',
  min: 'Минимум',
  max: 'Максимум',
  arc_width: 'Толщина дуги',
  sparkline: 'Показывать мини-график',
  sparkline_hours: 'Период мини-графика (ч)',
  time_range: 'Период',
  step: 'Шаг (с, пусто = авто)',
  fill: 'Заливка области',
  show_legend: 'Показывать легенду',
  height: 'Высота графика (px)',
  group_by: 'Группировать по метке',
  orientation: 'Ориентация',
  show_values: 'Показывать значения',
  bar_height: 'Высота столбца (px)',
  value: 'Значение',
  color: 'Цвет',
  section_display: 'Отображение',
  section_advanced: 'Дополнительно',
  section_thresholds: 'Пороги',
  section_series: 'Серии',
  helper_entry_id: 'Оставьте пустым, чтобы использовать первый настроенный сервер',
  helper_unit: 'Специальные единицы: %, bytes, bps, s, short',
  helper_group_by: 'Метка, значение которой станет подписью столбца (например job, instance)',
  helper_thresholds: 'Используется цвет наибольшего порога, не превышающего значение',
  add_threshold: 'Добавить порог',
  add_series: 'Добавить серию',
  remove: 'Удалить',
  series_n: 'Серия {n}',
  horizontal: 'Горизонтально',
  vertical: 'Вертикально',
  no_query: 'Укажите запрос PromQL в редакторе карточки',
  no_series: 'Добавьте хотя бы одну серию в редакторе карточки',
  no_data: 'Нет данных',
  stat_name: 'Prometheus: значение',
  stat_desc: 'Одно значение метрики Prometheus с мини-графиком',
  gauge_name: 'Prometheus: индикатор',
  gauge_desc: 'Круговой индикатор с цветовыми порогами',
  timeseries_name: 'Prometheus: временной ряд',
  timeseries_desc: 'График в стиле Grafana для одного или нескольких запросов PromQL',
  bar_name: 'Prometheus: столбцы',
  bar_desc: 'Столбчатая диаграмма с группировкой по метке Prometheus'
};

const DICTS: Record<string, Dict> = { en, ru };

function currentLanguage(hass?: HomeAssistant): string {
  const lang =
    hass?.locale?.language ||
    hass?.language ||
    (typeof localStorage !== 'undefined' ? localStorage.getItem('selectedLanguage')?.replace(/"/g, '') : null) ||
    (typeof navigator !== 'undefined' ? navigator.language : 'en') ||
    'en';
  return lang.split('-')[0].toLowerCase();
}

export function localize(key: string, hass?: HomeAssistant, vars: Record<string, string | number> = {}): string {
  const dict = DICTS[currentLanguage(hass)] || en;
  let text = dict[key] ?? en[key] ?? key;
  for (const [k, v] of Object.entries(vars)) {
    text = text.replace(`{${k}}`, String(v));
  }
  return text;
}
