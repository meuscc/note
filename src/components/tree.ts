import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { css, html, LitElement } from "lit";
import navs, { TreeData } from "/src/components/navs";

@customElement("y-tree")
export class Tree extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
        width: 100%;
        font-size: 13px;
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
      .item-control:hover {
        background-color: var(--scheme-primary-tonal-11);
      }

      .item-control:active {
        background-color: var(--scheme-primary-tonal-10);
      }

      .dropdown {
        overflow: hidden;
      }

      .caret {
        transform-origin: center center;
        transition: 0.2s ease transform;
        color: var(--scheme-neutral-tonal-7);
        font-size: 12px;
      }
      .caret-open {
        transform: rotate(90deg);
      }

      ::slotted(svg) {
        display: block;
      }

      ::slotted(*) {
        color: red !important;
      }

      .item-open:not(.level-1) .dropdown {
        background-color: var(--scheme-neutral-tonal-11);
      }

      .item-open:not(.level-1) .item-control {
        background-color: var(--scheme-primary-tonal-10);
        border-bottom: 1px solid var(--scheme-primary-tonal-9);
      }

      .item-icon {
        width: 16px;
        height: 16px;
        display: block;
      }

      .item-label {
        display: flex;
        gap: 5px;
      }

      .dropdown {
        padding-left: 8px;
      }

      .item-label {
        word-break: keep-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        overflow-x: hidden;
      }
    `,
  ];

  @state()
  protected opened = false;

  @property()
  data: TreeData = navs;

  @property()
  level: number = 0;

  constructor() {
    super();
  }

  handleClick() {
    if (this.level === 0) {
      return;
    }
    if (this.data.link) {
      if (this.data.link.startsWith("https://github.com")) {
        window.open(this.data.link);
        return;
      }
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
    const _opened = this.level === 0 ? true : this.opened;

    return html`
      <div class="item level-${this.level} item-${_opened ? "open" : ""}">
        ${when(
          this.level > 0,
          () => html`
            <div @click="${this.handleClick}" class="item-control level-${this.level}">
              <div class="item-label">
                ${when(
                  this.data.icon,
                  () => html`<img class="item-icon" src="${this.data.icon}" alt="" />`,
                  () =>
                    html`<y-icon
                      name="${this.data.children ? "list" : "bookmark-start"}"
                    ></y-icon>`
                )}
                ${this.data.name}
              </div>
              ${when(
                !this.data.link && this.level !== 0,
                () =>
                  html`<y-icon
                    class="caret caret-${_opened ? "open" : ""}"
                    name="chevron_right"
                  ></y-icon>`
              )}
            </div>
          `
        )}
        <div class="dropdown">
          ${when(
            this.data.children?.length && _opened,
            () =>
              html`${map(
                this.data.children,
                (child) => html`<y-tree level="${Number(this.level) + 1}" .data="${child}" />`
              )}`
          )}
        </div>
      </div>
    `;
  }
}
