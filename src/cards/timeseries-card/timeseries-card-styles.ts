import { css } from 'lit';

export const timeseriesStyles = css`
  :host {
    display: block;
  }
  ha-card {
    padding: 0;
  }
  .header {
    padding: 16px 16px 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .chart-container {
    width: 100%;
    position: relative;
    padding: 12px 8px 0;
    box-sizing: border-box;
  }
  .overlay {
    padding: 0 16px 16px;
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 8px 16px 16px;
    font-size: 12px;
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }
  .legend-name {
    color: var(--secondary-text-color);
  }
  .legend-value {
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .uplot {
    font-family: inherit;
  }
  .uplot .u-legend {
    display: none; /* own legend */
  }
`;
