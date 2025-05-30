import { css } from "lit";

export default css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    display: inline-flex;
    vertical-align: middle;
  }

  :host([disabled]) {
    cursor: not-allowed;
  }

  .root.disabled {
    pointer-events: none;
    background: var(--button-disabled-background);
    color: var(--button-disabled-color);
  }

  .root.sm {
    --button-height: 2rem;
    --button-icon-size: 1.25rem;
    --button-root-padding: 0 var(--tapsi-spacing-3-1);
  }

  .root.md {
    --button-height: 2.5rem;
    --button-icon-size: 1.5rem;
    --button-root-padding: 0 var(--tapsi-spacing-4);
  }

  .root.lg {
    --button-icon-size: 1.5rem;
    --button-height: 3rem;
    --button-root-padding: 0 var(--tapsi-spacing-5);
  }

  .root.primary {
    --button-background: var(--tapsi-color-surface-inverse-primary);
    --button-color: var(--tapsi-color-content-on-inverse);
  }

  .root.ghost {
    --button-background: var(--tapsi-color-surface-tertiary);
    --button-color: var(--tapsi-color-content-primary);
  }

  .root.naked {
    --button-background: transparent;
    --button-color: var(--tapsi-color-content-primary);
  }

  .root.elevated {
    --button-background: var(--tapsi-color-surface-primary);
    --button-color: var(--tapsi-color-content-primary);
    box-shadow: 0 0.25rem 1rem 0 #0000001a;
  }

  .root.destructive {
    --button-background: var(--tapsi-color-surface-negative-light);
    --button-color: var(--tapsi-color-content-negative);
  }

  .root.brand {
    --button-background: var(--tapsi-color-gradient-surface-brand);
    --button-color: var(--tapsi-color-content-on-inverse);
  }

  .root:not(.naked).disabled {
    --button-disabled-background: var(--tapsi-color-surface-disabled);
    --button-disabled-color: var(--tapsi-color-content-disabled);
  }

  .root.naked.disabled {
    --button-disabled-background: transparent;
    --button-disabled-color: var(--tapsi-color-content-disabled);
  }

  .root:not(.disabled):not(.primary):active .overlay {
    --button-overlay-color: var(--tapsi-color-surface-overlay-light);
  }

  .root:not(.disabled).primary:active .overlay {
    --button-overlay-color: var(--tapsi-color-surface-inverse-secondary);
  }

  .root {
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    text-overflow: ellipsis;
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;
    vertical-align: middle;
    background: transparent;
    text-decoration: none;

    gap: 1rem;
    width: 100%;
    height: var(--button-height);
    padding: var(--button-root-padding);

    background: var(--button-custom-background, var(--button-background));
    color: var(--button-custom-color, var(--button-color));
    font-family: var(--tapsi-typography-font-family);
    border-radius: var(--tapsi-radius-full);
  }

  .root:focus-visible {
    outline: var(--tapsi-stroke-2) solid var(--tapsi-color-content-accent);
    outline-offset: var(--tapsi-spacing-2);
  }

  .body {
    line-height: var(--button-line-height);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 100%;
  }

  .overlay {
    opacity: 0;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: var(
      --button-custom-overlay-color,
      var(--button-overlay-color)
    );
    z-index: 1;
    transition: opacity 0.1s;
  }

  .root:active .overlay,
  .root.disabled .overlay {
    opacity: 1;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    height: var(--button-icon-size);
    max-height: var(--button-icon-size);
    width: var(--button-icon-size);
    max-width: var(--button-icon-size);
    font-size: var(--button-icon-size);
  }

  .icon ::slotted(*) {
    height: var(--button-icon-size);
    max-height: var(--button-icon-size);
    width: var(--button-icon-size);
    max-width: var(--button-icon-size);
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (prefers-reduced-motion) {
    .overlay {
      transition: none;
    }
  }
`;
