import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
import themes from "/src/themes/themes";

@customElement("y-topbar")
export default class Topbar extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
      .topbar {
        display: flex;
        align-items: center;
        height: ${themes.variables.layout.topbarHeight}px;
        background-color: var(--scheme-surface);
      }
    `,
  ];

  @property()
  m?: string;

  render() {
    return html`<div class="topbar">是多少</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-topbar": Topbar;
  }
}
