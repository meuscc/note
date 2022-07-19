import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement } from "lit";

@customElement("y-icon")
export class Icon extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
    `,
  ];

  @property()
  m?: string;

  render() {
    return html`<div>sf</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-icon": Icon;
  }
}
