import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("layout-main")
export class LayoutMain extends LitElement {
  handleClick() {
    console.log("click");
  }

  render() {
    return html`<div>
      <y-sidebar></y-sidebar>
      <div @click=${this.handleClick}>士大夫士大夫士大夫</div>
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "layout-main": LayoutMain;
  }
}
