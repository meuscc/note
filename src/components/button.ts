import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

export type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "success"
  | "error";

export type ButtonVariant = "default" | "text" | "outlined" | "contained";
export type ButtonSize = "sm" | "default" | "lg";

export type ButtonRadius = "sm" | "default" | "lg";

const buttonColors: ButtonColor[] = [
  "default",
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

function createContainedButton() {
  let rule = "";
  for (let i = 0; i < buttonColors.length; i++) {
    const color = buttonColors[i];
    // language=css
    rule += `
        .variant-contained.color-${color} {
          background-color: var(--plt-${color}-main);
          color: var(--plt-${color}-contrastText);
        }
        .variant-contained.color-${color}:hover {
          background-color: var(--plt-${color}-hover);
        }
        .variant-contained.color-${color}:active {
          background-color: var(--plt-${color}-active);
        }
    `;
  }

  return rule;
}

function createOutlinedButton() {
  let rule = "";
  for (let i = 0; i < buttonColors.length; i++) {
    const color = buttonColors[i];
    // language=css

    if (color === "default") {
      rule += `
        .variant-outlined.color-${color} {
            background-color: transparent;
            color: var(--plt-${color}-contrastText);
            border-color: var(--plt-${color}-contrastText);
        }
    `;
    } else {
      rule += `
        .variant-outlined.color-${color} {
            background-color: transparent;
            color: var(--plt-${color}-main);
            border-color: var(--plt-${color}-main);
        }
    `;
    }
  }

  return rule;
}

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
        outline: 0;
      }
      .variant-outlined:active {
        outline: 0;
      }
      .variant-outlined:active {
        outline: 0;
      }
      ${unsafeCSS(createOutlinedButton())}
      /* 实心按钮 */
      .variant-contained {
        border-width: 0;
      }
      ${unsafeCSS(createContainedButton())}
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
    return html` <button
      class="${`radius-${this.radius} size-${this.size} variant-${this.variant} color-${this.color}`}"
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
