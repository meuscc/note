import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { Routes, Router } from "@lit-labs/router";

@customElement("y-app")
class R extends LitElement {
  private _routes = new Router(this, [
    { path: "/a/*", render: () => html`<h1>Home <y-routes></y-routes></h1>` },
  ]);

  render() {
    console.log(this._routes.outlet());
    return html`
      <header>头部</header>
      <main>${this._routes.outlet()}</main>
      <footer>为兵部</footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-app": R;
  }
}
@customElement("y-routes")
export class MyElement extends LitElement {
  private routes = new Router(this, [
    { path: "/", render: () => html`<h1>Home</h1>` },
    { path: "projects", render: () => html`<h1>Projectssdfssdfsd</h1>` },
    { path: "about", render: () => html`<h1>About</h1>` },
  ]);

  render() {
    return html`${this.routes.outlet()}`;
  }
}
