import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

@customElement("page-math-axiom-of-choice")
export default class extends LitElement {
  override render() {
    return html`
      <div>
        <div>
          <m-i>f:\\alpha \\leftrightarrow x</m-i>
          <m-b>f(x) = x^{2323}</m-b>
          <m-b>
            f(\\relax{x}) = \\int_{-\\infty}^\\infty \\hat f (\\xi) \\,e^{2 \\pi
            i \\xi x} \\,d\\xi
          </m-b>
          <m-b> \\int_{-\\infty}^\\infty </m-b>
          <!-- prettier-ignore -->
          <c-b>
            const a = 1234;
            function fun() {
              console.log(a);
            }
          </c-b>
        </div>
      </div>
    `;
  }
}
