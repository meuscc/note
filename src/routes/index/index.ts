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

        <div>文字按钮</div>
        <y-button color="primary" type="text"
          ><span slot="start-icon" class="material-symbols-outlined"
            >settings</span
          ></y-button
        >
        <y-button color="secondary" type="text">次要按钮</y-button>
        <y-button color="tertiary" type="text">第三按钮</y-button>
        <y-button color="neutral" type="text">中性按钮</y-button>
        <y-button color="info" type="text">提示按钮</y-button>
        <y-button color="success" type="text">成功按钮</y-button>
        <y-button color="warning" type="text">敬告按钮</y-button>
        <y-button color="error" type="text">错误按钮</y-button>

        <div>线框按钮</div>
        <y-button color="primary" type="outline"
          ><span slot="start-icon" class="material-symbols-outlined"
            >settings</span
          ></y-button
        >
        <y-button color="secondary" type="outline">次要按钮</y-button>
        <y-button color="tertiary" type="outline">第三按钮</y-button>
        <y-button color="neutral" type="outline">中性按钮</y-button>
        <y-button color="info" type="outline">提示按钮</y-button>
        <y-button color="success" type="outline">成功按钮</y-button>
        <y-button color="warning" type="outline">敬告按钮</y-button>
        <y-button color="error" type="outline">错误按钮</y-button>

        <div>实心按钮</div>
        <y-button color="primary" type="filled"
          ><span slot="start-icon" class="material-symbols-outlined"
            >settings</span
          ></y-button
        >
        <y-button color="secondary" type="filled">次要按钮</y-button>
        <y-button color="tertiary" type="filled">第三按钮</y-button>
        <y-button color="neutral" type="filled">中性按钮</y-button>
        <y-button color="info" type="filled">提示按钮</y-button>
        <y-button color="success" type="filled">成功按钮</y-button>
        <y-button color="warning" type="filled">敬告按钮</y-button>
        <y-button color="error" type="filled">错误按钮</y-button>

        <div>浅色按钮</div>
        <y-button color="primary" type="filledTonal"
          ><span slot="start-icon" class="material-symbols-outlined"
            >settings</span
          ></y-button
        >
        <y-button color="secondary" type="filledTonal">次要按钮</y-button>
        <y-button color="tertiary" type="filledTonal">第三按钮</y-button>
        <y-button color="neutral" type="filledTonal">中性按钮</y-button>
        <y-button color="info" type="filledTonal">提示按钮</y-button>
        <y-button color="success" type="filledTonal">成功按钮</y-button>
        <y-button color="warning" type="filledTonal">敬告按钮</y-button>
        <y-button color="error" type="filledTonal">错误按钮</y-button>
      </div>
    `;
  }
}
