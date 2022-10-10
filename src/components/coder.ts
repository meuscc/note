import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { debounce } from "lodash";

import { basicSetup, EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { keymap } from "@codemirror/view";
import { html as langHtml } from "@codemirror/lang-html";
import { expandAbbreviation } from "@emmetio/codemirror6-plugin";

import { contentStore } from "~/components/contentStore";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const initialContent = `<m-b>f(x) = x^{23''""''''''}</m-b>

<div>apbcasdf sff</div>
fsdf

<hr />

<m-b>f(x) = x^2</m-b>

<!-- prettier-ignore -->
<m-b>
  \\begin{matrix}
  a & b \\\\
  c & d
  \\end{matrix}
</m-b>

<!-- prettier-ignore -->
<c-b l="rust">
  let a: i8 = 124
</c-b>

      `;

// noinspection CssInvalidAtRule
@customElement("c-e")
export class CodeEditor extends LitElement {
  static styles = [
    // language=css
    css`
      @unocss-placeholder;
      :host {
        display: block;
      }
      .coder-ctn {
        display: flex;
        gap: 16px;
      }

      .editor-render {
        width: 100%;
        font-size: 14px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        padding: 8px;
        flex: 1;
      }
      .code-result {
        width: 100%;
        font-size: 14px;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        padding: 12px;
        flex: 1;
        max-height: 80vh;
        overflow: auto;
      }

      .cm-editor {
        border-radius: 8px !important;
        max-height: 80vh;
      }
      .cm-editor.cm-focused {
        outline: none !important;
        /*border: 2px solid red;*/
      }
      .cm-editor .cm-content {
        font-family: "JetBrains Mono", monospace, Monaco, Consolas, sans-serif;
        font-weight: 400;
      }

      .cm-gutters {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      .ͼ1 .cm-content {
        padding: 8px 0;
      }
      .ͼ1 .cm-content .ͼi,
      .ͼ1 .cm-content .ͼe {
        font-weight: 600;
      }
      .ͼ1 .cm-content .ͼe {
        color: #3399ff;
      }
    `,
  ];

  static properties = {};

  @state()
  content = initialContent;

  firstUpdated() {
    const debounced = debounce(
      (update: any) => (this.content = update.state.toJSON().doc),
      400
    );

    const updateListenerExtension = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        debounced(update);
      }
    });

    const startState = EditorState.create({
      doc: this.content,
      extensions: [
        basicSetup,
        langHtml(),
        keymap.of([
          {
            key: "Tab",
            run: expandAbbreviation,
          },
        ]),
        updateListenerExtension,
      ],
    });

    (window as any).view = new EditorView({
      parent: this.shadowRoot!.querySelector(".editor-render")!,
      state: startState,
    });
  }

  render() {
    return html`
      <div class="coder-ctn">
        <div class="editor-render"></div>
        <div class="code-result">${unsafeHTML(this.content)}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-e": CodeEditor;
  }
}
