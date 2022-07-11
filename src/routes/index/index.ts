import { customElement } from "lit/decorators.js";
import { css, html, LitElement } from "lit";

@customElement("page-home")
export default class extends LitElement {
  static styles = [
    css`
      .material-symbols-outlined {
        font-family: "Material Symbols Outlined";
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
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
      <div>
        <span class="material-symbols-outlined">search</span>
        <span class="material-symbols-outlined">home</span>
        <span class="material-symbols-outlined">settings</span>
        <span class="material-symbols-outlined">favorite</span>
        <div>默认按钮</div>
        <y-button @pointerdown="${this.handleClick}" class="yyt" color="default"
          >sfs是否是</y-button
        >
        <y-button color="primary">sfs是否是</y-button>
        <y-button color="secondary">sfs是否是</y-button>
        <y-button color="info">sfs是否是</y-button>
        <y-button color="success">sfs是否是</y-button>
        <y-button color="warning">sfs是否是</y-button>
        <y-button color="error">sfs是否是</y-button>

        <div>文字按钮</div>
        <y-button color="default" variant="text">sfs是否是</y-button>
        <y-button color="primary" variant="text">sfs是否是</y-button>
        <y-button color="secondary" variant="text">sfs是否是</y-button>
        <y-button color="info" variant="text">sfs是否是</y-button>
        <y-button color="success" variant="text">sfs是否是</y-button>
        <y-button color="warning" variant="text">sfs是否是</y-button>
        <y-button color="error" variant="text">sfs是否是</y-button>

        <div>线框按钮</div>
        <y-button color="default" variant="outlined">sfs是否是</y-button>
        <y-button color="primary" variant="outlined">sfs是否是</y-button>
        <y-button color="secondary" variant="outlined">sfs是否是</y-button>
        <y-button color="info" variant="outlined">sfs是否是</y-button>
        <y-button color="success" variant="outlined">sfs是否是</y-button>
        <y-button color="warning" variant="outlined">sfs是否是</y-button>
        <y-button color="error" variant="outlined">sfs是否是</y-button>

        <div>实心按钮</div>
        <y-button color="default" variant="contained">sfs是否是</y-button>
        <y-button color="primary" variant="contained">sfs是否是</y-button>
        <y-button color="secondary" variant="contained">sfs是否是</y-button>

        <y-button color="info" variant="contained">sfs是否是</y-button>
        <y-button color="success" variant="contained">sfs是否是</y-button>
        <y-button color="warning" variant="contained">sfs是否是</y-button>
        <y-button color="error" variant="contained">sfs是否是</y-button>

        <div>实心按钮禁用</div>
        <y-button color="default" variant="contained" disabled="true"
          >sfs是否是</y-button
        >
        <y-button color="primary" variant="contained" disabled="true"
          >sfs是否是</y-button
        >
        <y-button color="secondary" variant="contained" disabled="true"
          >sfs是否是</y-button
        >
        <y-button color="info" variant="contained" disabled="true"
          >sfs是否是</y-button
        >
        <y-button color="success" variant="contained" disabled="true"
          >sfs是否是</y-button
        >
        <y-button color="warning" variant="contained" disabled="true"
          >sfs是否是</y-button
        >
        <y-button color="error" variant="contained" disabled="true"
          >sfs是否是</y-button
        >
      </div>
    `;
  }
}
