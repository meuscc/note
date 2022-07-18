import { css, html, LitElement, unsafeCSS } from "lit";
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
  | "error"
  | "neutral"
  | "neutralVariant";

export type ButtonType = "filled" | "filledTonal" | "outlined" | "text";
export type ButtonSize = "sm" | "default" | "lg";
export type ButtonRadius = "sm" | "default" | "lg";

const buttonColors: ButtonColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "info",
  "success",
  "warning",
  "error",
  "neutral",
  "neutralVariant",
];

function f(color: ButtonColor) {}

function createFilled() {
  // language=css
  let rule = `
    .type-filled, .type-filledTonal {
      border: 0;
      outline: 0;

    }
  `;
  buttonColors.forEach((color) => {
    // 1 实心按钮
    // language=css
    rule += `
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
    `;
    // 2. 实心浅色按钮
    // language=css
    rule += `
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

    // 3. 线框按钮
    // language=css
    rule += `
      .type-outline.color-${color} {
        background-color: transparent;
        color: var(--scheme-${color}-main-base);
        border: 1px solid var(--scheme-${color}-main-base);
      }

      .type-outline.color-${color}:hover {
        background-color: var(--scheme-${color}-lite-base);
      }

      .type-outline.color-${color}:active {
        background-color: var(--scheme-${color}-lite-baseHover);
      }

      .type-outline.color-${color}.disabled {
        background-color: var(--scheme-${color}-lite-baseDisabled);
        color: var(--scheme-${color}-lite-onBaseDisabled);
        border-color: var(--scheme-${color}-lite-onBaseDisabled);
        cursor: not-allowed;
      }
    `;

    // 4. 文字按钮
    // language=css
    rule += `
      .type-text.color-${color} {
        background-color: transparent;
        color: var(--scheme-${color}-main-base);
        border: 0;
      }

      .type-text.color-${color}:hover {
        background-color: var(--scheme-${color}-lite-base);
      }

      .type-text.color-${color}:active {
        background-color: var(--scheme-${color}-lite-baseHover);
      }

      .type-text.color-${color}.disabled {
        background-color: var(--scheme-${color}-lite-baseDisabled);
        color: var(--scheme-${color}-lite-onBaseDisabled);
        cursor: not-allowed;
      }
    `;
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
        display: inline-flex;
        gap: 3px;
        align-items: center;
        justify-content: center;
      }
      .start-icon {
        /*font-size: 16px !important;*/
        line-height: 1;
      }

      /* 按钮尺寸 */
      .size-sm {
        height: 24px;
        min-width: 24px;
      }

      .size-default {
        height: 32px;
        min-width: 32px;
      }

      .size-lg {
        height: 40px;
        min-width: 40px;
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
      <slot class="start-icon" name="start-icon"></slot>
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
