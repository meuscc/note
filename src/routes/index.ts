/****
name = "home"
title = "首页"
****/

import { Routes } from "@lit-labs/router";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-index")
export default class PageIndex extends LitElement {
  _routes = new Routes(this, [
    {
      path: "math/axiom-of-choice",
      enter: async () => {
        await import("./index/math/axiom-of-choice/axiom-of-choice");
        return true;
      },
      render: ({ id }) =>
        html`<page-math-axiom-of-choice></page-math-axiom-of-choice>`,
    },
  ]);

  override render() {
    return html` ${this._routes.outlet()} `;
  }
}
