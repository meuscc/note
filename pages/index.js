import Base from "../elements/base.js";
import BaseComponent from "../elements/base.js";

export class MyElement extends BaseComponent {
  static get styles() {
    // language=css
    const sheet = new CSSStyleSheet();
    sheet.replace(`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      h1 {
        background-color: red;
      }
    `);

    return sheet;
  }

  render() {
    return `
<div>sdfsdf</div>
<h1>sdsdf</h1>
<a href="/">asdsdf</a>
    `;
  }
}

window.customElements.define("page-index", MyElement);
