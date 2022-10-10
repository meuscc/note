import { Routes } from "@lit-labs/router";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-index")
export default class PageIndex extends LitElement {
  _routes = new Routes(this, [
    {
      path: "",
      enter: async () => {
        await import("./index/index");
        return true;
      },
      render: ({ id }) => html`<page-home></page-home>`,
    },
    {
      path: "type",
      enter: async () => {
        await import("./index/type/type");
        return true;
      },
      render: ({ id }) => html`<page-type></page-type>`,
    },
    {
      path: "tag",
      enter: async () => {
        await import("./index/tag/tag");
        return true;
      },
      render: ({ id }) => html`<page-tag></page-tag>`,
    },
    {
      path: "item",
      enter: async () => {
        await import("./index/item/item");
        return true;
      },
      render: ({ id }) => html`<page-item></page-item>`,
    },
    {
      path: "auth/login",
      enter: async () => {
        await import("./auth/login");
        return true;
      },
      render: ({ id }) => html`<page-login></page-login>`,
    },
  ]);

  override render() {
    return html`${this._routes.outlet()} `;
  }
}
