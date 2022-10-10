import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-tag")
export default class PageIndex extends LitElement {
  override render() {
    return html` <div>素材类型</div> `;
  }
}
