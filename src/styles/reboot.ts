import { css } from "lit";

export default function createReboot() {
  // language=css
  return css`
    html {
      touch-action: manipulation;
      font-feature-settings: "rlig" 1, "calt" 0;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      font-size: var(--var-typography-htmlFontSize);
      scroll-behavior: smooth;
    }
    body {
      margin: 0;
      background-color: var(--plt-background-default);
      font-size: var(--var-typography-fontSize);
      color: var(--plt-text-primary);
    }
  `;
}
