// Card configs rendered by demo/index.html. `id` = screenshot file name (images/<id>.png).
const th = (...pairs) => pairs.map(([value, color]) => ({ value, color }));
const traffic = th([0, '#73BF69'], [70, '#FF9830'], [90, '#F2495C']);

export const DEMO_CARDS = [
  {
    id: 'stat',
    width: 360,
    config: {
      type: 'custom:prometheus-stat-card',
      name: 'Power',
      icon: 'mdi:flash',
      query: 'house_power_watts',
      unit: 'watt',
      sparkline: true,
      thresholds: th([0, '#73BF69'], [2500, '#FF9830'])
    }
  },
  {
    id: 'stat-tiles',
    width: 560,
    config: {
      type: 'custom:prometheus-stat-card',
      name: 'CPU usage',
      query: 'node_cpu_usage',
      legend_format: '{{instance}}',
      layout: 'tiles',
      unit: 'percent',
      decimals: 0,
      sparkline: true,
      thresholds: traffic
    }
  },
  {
    id: 'gauge',
    width: 560,
    config: {
      type: 'custom:prometheus-gauge-card',
      name: 'Disk usage',
      query: 'node_filesystem_usage',
      legend_format: '{{mountpoint}}',
      unit: 'percent',
      decimals: 0,
      thresholds: traffic
    }
  },
  {
    id: 'bar-gauge',
    width: 460,
    config: {
      type: 'custom:prometheus-bar-gauge-card',
      name: 'Disk usage',
      query: 'node_filesystem_usage',
      legend_format: '{{mountpoint}}',
      unit: 'percent',
      max: 100,
      display_mode: 'gradient',
      thresholds: traffic
    }
  },
  {
    id: 'timeseries',
    width: 720,
    config: {
      type: 'custom:prometheus-timeseries-card',
      title: 'Network traffic',
      time_range: '6h',
      unit: 'binBps',
      fill: true,
      fill_opacity: 15,
      legend_mode: 'table',
      legend_values: ['max', 'mean'],
      series: [{ query: 'rate(node_network_receive_bytes_total[5m])', name: '{{device}}' }]
    }
  },
  {
    id: 'bar',
    width: 460,
    config: {
      type: 'custom:prometheus-bar-card',
      name: 'Memory used',
      query: 'node_memory_used_bytes',
      legend_format: '{{instance}}',
      unit: 'bytes',
      palette: 'classic'
    }
  },
  {
    id: 'state-timeline',
    width: 720,
    config: {
      type: 'custom:prometheus-state-timeline-card',
      title: 'Targets',
      time_range: '24h',
      series: [{ query: 'up', name: '{{job}}' }],
      mappings: [
        { value: '1', text: 'UP', color: '#73BF69' },
        { value: '0', text: 'DOWN', color: '#F2495C' }
      ]
    }
  },
  {
    id: 'pie',
    width: 460,
    config: {
      type: 'custom:prometheus-pie-card',
      title: 'Targets by job',
      series: [{ query: 'count by (job) (up)', name: '{{job}}' }],
      legend_values: ['value', 'percent']
    }
  },
  {
    id: 'table',
    width: 560,
    config: {
      type: 'custom:prometheus-table-card',
      name: 'Targets',
      query: 'up',
      columns: ['job', 'instance'],
      thresholds: th([0, '#F2495C'], [1, '#73BF69']),
      color_cells: true
    }
  },
  {
    id: 'heatmap',
    width: 720,
    config: {
      type: 'custom:prometheus-heatmap-card',
      name: 'HTTP request duration',
      query: 'sum by (le) (rate(http_request_duration_seconds_bucket[5m]))',
      heatmap_mode: 'histogram',
      color_scheme: 'spectral',
      time_range: '6h',
      unit: 'short'
    }
  },
  {
    id: 'alerts',
    width: 560,
    config: { type: 'custom:prometheus-alerts-card', name: 'Alerts', show_labels: true }
  },
  {
    id: 'grid',
    width: 900,
    config: {
      type: 'custom:prometheus-grid-card',
      title: 'Home server',
      rows: [
        {
          widths: '25,25,50',
          cards: [
            { type: 'custom:prometheus-stat-card', name: 'Power', icon: 'mdi:flash', query: 'house_power', unit: 'watt' },
            { type: 'custom:prometheus-stat-card', name: 'Living room', icon: 'mdi:thermometer', query: 'temperature', unit: 'celsius' },
            {
              type: 'custom:prometheus-bar-gauge-card',
              query: 'node_filesystem_usage',
              legend_format: '{{mountpoint}}',
              unit: 'percent',
              max: 100,
              thresholds: traffic
            }
          ]
        },
        {
          cards: [
            {
              type: 'custom:prometheus-timeseries-card',
              time_range: '6h',
              unit: 'percent',
              height: 160,
              series: [{ query: 'node_cpu_usage', name: '{{instance}}' }]
            }
          ]
        }
      ]
    }
  }
];
