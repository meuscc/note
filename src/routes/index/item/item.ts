import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-item")
export default class PageIndex extends LitElement {
  // language=css
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }

    @unocss-placeholder;
  `;

  override render() {
    return html`
      <div class="bg-red-10 w-full">
        <p>文章管理</p>

        <div>
          <c-e></c-e>
        </div>
      </div>
    `;
  }
}
