import { customElement, property } from "lit/decorators.js";
import { css, html, LitElement } from "lit";

@customElement("y-h1")
export class TypoH1 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: flex;
      }
      h1 {
        font-size: 32px;
        line-height: 44px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `,
  ];

  render() {
    return html`<h1><slot></slot></h1>`;
  }
}

@customElement("y-h2")
export class TypoH2 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: flex;
      }
      h2 {
        font-size: 28px;
        line-height: 40px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `,
  ];

  render() {
    return html`<h2><slot></slot></h2>`;
  }
}

@customElement("y-h3")
export class TypoH3 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: flex;
      }
      h3 {
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `,
  ];

  render() {
    return html`<h3><slot></slot></h3>`;
  }
}

@customElement("y-h4")
export class TypoH4 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: flex;
      }
      h4 {
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `,
  ];

  render() {
    return html`<h4><slot></slot></h4>`;
  }
}

@customElement("y-h5")
export class TypoH5 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: flex;
      }
      h5 {
        font-size: 18px;
        line-height: 24px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `,
  ];

  render() {
    return html`<h5><slot></slot></h5>`;
  }
}

@customElement("y-h6")
export class TypoH6 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: flex;
      }
      h6 {
        font-size: 16px;
        line-height: 22px;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 0.5em;
      }
    `,
  ];

  render() {
    return html`<h6><slot></slot></h6>`;
  }
}

@customElement("y-title")
export class TypoTitle extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: flex;
      }
      .level-1 {
        font-size: 18px;
        font-weight: 600;
      }
      .level-2 {
        font-size: 16px;
        font-weight: 600;
      }
    `,
  ];

  @property()
  level?: "1" | "2" = "1";

  render() {
    return html`<div class="level-${this.level}"><slot></slot></div>`;
  }
}

@customElement("y-paragraph")
export class TypoParagraph extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: flex;
      }
      p {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
      .level-1 {
        font-size: 14px;
      }
      .level-2 {
        font-size: 12px;
      }
    `,
  ];

  @property()
  level?: "1" | "2" = "1";

  render() {
    return html`<p class="level-${this.level}"><slot></slot></p>`;
  }
}

@customElement("y-text")
export class TypoText extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: inline;
      }
      .level-1 {
        font-size: 14px;
      }
      .level-2 {
        font-size: 12px;
      }
    `,
  ];

  @property()
  level?: "1" | "2" = "1";

  render() {
    return html`<span class="level-${this.level}"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-h1": TypoH1;
    "y-h2": TypoH2;
    "y-h3": TypoH3;
    "y-h4": TypoH4;
    "y-h5": TypoH5;
    "y-h6": TypoH6;
    "y-title": TypoTitle;
    "y-text": TypoText;
    "y-paragraph": TypoParagraph;
  }
}
