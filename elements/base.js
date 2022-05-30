export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.shadowRoot.adoptedStyleSheets = [this.constructor.styles];

    const el = document.createElement("div");
    el.innerHTML = this.render();
    this.shadowRoot.append(el);
  }

  static get styles() {
    return "";
  }

  render() {
    return "";
  }
}
