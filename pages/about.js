customElements.define(
  "page-about",
  class CppCheatsheet extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      this.count = 0;

      const el = document.createElement("div");
      // language=html
      el.innerHTML = `
        <div>关于</div>
        <y-link href="/">首页</y-link>
      `;

      const style = document.createElement("style");
      style.textContent = "div{background-color: red}";

      this.shadowRoot.append(style, el);
    }
  }
);
