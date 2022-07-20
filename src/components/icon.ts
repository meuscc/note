import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
import icons from "/src/components/icons";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("y-icon")
export class Icon extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: inline-block;
      }

      .y-icon svg {
        display: flex;
      }
    `,
  ];

  @property()
  name: string = "";

  render() {
    // @ts-ignore
    return html`<span class="y-icon">${unsafeHTML(icons[this.name]())}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-icon": Icon;
  }
}
