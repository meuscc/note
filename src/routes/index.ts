/****
name = "home"
title = "首页"
****/
import md from "./test.md";

customElements.define(
  "page-index",
  class extends HTMLElement {
    constructor() {
      super();

      const el = document.createElement("div");
      el.innerHTML = md;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(el);
    }
  }
);

export default {};
