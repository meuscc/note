customElements.define(
  "page-index",
  class CppCheatsheet extends HTMLElement {
    constructor() {
      super();

      const el = document.createElement("div");
      // language=html
      el.innerHTML = `
        <div>首页 我一点也不喜欢框架 手实话真的</div>
        <y-link href="/about">到关于页面</y-link>
      `;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(el);
    }
  }
);
