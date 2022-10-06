import { customElement, state } from "lit/decorators.js";
import { html, LitElement, css } from "lit";
import doc from "./axiom-fo-choice.html?raw";
import { contentStore } from "~/components/contentStore";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("page-math-axiom-of-choice")
export default class extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
      .flex {
        display: flex;
      }
    `,
  ];

  @state()
  private content = "";

  connectedCallback() {
    super.connectedCallback();
    contentStore.subscribe((v) => {
      this.content = v;
    });
    console.log(344);
  }

  //        ${unsafeHTML(this.content)}
  override render() {
    return html`
      <div class="flex">
        <c-e></c-e>
        <div style="display: block">${unsafeHTML(this.content)}</div>
      </div>
    `;
  }
}
