import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "success"
  | "danger";

export type ButtonVariant = "default" | "text" | "outlined" | "contained";
export type ButtonSize = "sm" | "default" | "lg";

export type ButtonRadius = "sm" | "default" | "lg";

@customElement("y-button")
export class Button extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: inline-block;
      }
      button {
        cursor: pointer;
      }

      /* 按钮尺寸 */
      .size-sm {
        height: 24px;
      }
      .size-default {
        height: 32px;
      }
      .size-lg {
        height: 40px;
      }

      /* 按钮圆角 */
      .radius-sm {
        border-radius: 2px;
      }
      .radius-default {
        border-radius: 4px;
      }
      .radius-lg {
        border-radius: 8px;
      }

      /* 默认按钮 */
      .variant-default {
        border-width: 0;
      }
      .variant-default.color-primary {
        color: var(--plt-primary-main);
      }
      .variant-default.color-secondary {
        color: var(--plt-secondary-main);
      }
      .variant-default.color-info {
        color: var(--plt-info-main);
      }
      .variant-default.color-success {
        color: var(--plt-success-main);
      }
      .variant-default.color-warning {
        color: var(--plt-warning-main);
      }
      .variant-default.color-error {
        color: var(--plt-error-main);
      }

      /* 文字按钮 */
      .variant-text {
        border-width: 0;
        background-color: transparent;
      }
      .variant-text.color-primary {
        color: var(--plt-primary-main);
      }
      .variant-text.color-secondary {
        color: var(--plt-secondary-main);
      }
      .variant-text.color-info {
        color: var(--plt-info-main);
      }
      .variant-text.color-success {
        color: var(--plt-success-main);
      }
      .variant-text.color-warning {
        color: var(--plt-warning-main);
      }
      .variant-text.color-error {
        color: var(--plt-error-main);
      }

      /* 线框按钮 */
      .variant-outlined {
        border-width: 1px;
      }
      .variant-outlined.color-primary {
        background-color: transparent;
        color: var(--plt-primary-main);
        border-color: var(--plt-primary-main);
      }
      .variant-outlined.color-secondary {
        background-color: transparent;
        color: var(--plt-secondary-main);
        border-color: var(--plt-secondary-main);
      }
      .variant-outlined.color-info {
        background-color: transparent;
        color: var(--plt-info-main);
        border-color: var(--plt-info-main);
      }
      .variant-outlined.color-success {
        background-color: transparent;
        color: var(--plt-success-main);
        border-color: var(--plt-success-main);
      }
      .variant-outlined.color-warning {
        background-color: transparent;
        color: var(--plt-warning-main);
        border-color: var(--plt-warning-main);
      }
      .variant-outlined.color-error {
        background-color: transparent;
        color: var(--plt-error-main);
        border-color: var(--plt-error-main);
      }

      /* 实心按钮 */
      .variant-contained {
        border-width: 0;
      }

      .variant-contained.color-primary {
        background-color: var(--plt-primary-main);
        color: var(--plt-primary-contrastText);
      }
      .variant-contained.color-primary:hover {
        background-color: var(--plt-primary-hover);
      }
      .variant-contained.color-primary:active {
        background-color: var(--plt-primary-active);
      }

      .variant-contained.color-secondary {
        background-color: var(--plt-secondary-main);
        color: var(--plt-secondary-contrastText);
      }
      .variant-contained.color-secondary:hover {
        background-color: var(--plt-secondary-dark);
      }

      .variant-contained.color-info {
        background-color: var(--plt-info-main);
        color: var(--plt-info-contrastText);
      }
      .variant-contained.color-info:hover {
        background-color: var(--plt-info-dark);
      }

      .variant-contained.color-success {
        background-color: var(--plt-success-main);
        color: var(--plt-success-contrastText);
      }
      .variant-contained.color-success:hover {
        background-color: var(--plt-success-dark);
      }

      .variant-contained.color-warning {
        background-color: var(--plt-warning-main);
        color: var(--plt-warning-contrastText);
      }
      .variant-contained.color-warning:hover {
        background-color: var(--plt-warning-dark);
      }

      .variant-contained.color-error {
        background-color: var(--plt-error-main);
        color: var(--plt-error-contrastText);
      }
      .variant-contained.color-error:hover {
        background-color: var(--plt-error-dark);
      }
    `,
  ];

  @property()
  color?: ButtonColor = "default";
  @property()
  variant?: ButtonVariant = "default";
  @property()
  size?: ButtonSize = "default";
  @property()
  radius?: ButtonRadius = "default";

  render() {
    return html`<button
      class=${`radius-${this.radius} size-${this.size} variant-${this.variant} color-${this.color}`}
    >
      <slot name="start-icon"></slot>
      <slot></slot>
      <slot name="end-icon"></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-button": Button;
  }
}
