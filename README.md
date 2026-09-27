# Prometheus Graph Cards for Home Assistant

<p align="center">
  <img src="images/icon.jpg" alt="Prometheus Graph Cards" width="150" height="150" style="border-radius: 20px;">
</p>

<p align="center">
  <a href="https://github.com/1orgar/ha_prom_graph_cards/releases"><img src="https://img.shields.io/github/v/release/1orgar/ha_prom_graph_cards?style=flat-square" alt="Release"></a>
  <a href="https://github.com/hacs/integration"><img src="https://img.shields.io/badge/HACS-Custom-orange.svg?style=flat-square" alt="HACS"></a>
  <img src="https://img.shields.io/badge/HA-%3E%3D%202024.8-blue?style=flat-square" alt="Home Assistant">
</p>

Grafana-style dashboard cards for Home Assistant, powered by PromQL.

> **Requires the backend integration** [Prometheus Dashboard (`ha_prom_graph`)](https://github.com/1orgar/ha_prom_graph).
> The cards never talk to Prometheus directly — all queries go through the HA websocket API.

## ✨ Features

- 📊 **4 cards** — Stat, Gauge, Time Series (uPlot), Bar Chart
- 🧩 **Listed in the card picker** — *Add card → Custom / Community*
- 🛠️ **Fully visual editor** — every option, thresholds and series are editable in the UI, no YAML needed
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

<details>
<summary>YAML reference (optional)</summary>

Common options: `entry_id` (server, empty = first configured), `query`, `name`, `refresh_interval` (s, default 30).

```yaml
type: custom:prometheus-stat-card
query: node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes * 100
name: RAM available
icon: mdi:memory
unit: '%'
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
unit: bps
series:
  - query: rate(node_network_receive_bytes_total{device="eth0"}[5m]) * 8
    name: RX
    color: '#4CAF50'
    fill: true
  - query: rate(node_network_transmit_bytes_total{device="eth0"}[5m]) * 8
    name: TX
    color: '#2196F3'
```

```yaml
type: custom:prometheus-bar-card
query: 100 - node_filesystem_avail_bytes / node_filesystem_size_bytes * 100
name: Disk usage
group_by: mountpoint
unit: '%'
max: 100
```

</details>

## 🔧 Development

```bash
npm install
npm run watch   # dev build
npm run build   # production build -> dist/ha_prom_graph_cards.js
```

`dist/ha_prom_graph_cards.js` is committed (HACS downloads it). Rebuild before committing.

To release: bump `version` in `package.json`, build, commit, then create a GitHub release `vX.Y.Z` —
the workflow attaches the bundle to the release.

## 📄 License

MIT
