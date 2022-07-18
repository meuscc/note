import { customElement } from "lit/decorators.js";
import { css, html, LitElement } from "lit";
import themes from "/src/themes/themes";

@customElement("page-home")
export default class extends LitElement {
  static styles = [
    // language=css
    css`
      .material-symbols-outlined {
        font-family: "Material Symbols Outlined";
        font-weight: normal;
        font-style: normal;
        font-size: inherit;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
      }

      .container {
        background-color: var(--scheme-surface);
        margin: 8px;
        padding: 8px;
        border-radius: ${themes.variables.shape.radius}px;
      }
    `,
  ];
  constructor() {
    super();
  }
  override connectedCallback() {
    super.connectedCallback();
    console.log(this.getElementsByClassName("yyt"));
  }

  handleClick() {
    console.log(123);
  }
  override render() {
    return html`
      <div class="container">
        <div>语言学习</div>
        <div>Rust</div>
        <a href="https://course.rs/">Rust语言圣经</a>
        <a href="https://zh.practice.rs/">Rust语言实战</a>
        <a href="https://cheats.rs/">Rust Language Cheat Sheet</a>
        <a href="https://doc.rust-lang.org/nomicon/">The Rustonomicon</a>
        <a href="https://rust-lang.github.io/async-book/">
          Asynchronous Programming in Rust
        </a>
        <a href="https://book.async.rs/">
          Async programming in Rust with async-std
        </a>
        <a href="https://github.com/trickster0/OffensiveRust">
          Offensive Rust
        </a>
        <div>C++</div>
        <a href="https://c-cpp.com/">C(++)参考手册</a>
        <a href="https://wangdoc.com/clang/">C教程</a>

        <div>算法</div>
        <div>机器学习</div>
        <div>数据库</div>
        <div>UI库</div>
        <div>UI设计</div>
        <div>3D/建模</div>
        <div>动画</div>
        <div>可视化</div>
        <div>工具</div>
      </div>
    `;
  }
}
