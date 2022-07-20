import { customElement } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
import themes from "/src/themes/themes";
import navs from "/src/components/navs";

import { proxy, subscribe, snapshot } from "valtio";

export const pageState = proxy({ currentLink: "" });

@customElement("page-home")
export default class extends LitElement {
  static styles = [
    // language=css
    css`
      .container {
        margin: 8px;
        border-radius: ${themes.variables.shape.radius}px;
        height: calc(100vh - ${themes.variables.layout.topbarHeight + 32}px);
      }

      section {
        display: flex;
        align-items: stretch;
        height: 100%;
        gap: 8px;
      }
      .nav-ctn {
        background-color: var(--scheme-surface);
        border-radius: ${themes.variables.shape.radius}px;
        padding: 8px;
        height: 100%;
        width: 240px;
        overflow: auto;
      }
      .iframe-ctn {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: var(--scheme-surface);
        border-radius: ${themes.variables.shape.radius}px;
        padding: 8px;
        height: 100%;
        overflow: auto;
      }
      iframe {
        width: 100%;
        flex: 1;
        border: 0;
        outline: 0;
      }
    `,
  ];
  constructor() {
    super();
    subscribe(pageState, () => {
      const obj = snapshot(pageState);
      if (this.shadowRoot?.querySelector("iframe")) {
        this.shadowRoot!.querySelector("iframe")!.src = obj.currentLink;
      }
    });
  }
  override connectedCallback() {
    super.connectedCallback();
    console.log(this.getElementsByClassName("yyt"));
  }

  override render() {
    return html`
      <div class="container">
        <section>
          <div class="nav-ctn">
            <y-tree .data="${navs}"></y-tree>
          </div>
          <div class="iframe-ctn">
            <iframe src=""></iframe>
          </div>
        </section>
      </div>
    `;
  }
}
