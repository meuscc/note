import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

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

export type ButtonType = "filled" | "filledTonal" | "outlined" | "text";
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

        .type-filled.color-${color} {
            background-color: var(--scheme-${color}-main-base);
            color: var(--scheme-${color}-main-onBase);
        }

        .type-filled.color-${color}:hover {
            background-color: var(--scheme-${color}-main-baseHover);
        }

        .type-filled.color-${color}:active {
            background-color: var(--scheme-${color}-main-baseActive);
        }

        .type-filled.color-${color}.disabled {
            background-color: var(--scheme-${color}-main-baseDisabled);
            color: var(--scheme-${color}-main-onBaseDisabled);
            cursor: not-allowed;
        }
        
        
                .type-filledTonal.color-${color} {
            background-color: var(--scheme-${color}-lite-base);
            color: var(--scheme-${color}-lite-onBase);
        }

        .type-filledTonal.color-${color}:hover {
            background-color: var(--scheme-${color}-lite-baseHover);
        }

        .type-filledTonal.color-${color}:active {
            background-color: var(--scheme-${color}-lite-baseActive);
        }

        .type-filledTonal.color-${color}.disabled {
            background-color: var(--scheme-${color}-lite-baseDisabled);
            color: var(--scheme-${color}-lite-onBaseDisabled);
            cursor: not-allowed;
        }
    `;
}

function createFilled() {
  // language=css
  let rule = `
        .type-filled,.type-filledTonal {
            border: 0;
          outline: 0;

        }
    `;
  buttonColors.forEach((color) => {
    rule += f(color);
  });

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

      ${unsafeCSS(createFilled())}
    `,
  ];

  @property()
  color?: ButtonColor = "primary";
  @property()
  type?: ButtonType = "filled";
  @property()
  size?: ButtonSize = "default";
  @property()
  radius?: ButtonRadius = "default";
  @property()
  disabled?: boolean = false;

  render() {
    return html` <button
      class="${`radius-${this.radius} size-${this.size} type-${
        this.type
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
