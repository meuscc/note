import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement } from "lit";

@customElement("y-a")
export class Link extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: inline;
      }
      a {
        color: var(--scheme-primary-main-base);
        text-decoration: none;
        cursor: pointer;
      }
      a:hover {
        color: var(--scheme-primary-main-baseHover);
      }
      a:active {
        color: var(--scheme-primary-main-baseActive);
      }
    `,
  ];

  @property()
  href?: string = "";

  render() {
    return html`<a href="${this.href}"><slot></slot></a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-a": Link;
  }
}
