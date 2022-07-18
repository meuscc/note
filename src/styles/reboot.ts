import { css } from "lit";

export default function createReboot() {
  // language=css
  return css`
    html {
      touch-action: manipulation;
      font-feature-settings: "rlig" 1, "calt" 0;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      scroll-behavior: smooth;
    }
    body {
      margin: 0;
      background-color: var(--scheme-background);
      font-size: 14px;
      color: var(--scheme-onBackground);
    }
  `;
}
