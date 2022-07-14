import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { themes } from "/src/themes/themes";
import { hexFromArgb } from "@material/material-color-utilities";

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 按钮
// text filled tonal outlined

export type ButtonColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "warning"
  | "success"
  | "error";

export type ButtonVariant = "default" | "text" | "outlined" | "contained";
export type ButtonSize = "sm" | "default" | "lg";

export type ButtonRadius = "sm" | "default" | "lg";

const buttonColors: ButtonColor[] = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
];

function f(color: ButtonColor) {
  // language=css
  return `

        .variant-contained.color-${color} {
          background-color: var(--palette-${color}-default);
          color: var(--${color}-on-default);
        }
        .variant-contained.color-${color}:hover {
            background-color: var(--palette-${color}-hover);
        }
        .variant-contained.color-${color}:active {
            background-color:var(--palette-${color}-active);
        }
        .variant-contained.color-${color}.disabled {
            background-color: var(--palette-${color}-disabled);
            color: var(--${color}-on-disabled);;
            cursor: not-allowed;
        }
    `;
}

function createContainedButton() {
  let rule = "";
  buttonColors.forEach((color) => {
    rule += f(color);
  });

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
            color: var(--scheme-${color}Container);
            border-color: var(--scheme-${color}Container);
            border-width: 1px;
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
  @property()
  disabled?: boolean = false;

  render() {
    return html` <button
      class="${`radius-${this.radius} size-${this.size} variant-${
        this.variant
      } color-${this.color} ${this.disabled ? "disabled" : ""}`}"
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
