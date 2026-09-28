# Prometheus Graph Cards for Home Assistant

<p align="center">
  <img src="https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/icon.png" alt="Prometheus Graph Cards" width="150" height="150">
</p>

<p align="center">
  <a href="https://github.com/1orgar/ha_prom_graph_cards/releases"><img src="https://img.shields.io/github/v/release/1orgar/ha_prom_graph_cards?style=flat-square" alt="Release"></a>
  <a href="https://github.com/hacs/integration"><img src="https://img.shields.io/badge/HACS-Custom-orange.svg?style=flat-square" alt="HACS"></a>
  <img src="https://img.shields.io/badge/HA-%3E%3D%202024.8-blue?style=flat-square" alt="Home Assistant">
</p>

Grafana-style dashboard cards for Home Assistant, powered by PromQL.

> **Requires the backend integration** [Prometheus Dashboard (`ha_prom_graph`)](https://github.com/1orgar/ha_prom_graph).
> The cards never talk to Prometheus directly — all queries go through the HA websocket API.

![Grid card](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/grid.png)

## 🖼️ Screenshots

| | |
|:---:|:---:|
| **Stat** ![Stat](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/stat.png) | **Stat — tiles** ![Stat tiles](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/stat-tiles.png) |
| **Gauge** ![Gauge](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/gauge.png) | **Bar Gauge** ![Bar gauge](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/bar-gauge.png) |
| **Time Series** ![Time series](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/timeseries.png) | **State Timeline** ![State timeline](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/state-timeline.png) |
| **Bar Chart** ![Bar chart](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/bar.png) | **Pie / Donut** ![Pie](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/pie.png) |
| **Table** ![Table](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/table.png) | **Alerts** ![Alerts](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/alerts.png) |
| **Heatmap** ![Heatmap](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/heatmap.png) | **Card picker** (built-in demo data) ![Card picker](https://raw.githubusercontent.com/1orgar/ha_prom_graph_cards/main/images/card-picker.png) |

## ✨ Features

- 📊 **11 cards** — Stat (value or Grafana-like gradient tiles), Gauge, Bar Gauge, Time Series (uPlot), Bar Chart,
  State Timeline, Pie / Donut, Table, Heatmap, Alerts list and a **Grid** layout card
- 🧱 **Grid card** — rows with any number of cards and width ratios (`25,25,50`) on one shared background
- ⌨️ **PromQL editor** — autocomplete for metrics, functions, labels and label values + **Test query** button
- 📐 **Sections view** support (`getGridOptions`), polling pauses on hidden tabs
- ♻️ Identical queries of all cards / tabs are merged and cached by the backend
- 🪟 **Transparent background** option on every card
- 🧩 **Listed in the card picker** — *Add card → Custom / Community*, with live previews rendered from built-in demo data
- 🛠️ **Fully visual editor** — every option, thresholds and series are editable in the UI, no YAML needed
- 🔢 **Multi-series everywhere** — a query returning many series draws many lines / stat rows / gauges / bars
- 🎨 **Grafana palettes** — classic palette + by-series schemes, Grafana-like legend (`{{label}}` format, table with min/max/mean, click to isolate)
- 📏 **Grafana units** — pick a unit from a list (bytes IEC/SI, bits/s, s → min → hour, W → kW, %, °C, ₽ …), values are scaled within the dimension
- 🔌 **Multiple Prometheus servers** — pick a server from a dropdown in the editor
- 🌍 English / Русский

## 🚀 Installation

### HACS (recommended)

1. Install the backend integration [ha_prom_graph](https://github.com/1orgar/ha_prom_graph) and add a Prometheus server.
2. HACS → **⋮** → **Custom repositories** → add `https://github.com/1orgar/ha_prom_graph_cards`, type **Dashboard**.
3. Find **Prometheus Graph Cards** and click **Download**. HACS adds the dashboard resource automatically.
4. Reload the browser page (clear cache if the cards don't appear).

### Manual

1. Download `ha_prom_graph_cards.js` from the [latest release](https://github.com/1orgar/ha_prom_graph_cards/releases).
2. Copy it to `<config>/www/ha_prom_graph_cards.js`.
3. **Settings → Dashboards → ⋮ → Resources → Add resource**: URL `/local/ha_prom_graph_cards.js`, type **JavaScript module**.

## 🧩 Usage

Edit a dashboard → **Add card** → scroll to **Custom cards** (or search "Prometheus") → pick a card.
Everything is configured in the visual editor.

| Card | Type |
|------|------|
| Prometheus Stat | `custom:prometheus-stat-card` |
| Prometheus Gauge | `custom:prometheus-gauge-card` |
| Prometheus Time Series | `custom:prometheus-timeseries-card` |
| Prometheus Bar Chart | `custom:prometheus-bar-card` |
| Prometheus State Timeline | `custom:prometheus-state-timeline-card` |
| Prometheus Pie Chart | `custom:prometheus-pie-card` |
| Prometheus Bar Gauge | `custom:prometheus-bar-gauge-card` |
| Prometheus Table | `custom:prometheus-table-card` |
| Prometheus Heatmap | `custom:prometheus-heatmap-card` |
| Prometheus Alerts | `custom:prometheus-alerts-card` |
| Prometheus Grid | `custom:prometheus-grid-card` |

In any query field press **Ctrl+Space** for suggestions (they also appear while typing) and
**Test query** to see the number of returned series, sample labels or the PromQL error.

<details>
<summary>YAML reference (optional)</summary>

Common options: `entry_id` (server, empty = first configured), `query`, `name`, `refresh_interval` (s, default 30),
`unit` (Grafana unit id: `bytes`, `decbytes`, `bps`, `binBps`, `s`, `ms`, `dtdurations`, `percent`, `percentunit`,
`watt`, `kwatth`, `celsius`, `short`, … or any custom suffix), `decimals` (empty = auto),
`legend_format` (`{{instance}} {{job}}`), `palette` (`classic`, `green-yellow-red`, `blues`, `greens`, `reds`, `purples`, `single`).

Several series per query: Stat — `reduce: none | sum | avg | min | max`; Gauge — one gauge per series;
Bar — one bar per series, extra queries in `series:`; Time series — one line per series.

```yaml
type: custom:prometheus-stat-card
query: node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100
name: RAM available
icon: mdi:memory
unit: percent
line_width: 2
decimals: 1
sparkline: true
sparkline_hours: 24
thresholds:
  - { value: 0, color: '#F44336' }
  - { value: 20, color: '#FFC107' }
  - { value: 50, color: '#4CAF50' }
```

```yaml
type: custom:prometheus-gauge-card
query: avg(node_load1)
name: CPU load (1m)
min: 0
max: 8
```

```yaml
type: custom:prometheus-timeseries-card
title: Network traffic
time_range: 6h
unit: binBps
fill: true
fill_opacity: 15
line_width: 1.5
legend_mode: table
legend_values: [last, max, mean]
series:
  - query: rate(node_network_receive_bytes_total{device!="lo"}[5m])
    name: '{{device}} rx'
  - query: rate(node_network_transmit_bytes_total{device!="lo"}[5m])
    name: '{{device}} tx'
```

```yaml
type: custom:prometheus-bar-card
query: 100 - node_filesystem_avail_bytes / node_filesystem_size_bytes * 100
name: Disk usage
legend_format: '{{mountpoint}}'
unit: percent
max: 100
```


<details>
<summary>More examples: stat tiles, state timeline, pie</summary>

```yaml
# Grafana-like coloured tiles, one per series
type: custom:prometheus-stat-card
name: CPU usage
query: 100 - avg by (instance) (rate(node_cpu_seconds_total{mode="idle"}[5m])) * 100
legend_format: '{{instance}}'
layout: tiles
tile_style: gradient
unit: percent
sparkline: true
thresholds:
  - { value: 0, color: '#73BF69' }
  - { value: 70, color: '#FF9830' }
  - { value: 90, color: '#F2495C' }
```

```yaml
type: custom:prometheus-state-timeline-card
title: Targets
time_range: 24h
series:
  - query: up
    name: '{{job}}'
mappings:
  - { value: '1', text: UP, color: '#73BF69' }
  - { value: '0', text: DOWN, color: '#F2495C' }
```

```yaml
type: custom:prometheus-pie-card
title: Disk usage by mount
series:
  - query: node_filesystem_size_bytes - node_filesystem_avail_bytes
    name: '{{mountpoint}}'
unit: bytes
pie_type: donut
legend_values: [value, percent]
limit: 5
transparent: true
```

</details>

</details>

<details>
<summary>Grid, bar gauge, table, heatmap, alerts</summary>

```yaml
# 3 cards 25/25/50 in the first row, one full-width chart in the second
type: custom:prometheus-grid-card
title: Server
background: card          # card | transparent | custom (+ background_color)
inner_transparent: true   # child cards drop their own background
gap: 8
rows:
  - widths: 25,25,50
    cards:
      - type: custom:prometheus-stat-card
        name: Load
        query: node_load1
      - type: custom:prometheus-stat-card
        name: Up
        query: sum(up)
      - type: custom:prometheus-bar-gauge-card
        query: 100 - node_filesystem_avail_bytes / node_filesystem_size_bytes * 100
        legend_format: '{{mountpoint}}'
        unit: percent
        max: 100
  - cards:
      - type: custom:prometheus-timeseries-card
        time_range: 6h
        series:
          - query: rate(node_cpu_seconds_total{mode!="idle"}[5m])
            name: '{{mode}}'
```

```yaml
type: custom:prometheus-table-card
query: up
columns: [job, instance]
thresholds: [{ value: 0, color: '#F2495C' }, { value: 1, color: '#73BF69' }]
color_cells: true
```

```yaml
type: custom:prometheus-heatmap-card
query: sum by (le) (rate(prometheus_http_request_duration_seconds_bucket[5m]))
heatmap_mode: histogram   # or "series"
color_scheme: spectral
time_range: 6h
```

```yaml
type: custom:prometheus-alerts-card
states: [firing, pending]
severities: critical,warning
show_labels: true
```

</details>


## 🔧 Development

```bash
npm install
npm run watch   # dev build
npm test        # unit tests (vitest)
npm run build   # production build -> dist/ha_prom_graph_cards.js
```

`dist/ha_prom_graph_cards.js` is committed (HACS downloads it). Rebuild before committing.

**Releases are automatic:** bump `version` in `package.json`, rebuild, commit and push to `main`.
After lint / tests / build pass, CI creates the tag `vX.Y.Z` and a GitHub release with the bundle
(versions like `1.0.0-beta.1` become pre-releases). If the tag already exists nothing happens.

**Screenshots** (`images/*.png`) are generated from `demo/` with the built-in demo data:

```bash
npm run build
npm i --no-save playwright-core
node demo/screenshots.mjs   # uses the installed Google Chrome (CHROME_PATH=... to override)
```

Card previews in *Add card* use the same demo data (`src/demo/demo-data.ts`), so they look good
on any Prometheus server; real queries run once the card is added.

## 📄 License

MIT
