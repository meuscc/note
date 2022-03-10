import { Nav } from "./types";
import { createEffect, createSignal, Show } from "solid-js";
import { Transition } from "solid-transition-group";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";

export default function MenuItem({
  nav,
  level = 1,
  direction = "vertical",
}: {
  nav: Nav;
  level?: number;
  direction?: "vertical" | "horizontal";
}) {
  let timer = 0;
  let referenceEl: any;
  let floatingEl: any;
  const [subMenuShow, setSubMenuShow] = createSignal(false);

  async function update(referenceEl: any, floatingEl: any) {
    const { x, y } = await computePosition(referenceEl, floatingEl, {
      placement: level === 1 ? "bottom-start" : "right-start",
      middleware: [offset(1), flip(), shift()],
    });

    Object.assign(floatingEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  createEffect(() => {
    // if (level === 1 && direction === "vertical") {
    if (direction === "vertical") {
      return;
    }
    if (subMenuShow()) {
      console.log(nav.children?.length);
      if (nav.children?.length) {
        update(referenceEl, floatingEl).then();
      }
    }
  });

  const horizontalEventProp =
    direction === "vertical"
      ? {}
      : {
          onMouseEnter: () => {
            if (timer) {
              clearTimeout(timer);
            }
            setSubMenuShow(true);
          },
          onMouseLeave: () => {
            timer = window.setTimeout(() => {
              clearTimeout(timer);
              setSubMenuShow(false);
            }, 50);
          },
        };
  const verticalEventProp =
    direction === "vertical"
      ? {
          onClick: () => {
            setSubMenuShow(!subMenuShow());
          },
        }
      : {};

  return (
    <li
      class={`menu-item${subMenuShow() && nav.children?.length ? " open" : ""}`}
      {...horizontalEventProp}
    >
      <div class={"menu-navi"} {...verticalEventProp} ref={referenceEl}>
        <div class={"menu-link"}>
          <Show
            when={nav.children?.length && direction === "vertical"}
            fallback={
              <>
                {nav.icon}
                {nav.name}
              </>
            }
          >
            <div className={"menu-link-content"}>
              {nav.icon}
              {nav.name}
            </div>
          </Show>
        </div>
      </div>
      {nav.children?.length && (
        <Transition
          onEnter={async (el, done) => {
            await el.animate(
              // direction === "vertical" && level === 1
              direction === "vertical"
                ? [
                    { maxHeight: 0 },
                    { maxHeight: `${nav.children!.length * 40}px` },
                  ]
                : [
                    { opacity: 0.2, transform: "scale(0.9)" },
                    { opacity: 1, transform: "scale(1)" },
                  ],
              {
                duration: 95,
              }
            ).finished;
            done();
          }}
          onExit={async (el, done) => {
            await el.animate(
              direction === "vertical"
                ? [
                    { maxHeight: `${nav.children!.length * 40}px` },
                    { maxHeight: 0 },
                  ]
                : [
                    { opacity: 1, transform: "scale(1)" },
                    { opacity: 0.2, transform: "scale(0.9)" },
                  ],
              {
                duration: 95,
              }
            ).finished;
            done();
          }}
        >
          {subMenuShow() && (
            <ul className={`menu l${level + 1}`} ref={floatingEl}>
              {nav.children?.map((subNav) => {
                return (
                  <MenuItem
                    direction={direction}
                    level={level + 1}
                    nav={subNav}
                  />
                );
              })}
            </ul>
          )}
        </Transition>
      )}
    </li>
  );
}
