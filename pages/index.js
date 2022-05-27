import { LitElement, html, css } from "lit";

export class MyElement extends LitElement {
  static get styles() {
    // language=css
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      h1 {
        background-color: red;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = "World";
    this.count = 0;
  }

  render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">
        点击次数: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent("count-changed"));
  }

  sayHello(name) {
    return `Hello, ${name}`;
  }
}

window.customElements.define("page-index", MyElement);
