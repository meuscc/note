import { html, LitElement } from "lit";
import { Routes, Router } from "@lit-labs/router";
import { customElement } from "lit/decorators.js";

@customElement("app-router")
export class Test1 extends LitElement {
  _router = new Router(this, [
    {
      path: "/*",
      enter: async (params) => {
        await import("../routes/index");
        return true;
      },
      render: () => html`<page-index></page-index>`,
    },
  ]);

  override render() {
    return html` ${this._router.outlet()} `;
  }
}
