import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import createNavs from "/src/create_navs";

export interface Nav {
  name: string;
  path: string;
  icon?: any;
  component: any;
  children?: Nav[];
}

@customElement("y-sidebar")
export class Sidebar extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
        margin-top: 100px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `,
  ];

  @property({ state: true })
  navs = createNavs();

  render() {
    return html`<ul class="menu">
      ${map(
        this.navs[0].children,
        (nav) => html`<y-sidebar-menu .nav=${nav}></y-sidebar-menu>`
      )}
    </ul>`;
  }
}

@customElement("y-sidebar-menu")
export class SidebarMenu extends LitElement {
  static styles = [
    // language=css
    css`
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
      }
      li {
        cursor: pointer;
        user-select: none;
      }
      .menu-navi {
        height: 40px;
      }
    `,
  ];

  inputRef = createRef();

  @property()
  nav?: Nav;

  @property()
  level = 1;

  @property()
  direction = "vertical";

  @property()
  pathPrefix = "";

  @property({ state: true })
  showed = false;

  handleClick() {
    if (!this.showed) {
      this.showed = true;
    } else {
      if (this.inputRef.value && this.nav?.children?.length) {
        const animate = this.inputRef.value.animate(
          [
            {
              height: getComputedStyle(this.inputRef.value!).height,
            },
            {
              height: 0,
            },
          ],
          { duration: 95 }
        );

        animate.onfinish = () => {
          this.showed = false;
        };
      }
    }
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);

    if (this.inputRef.value && this.nav?.children?.length) {
      requestAnimationFrame(() => {
        this.inputRef.value!.animate(
          [
            {
              height: 0,
            },
            {
              height: getComputedStyle(this.inputRef.value!).height,
            },
          ],
          {
            duration: 95,
          }
        );
      });
    }
  }

  render() {
    return html`<li>
      <div class="menu-navi" @click="${this.handleClick}">
        ${this.nav?.name}
      </div>
      ${when(
        this.nav?.children?.length && this.showed,
        () =>
          html`<ul ${ref(this.inputRef)}>
            ${map(this.nav?.children, (subNav) => {
              return html`<y-sidebar-menu .nav=${subNav}></y-sidebar-menu>`;
            })}
          </ul>`
      )}
    </li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-sidebar": Sidebar;
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements {
      "y-sidebar": any;
    }
  }
}
