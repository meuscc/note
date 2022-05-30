class Base extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const el = document.createElement("div");

    const css = new CSSStyleSheet();
    css.replace(Base.styles);
    el.adoptedStyleSheets = css;

    el.innerHTML = this.render();
    this.shadowRoot.append(el);
  }

  static get styles() {}

  render() {}
}
