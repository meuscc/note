import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement("page-home")
export default class extends LitElement {
  override render() {
    return html`
      <div>
        <div>士大夫十分十大撒旦发生声道士大夫士大夫</div>
        <y-button>sfs是否是</y-button>
      </div>
    `;
  }
}
