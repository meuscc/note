customElements.define(
  "page-about",
  class CppCheatsheet extends HTMLElement {
    constructor() {
      super();

      this.count = 0;

      const el = document.createElement("div");
      // language=html
      el.innerHTML = `
        <div>关于</div>
        <y-link href="/">首页</y-link>
      `;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(el);
    }
  }
);
