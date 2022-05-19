/****
 name = "home"
 title = "首页"
 ****/

export class GoCheatsheet extends HTMLElement {
  constructor() {
    super();

    const el = document.createElement("div");
    el.innerHTML = "GoCheatsheet";

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(el);
  }
}
