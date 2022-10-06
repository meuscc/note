import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

declare var Prism: any;

// prettier-ignore
const prismStyle = css`code[class*=language-],pre[class*=language-]{color:#000;background:0 0;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{position:relative;margin:.5em 0;overflow:visible;padding:1px}pre[class*=language-]>code{position:relative;z-index:1;border-left:10px solid #358ccb;box-shadow:-1px 0 0 0 #358ccb,0 0 0 1px #dfdfdf;background-color:#fdfdfd;background-image:linear-gradient(transparent 50%,rgba(69,142,209,.04) 50%);background-size:3em 3em;background-origin:content-box;background-attachment:local}code[class*=language-]{max-height:inherit;height:inherit;padding:0 1em;display:block;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background-color:#fdfdfd;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-bottom:1em}:not(pre)>code[class*=language-]{position:relative;padding:.2em;border-radius:.3em;color:#c92c2c;border:1px solid rgba(0,0,0,.1);display:inline;white-space:normal}pre[class*=language-]:after,pre[class*=language-]:before{content:'';display:block;position:absolute;bottom:.75em;left:.18em;width:40%;height:20%;max-height:13em;box-shadow:0 13px 8px #979797;-webkit-transform:rotate(-2deg);-moz-transform:rotate(-2deg);-ms-transform:rotate(-2deg);-o-transform:rotate(-2deg);transform:rotate(-2deg)}pre[class*=language-]:after{right:.75em;left:auto;-webkit-transform:rotate(2deg);-moz-transform:rotate(2deg);-ms-transform:rotate(2deg);-o-transform:rotate(2deg);transform:rotate(2deg)}.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#7d8b99}.token.punctuation{color:#5f6364}.token.boolean,.token.constant,.token.deleted,.token.function-name,.token.number,.token.property,.token.symbol,.token.tag{color:#c92c2c}.token.attr-name,.token.builtin,.token.char,.token.function,.token.inserted,.token.selector,.token.string{color:#2f9c0a}.token.entity,.token.operator,.token.url,.token.variable{color:#a67f59;background:rgba(255,255,255,.5)}.token.atrule,.token.attr-value,.token.class-name,.token.keyword{color:#1990b8}.token.important,.token.regex{color:#e90}.language-css .token.string,.style .token.string{color:#a67f59;background:rgba(255,255,255,.5)}.token.important{font-weight:400}.token.bold{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.namespace{opacity:.7}@media screen and (max-width:767px){pre[class*=language-]:after,pre[class*=language-]:before{bottom:14px;box-shadow:none}}pre[class*=language-].line-numbers.line-numbers{padding-left:0}pre[class*=language-].line-numbers.line-numbers code{padding-left:3.8em}pre[class*=language-].line-numbers.line-numbers .line-numbers-rows{left:0}pre[class*=language-][data-line]{padding-top:0;padding-bottom:0;padding-left:0}pre[data-line] code{position:relative;padding-left:4em}pre .line-highlight{margin-top:0}`

@customElement("c-b")
export class CodeBlock extends LitElement {
  static styles = [
    prismStyle,
    // language=css
    css`
      :host {
        display: block;
        padding: 8px;
        margin-bottom: 0.5em;
        /*background-color: rgba(0, 0, 0, 0.02);*/
        background-color: #f8f9fa;
        border-radius: 8px;
      }

      pre[class*="language-"]::after,
      pre[class*="language-"]::before {
        content: none;
      }
      pre[class*="language-"] > code {
        border: 0;
        box-shadow: none;
        background-color: transparent;
        background-image: none;
        padding: 8px;
      }
      :not(pre) > code[class*="language-"],
      pre[class*="language-"] {
        background-color: transparent;
        margin: 0;
      }
    `,
  ];

  static properties = {};

  @property()
  c?: string;

  @property()
  l: string = "javascript";

  render() {
    let trimmed = this.c ?? this.innerHTML;

    if (trimmed.indexOf("\n") === 0) {
      trimmed = trimmed.replace("\n", "");
      const match = trimmed.match(/\s+/);
      trimmed = trimmed.replaceAll(match?.[0] ?? "", "").trim();
    }

    return html`<pre class="language-${this.l}"><code class="language-${this.l}">${unsafeHTML(
      Prism.highlight(trimmed, Prism.languages[this.l], this.l)
    )}</code></pre>`;
  }
}

@customElement("c-i")
export class CodeInline extends LitElement {
  static styles = [
    prismStyle,
    // language=css
    css`
      :host {
        display: inline-block;
      }

      pre[class*="language-"]::after,
      pre[class*="language-"]::before {
      }
    `,
  ];

  @property()
  c?: string;

  @property()
  l: string = "javascript";

  render() {
    const fragment = unsafeHTML(
      Prism.highlight(this.c ?? this.innerHTML, Prism.languages[this.l], this.l)
    );
    return html`<code class="language-${this.l}">${fragment}</code>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-b": CodeBlock;
    "c-i": CodeInline;
  }
}
