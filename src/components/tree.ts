import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { css, html, LitElement } from "lit";
import navs, { TreeData } from "/src/components/navs";
import { pageState } from "/src/routes/index/index";

@customElement("y-tree")
export class Tree extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
        width: 100%;
      }
      .item-control {
        height: 32px;
        cursor: pointer;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        user-select: none;
        box-sizing: border-box;
        padding-left: 5px;
        padding-right: 5px;
      }
      .level-control.level-1 .level-control {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .dropdown {
        overflow: hidden;
      }

      .caret {
        transform-origin: center center;
        transition: 0.2s ease transform;
      }
      .caret-open {
        transform: rotate(-90deg);
      }

      ::slotted(svg) {
        display: block;
      }

      ::slotted(*) {
        color: red !important;
      }

      .item-control.level-1 {
        background-color: var(--scheme-primary-main-base);
        color: var(--scheme-primary-main-onBase);
      }
      .item-control.level-2 {
        background-color: var(--scheme-primary-tonal-11);
      }
      .item-control.level-3 {
        background-color: var(--scheme-primary-tonal-10);
      }
      .item-control.level-4 {
        background-color: var(--scheme-primary-tonal-9);
      }
      .item-control.level-5 {
        background-color: var(--scheme-primarytonal-8);
      }
    `,
  ];

  @state()
  protected opened = false;

  @property()
  data: TreeData = navs;

  @property()
  level: number = 1;

  constructor() {
    super();
  }

  handleClick() {
    if (this.level === 1) {
      return;
    }
    if (this.data.link) {
      pageState.currentLink = this.data.link;
      return;
    }
    const dropdown = this.shadowRoot?.querySelector(".dropdown");
    const dropDownHeight = `${(this.data.children?.length ?? 0) * 32}px`;

    if (this.opened) {
      dropdown?.animate(
        [
          {
            height: dropDownHeight,
          },
          {
            height: "0px",
          },
        ],
        {
          duration: 95,
        }
      );
    } else {
      dropdown?.animate(
        [
          {
            height: "0px",
          },
          {
            height: dropDownHeight,
          },
        ],
        {
          duration: 95,
        }
      );
    }

    this.opened = !this.opened;
  }

  render() {
    const _opened = this.level === 1 ? true : this.opened;

    return html`
      <div class="item level-${this.level}">
        <div
          @click="${this.handleClick}"
          class="item-control level-${this.level}"
        >
          <div>${this.data.name}</div>
          ${when(
            !this.data.link && this.level !== 1,
            () =>
              html`<y-icon
                class="caret caret-${_opened ? "open" : ""}"
                name="caretDownFill"
              ></y-icon>`
          )}
        </div>
        <div class="dropdown">
          ${when(
            this.data.children?.length && _opened,
            () =>
              html`${map(
                this.data.children,
                (child) =>
                  html`<y-tree
                    level="${Number(this.level) + 1}"
                    .data="${child}"
                  />`
              )}`
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-tree": Tree;
  }
}
