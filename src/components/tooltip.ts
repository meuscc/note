import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ref, createRef } from "lit/directives/ref.js";
// @ts-ignore
import { computePosition, flip, shift, offset, arrow } from "@floating-ui/dom";

@customElement("y-tooltip")
export class MathBlock extends LitElement {
  static styles = [
    // language=css
    css`
      .y-tooltip-trigger {
      }
      .y-tooltip-tooltip {
        /*display: none;*/
        position: absolute;
        background: #222;
        color: white;
        font-weight: bold;
        padding: 5px;
        border-radius: 4px;
        font-size: 90%;
        pointer-events: none;
      }
      .y-tooltip-arrow {
        position: absolute;
        background: #333;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
      }
    `,
  ];

  @property()
  m?: string;

  triggerRef = createRef();
  tooltipRef = createRef();
  arrowRef = createRef();

  protected firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    const button = this.triggerRef.value! as HTMLElement;
    const tooltip = this.tooltipRef.value! as HTMLElement;
    const arrowElement = this.arrowRef.value! as HTMLElement;

    console.log(this.triggerRef, this.tooltipRef);
    computePosition(button, tooltip, {
      placement: "bottom-start",
      middleware: [
        offset(6),
        flip(),
        shift({ padding: 5 }),
        arrow({ element: arrowElement }),
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      // Accessing the data
      // @ts-ignore
      const { x: arrowX, y: arrowY } = middlewareData.arrow;

      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
      }[placement.split("-")[0]];

      Object.assign(arrowElement.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        right: "",
        bottom: "",
        [staticSide as string]: "-4px",
      });
    });
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <button
        class="y-tooltip-trigger"
        ${ref(this.triggerRef)}
        aria-describedby="tooltip"
      >
        My button
      </button>
      <div class="y-tooltip-tooltip" ${ref(this.tooltipRef)} role="tooltip">
        <a href="/">My tooltip</a>

        <div class="y-tooltip-arrow" ${ref(this.arrowRef)}></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "y-tooltip": MathBlock;
  }
}
