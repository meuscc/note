import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { EditorState } from "@codemirror/state";

import { defaultKeymap } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";
import { html as h } from "@codemirror/lang-html";
import { basicSetup, EditorView } from "codemirror";
// import { markdown } from "@codemirror/lang-markdown";
// import { languages } from "@codemirror/language-data";
import { contentStore } from "~/components/contentStore";
import { expandAbbreviation } from "@emmetio/codemirror6-plugin";
import { keymap } from "@codemirror/view";

declare var Prism: any;

console.log(contentStore.get());

contentStore.subscribe((a) => console.log(a));

export const debounce = <TArgs extends any[]>(
  { delay }: { delay: number },
  func: (...args: TArgs) => any
): ((...args: TArgs) => void) => {
  let timer: any = null;

  console.log(func);
  const debounced = (...args: TArgs) => {
    clearTimeout(timer);

    timer = setTimeout(() => func(...args), delay);
  };
  return debounced as unknown as (...args: TArgs) => void;
};

/**
 * Given an interval and a function returns a new function
 * that will only call the source function if interval milliseconds
 * have passed since the last invocation
 */
export const throttle = <TArgs extends any[]>(
  { interval }: { interval: number },
  func: (...args: TArgs) => any
): ((...args: TArgs) => any) => {
  let ready = true;
  const throttled = (...args: TArgs) => {
    if (!ready) return;
    func(...args);
    ready = false;
    setTimeout(() => {
      ready = true;
    }, interval);
  };
  return throttled as unknown as (...args: TArgs) => any;
};

@customElement("c-e")
export class CodeEditor extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
        width: 50vw;
        background-color: antiquewhite;
      }
    `,
  ];

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    const d = debounce({ delay: 200 }, (update: any) =>
      contentStore.set(update.state.toJSON().doc)
    );

    let updateListenerExtension = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        // contentStore.set(update.state.toJSON().doc);

        d(update);
      }
    });

    let startState = EditorState.create({
      doc: "# Hello\n\n```javascript\nlet x = 'y'\n```",
      extensions: [
        basicSetup,
        // ixora,
        // markdown({ codeLanguages: languages }),
        h(),
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
      parent: this.shadowRoot!,
      state: startState,
    });
  }

  static properties = {};
}

declare global {
  interface HTMLElementTagNameMap {
    "c-e": CodeEditor;
  }
}
