import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("y-dropdown")
export class Dropdown extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
      .dropdown {
        position: relative;
      }
    `,
  ];
  private staticNode: Element | null = null;

  firstUpdated() {
    this.staticNode = this.renderRoot.querySelector("y-dropdown-container");
  }

  @property()
  c: string = "";

  @property()
  l: string = "javascript";

  @property({ state: true })
  show = false;

  handleClick() {
    console.log(323232);
    console.log(this.renderRoot.querySelector("y-dropdown-container"));
  }

  render() {
    return html`<div class="dropdown" @click="${this.handleClick}">
      <slot></slot>
    </div>`;
  }
}

@customElement("y-dropdown-trigger")
export class DropdownTrigger extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property()
  c: string = "";

  @property()
  l: string = "javascript";

  render() {
    return html`<div class="dropdown-trigger">
      <slot></slot>
    </div>`;
  }
}

@customElement("y-dropdown-container")
export class DropdownContainer extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
      .dropdown-container {
        position: absolute;
        display: none;
      }
    `,
  ];

  @property()
  slot: string = "container";
  @property()
  c: string = "";

  @property()
  l: string = "javascript";

  constructor() {
    super();
    console.log(this.slot);
    this.slot = "container";
  }

  render() {
    return html`<div class="dropdown-container">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-dropdown": Dropdown;
  }
}
