/****
 name = "home"
 title = "首页"
 ****/

export class PythonCheatsheet extends HTMLElement {
  constructor() {
    super();

    const el = document.createElement("div");
    el.innerHTML = "PythonCheatsheet";

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(el);
  }
}
