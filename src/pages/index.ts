import { html } from "lit";

customElements.define(
  "page-index",
  class extends HTMLElement {
    constructor() {
      super();

      console.log(2323);
      console.log(html);

      const el = document.createElement("div");
      el.innerHTML = `<div>首页sfsdf sdf </div>`;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(el);
    }
  }
);
