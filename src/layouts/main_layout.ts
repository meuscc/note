import { html, LitElement, PropertyValues } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("layout-main")
export class LayoutMain extends LitElement {
  handleClick() {
    console.log("click");
  }

  constructor() {
    super();
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
  }

  render() {
    return html`<div>
      <y-sidebar></y-sidebar>
      <div @click=${this.handleClick}>士大夫士大夫士大夫</div>
      <slot></slot>
    </div>`;
  }
}
