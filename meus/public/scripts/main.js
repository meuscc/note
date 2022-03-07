import { html, css, LitElement } from "https://cdn.jsdelivr.net/npm/lit/+esm";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static properties = {
    name: { type: String },
    _count: { type: Number, state: true },
  };

  constructor() {
    super();
    this.name = "Somebody";
    this._count = 1;
  }

  add() {
    this._count += 1;
  }

  render() {
    return html`<p>
      -${this._count}--------顶顶顶顶顶顶顶顶顶顶, ${this.name}!
      <button @click="${this.add}" }>增加</button>
    </p>`;
  }
}

customElements.define("simple-greeting", SimpleGreeting);
