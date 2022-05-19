/****
 name = "home"
 title = "首页"
 ****/

export class JuliaCheatsheet extends HTMLElement {
  constructor() {
    super();

    const el = document.createElement("div");
    el.innerHTML = "JuliaCheatsheet";

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(el);
  }
}
