/****
 name = "home"
 title = "首页"
 ****/

export class JsCheatsheet extends HTMLElement {
  constructor() {
    super();

    const el = document.createElement("div");
    el.innerHTML = "JsCheatsheet";

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(el);
  }
}
