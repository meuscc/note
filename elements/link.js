import routes from "/routes/routes.js";

customElements.define(
  "y-link",
  class CppCheatsheet extends HTMLElement {
    constructor() {
      super();

      const el = document.createElement("div");

      el.innerHTML = `
      <a href="${this.getAttribute("href")}"><slot></slot></a>
      `;

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(el);
    }

    connectedCallback() {
      console.log(this.getAttribute("href"));

      this.addEventListener("click", async (e) => {
        e.preventDefault();
        const toPath = e.target.getAttribute("href");

        const route = routes.find((r) => r.path === toPath);

        history.pushState(undefined, undefined, toPath);
        console.log(toPath, route);

        route.action().then(() => {
          document.getElementById("root").innerHTML = route.element;
        });
      });
    }
  }
);
