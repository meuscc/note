import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import { map } from "lit/directives/map.js";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";
import createNavs from "/src/sections/header/header_navs";

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
    console.log(this.navs[0].children);

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
      }
      li {
        cursor: pointer;
        user-select: none;
      }
      .box {
        position: relative;
        width: 200px;
        /*height: 0;*/
        /*height: 20px;*/
        overflow: hidden;
      }
      .shifted {
        /*height: 400px;*/
        opacity: 1;
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

  @property({ state: true })
  opened = false;

  handleClick() {
    if (!this.showed) {
      this.showed = true;
      this.opened = true;
    } else {
      if (this.inputRef.value && this.nav?.children?.length) {
        console.log(this.inputRef.value);
        console.log(getComputedStyle(this.inputRef.value!).height);

        const animate = this.inputRef.value.animate(
          [
            {
              height: this.nav?.children?.length * 40 + "px",
            },
            {
              height: 0,
            },
          ],
          { duration: 200 }
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
      console.log(this.inputRef.value);
      console.log(getComputedStyle(this.inputRef.value!).height);

      console.log(this.showed);

      this.inputRef.value.animate(
        [
          {
            height: 0,
          },
          {
            height: this.nav?.children?.length * 40 + "px",
          },
        ],
        {
          duration: 200,
        }
      );
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
          html`<ul
            ${ref(this.inputRef)}
            class="box ${classMap({ shifted: this.opened })}"
          >
            ${map(this.nav?.children, (subNav) => {
              return html`<y-sidebar-menu .nav=${subNav}></y-sidebar-menu>`;
            })}
          </ul>`
      )}
    </li>`;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     "y-sidebar": Sidebar;
//   }
// }

declare global {
  export namespace JSX {
    interface IntrinsicElements {
      "y-sidebar": any;
    }
  }
}
