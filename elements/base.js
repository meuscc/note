class Base extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const el = document.createElement("div");

    const css = new CSSStyleSheet();
    css.replace(Base.styles);
    el.adopt;

    el.innerHTML = this.render();
    this.shadowRoot.append(el);
  }

  static get styles() {}

  render() {}
}
