import { customElement } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
import themes from "/src/themes/themes";
import navs from "/src/components/navs";

@customElement("page-home")
export default class extends LitElement {
  static styles = [
    // language=css
    css`
      .material-symbols-outlined {
        font-family: "Material Symbols Outlined";
        font-weight: normal;
        font-style: normal;
        font-size: inherit;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
      }

      .container {
        background-color: var(--scheme-surface);
        margin: 8px;
        padding: 8px;
        border-radius: ${themes.variables.shape.radius}px;
      }
      y-a {
        display: flex;
        padding: 5px;
      }
      y-a:hover {
        background-color: var(--scheme-primary-tonal-10);
      }
    `,
  ];
  constructor() {
    super();
  }
  override connectedCallback() {
    super.connectedCallback();
    console.log(this.getElementsByClassName("yyt"));
  }

  handleClick() {
    console.log(123);
  }
  override render() {
    return html`
      <div class="container">
        <y-tree .data="${navs}"></y-tree>
      </div>
    `;
  }
}
