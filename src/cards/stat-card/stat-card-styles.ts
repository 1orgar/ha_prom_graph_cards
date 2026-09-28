import { css } from 'lit';

export const statStyles = css`
  ha-card {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .stat-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .icon-container {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    opacity: 1;
    background-color: color-mix(in srgb, var(--icon-color, var(--primary-color)) 20%, transparent);
    color: var(--icon-color, var(--primary-color));
  }
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }
  .name {
    font-size: 14px;
    color: var(--secondary-text-color);
    font-weight: 500;
  }
  .value-container {
    display: flex;
    align-items: baseline;
    gap: 2px;
  }
  .value {
    font-size: 36px;
    font-weight: 400;
    line-height: 1.2;
    color: var(--value-color, var(--primary-text-color));
  }
  .unit {
    font-size: 16px;
    color: var(--secondary-text-color);
  }
  .rows {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
  .row .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .row .label {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--secondary-text-color);
  }
  .row .row-value {
    font-weight: 500;
    font-size: 18px;
    white-space: nowrap;
  }
  .row .row-value .unit {
    font-size: 13px;
  }

  /* ---- tiles layout (Grafana "background gradient") ---- */
  .card-title {
    font-size: 14px;
    color: var(--secondary-text-color);
    font-weight: 500;
  }
  .tiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(var(--tile-min, 140px), 1fr));
    gap: 8px;
  }
  .tile {
    position: relative;
    overflow: hidden;
    border-radius: calc(var(--ha-card-border-radius, 12px) - 4px);
    min-height: var(--tile-height, 110px);
    padding: 10px 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    color: #fff;
    background: var(--tile-bg);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  }
  .tile .tile-label {
    font-size: 13px;
    font-weight: 500;
    opacity: 0.9;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    z-index: 1;
  }
  .tile .tile-value {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    font-size: var(--tile-font, 32px);
    font-weight: 500;
    line-height: 1.1;
    position: relative;
    z-index: 1;
    white-space: nowrap;
  }
  .tile .tile-value .unit {
    color: inherit;
    opacity: 0.85;
    font-size: 0.55em;
  }
  .tile prometheus-sparkline {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.9;
  }
`;
