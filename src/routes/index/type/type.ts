import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";

import req from "~/lib/http/req";

@customElement("page-type")
export default class PageIndex extends LitElement {
  handleSubmit = () => {};

  connectedCallback() {
    super.connectedCallback();
    req.get("/api/item/type/list").then((res) => {
      this.types = res.data;
    });
  }

  @state()
  types = [];

  override render() {
    return html`
      <div>
        <h1>分类管理</h1>
        <h2>分类列表</h2>
        <ul>
          ${map(this.types, (i: any) => html`<li>${i.name}</li>`)}
        </ul>
        <h2>创建分类</h2>
        <form @submit=${this.handleSubmit}>
          <input type="text" placeholder="分类名" name="name" />
          <input type="text" placeholder="分类名" name="name" />
        </form>
      </div>
    `;
  }
}
