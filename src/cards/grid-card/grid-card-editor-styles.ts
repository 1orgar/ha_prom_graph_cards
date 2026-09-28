import { css } from 'lit';

export const gridEditorStyles = css`
  .card-config {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .section-title {
    font-weight: 500;
    font-size: 15px;
    margin: 8px 0 -4px;
  }
  .row {
    border: 1px solid var(--divider-color);
    border-radius: var(--ha-card-border-radius, 12px);
    padding: 8px 12px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .row-head,
  .card-head {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .row-head .title,
  .card-head .title {
    flex: 1;
    font-weight: 500;
    color: var(--secondary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .preview {
    display: flex;
    height: 10px;
    gap: 3px;
    border-radius: 3px;
    overflow: hidden;
  }
  .preview span {
    background: var(--primary-color);
    opacity: 0.55;
    border-radius: 2px;
  }
  .card {
    border-left: 3px solid var(--primary-color);
    padding: 4px 0 4px 8px;
  }
  .card-head .pct {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
  .actions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .helper {
    font-size: 12px;
    color: var(--secondary-text-color);
  }
`;
