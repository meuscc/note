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
      .level-control.level-1 {
        /*background-color: rgba(0, 0, 0, 0.1);*/
      }
      .level-control.level-2 {
        /*background-color: pink;*/
      }
      .level-control.level-3 {
        /*background-color: cyan;*/
      }
      .level-control.level-4 {
        /*background-color: coral;*/
      }
      .level-control.level-5 {
        /*background-color: deeppink;*/
      }
    `,
  ];

  @property()
  data: TreeData = navs;

  @property()
  level: number = 1;

  render() {
    return html`
      <div class="level-item level-${this.level}">
        <div class="level-control level-${this.level}">
          <y-a href="${this.data.link}">${this.data.name}</y-a>
        </div>
        ${map(
          this.data.children,
          (child) =>
            html`<y-tree level="${Number(this.level) + 1}" .data="${child}" />`
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-tree": Tree;
  }
}
