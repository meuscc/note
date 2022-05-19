/****
 name = "home"
 title = "首页"
 ****/

export class RustCheatsheet extends HTMLElement {
  constructor() {
    super();

    const el = document.createElement("div");
    el.innerHTML = "RustCheatsheet";

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(el);
  }
}
