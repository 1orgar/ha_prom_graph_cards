import { css } from 'lit';

export const stateTimelineStyles = css`
  ha-card {
    padding: 16px;
    gap: 8px;
  }
  .header {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .timeline {
    display: grid;
    grid-template-columns: minmax(0, max-content) 1fr;
    column-gap: 8px;
    row-gap: 4px;
    align-items: center;
  }
  .row-label {
    font-size: 12px;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 160px;
  }
  .row-bar {
    position: relative;
    height: var(--row-height, 26px);
    border-radius: 4px;
    overflow: hidden;
    background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
  }
  .segment {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 11px;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
    white-space: nowrap;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.15);
  }
  .segment span {
    padding: 0 4px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .axis {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: var(--secondary-text-color);
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .legend-color {
    width: 12px;
    height: 12px;
    border-radius: 3px;
  }
  .tooltip {
    font-size: 12px;
    color: var(--secondary-text-color);
    min-height: 16px;
  }
`;
