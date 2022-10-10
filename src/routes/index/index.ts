import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-home")
export default class extends LitElement {
  static styles = [
    // language=css
    css``,
  ];
  constructor() {
    super();
  }

  override render() {
    return html`
      <div class="container">
        <a href="/type">分类管理</a>
        <a href="/tag">标签管理</a>
        <a href="/item">文章管理</a>
      </div>
    `;
  }
}
