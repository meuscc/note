import { customElement, property } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { css, html, LitElement } from "lit";
import navs, { TreeData } from "/src/components/navs";

@customElement("y-tree")
export class Tree extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property()
  data: TreeData = navs;

  render() {
    console.log(this.data);
    return html`
      <y-a href="${this.data.link}">${this.data.name}</y-a>
      ${map(
        this.data.children,
        (child) => html`<y-tree .data="${child}"></y-tree>`
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-tree": Tree;
  }
}
