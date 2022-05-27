import { html, LitElement } from "lit";
import { Routes, Router } from "@lit-labs/router";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import a from "./test.md";

@customElement("app-router")
export class Test1 extends LitElement {
  _router = new Router(
    this,
    [
      { path: "/", render: () => html`<h2>Root</h2>` },
      { path: "/test1/:x", render: ({ x }) => html`<h2>Test 1: ${x}</h2>` },
      { path: "/child1/*", render: () => html`<child-1></child-1>` },
      { path: "/child2/*", render: () => html`<child-2></child-2>` },
    ],
    {
      fallback: {
        render: (params: { [key: string]: string | undefined }) =>
          html`<h2>Not Found</h2>
            ${params[0]}`,
      },
    }
  );

  override render() {
    return html`
      ${unsafeHTML(a)}
      <h1>Testdddsdfsdfsdfsdsdfsdfsdfsdfssdfsdf</h1>
      <a id="test1" href="/test1/abc">Test 1</a>
      <a id="child1" href="/child1/abc">Child 1</a>
      <a id="child2" href="/child2/xyz">Child 2</a>
      ${this._router.outlet()}
    `;
  }
}

@customElement("child-1")
export class Child1 extends LitElement {
  _routes = new Routes(this, [
    { path: ":id", render: ({ id }) => html`<h3>Child 1: ${id}</h3>` },
  ]);

  override render() {
    return html`
      <a id="abc" href="${this._routes.link("abc")}">ABC</a>
      ${this._routes.outlet()}
    `;
  }
}

@customElement("child-2")
export class Child2 extends LitElement {
  _routes = new Routes(this, [
    { path: ":id", render: ({ id }) => html`<h3>Child 2: ${id}</h3>` },
  ]);

  override render() {
    return this._routes.outlet();
  }
}
