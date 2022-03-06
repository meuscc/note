import { computePosition, flip, shift, offset } from "@floating-ui/dom";
import { createSignal, onMount, createEffect } from "solid-js";
import { NavLink } from "solid-app-router";
import { Transition } from "solid-transition-group";

export default function MenuItem({
  nav,
  base = "",
  level = 1,
  classPrefix,
  direction = "horizontal",
}: {
  nav: any;
  base?: string;
  level?: number;
  classPrefix?: string;
  direction?: "horizontal" | "vertical";
}) {
  let referenceEl: any;
  let floatingEl: any;
  let timer = 0;
  const [show, setShow] = createSignal(false);

  async function update(referenceEl: any, floatingEl: any) {
    const { x, y } = await computePosition(referenceEl, floatingEl, {
      placement: level === 1 ? "bottom-start" : "right-start",
      middleware: [offset(level === 1 ? 1 : 7), flip(), shift()],
    });

    Object.assign(floatingEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  }

  createEffect(() => {
    if (show()) {
      if (nav.children?.length && direction === "horizontal") {
        update(referenceEl, floatingEl).then();
      }
    }
  });

  onMount(() => {
    if (nav.children?.length && direction === "horizontal") {
      update(referenceEl, floatingEl).then();
    }
  });

  if (direction === "vertical") {
    return (
      <li
        class={`menu-item menu-item-${direction} ${
          classPrefix ? `${classPrefix}-menu-item` : ""
        }`}
      >
        <NavLink
          onPointerDown={() => {
            setShow((v) => !v);
          }}
          ref={referenceEl}
          class={`menu-item-link ${
            classPrefix ? `${classPrefix}-menu-item-link` : ""
          } ${level > 1 ? "sub-menu-item-link" : ""}`}
          href={`${base}${nav.path}`}
        >
          {nav.icon}
          {nav.name}
        </NavLink>
        {nav.children?.length ? (
          <div
            ref={floatingEl}
            class={`sub-menu-wrap ${
              classPrefix ? `${classPrefix}-sub-menu-wrap` : ""
            }`}
          >
            <Transition
              onEnter={async (el, done) => {
                await el.animate(
                  [
                    { opacity: 1, maxHeight: `0px` },
                    { opacity: 1, maxHeight: `${nav.children?.length * 30}px` },
                  ],
                  {
                    duration: 200,
                  }
                ).finished;

                done();
              }}
              onExit={async (el, done) => {
                await el.animate(
                  [
                    { opacity: 1, maxHeight: `${nav.children?.length * 30}px` },
                    { opacity: 1, maxHeight: `0px` },
                  ],
                  {
                    duration: 200,
                  }
                ).finished;

                done();
              }}
              name={"sub-menu-vertical"}
            >
              {show() && (
                <div
                  class={`sub-menu-ctn ${
                    classPrefix ? `${classPrefix}-sub-menu-ctn` : ""
                  }`}
                >
                  <ul
                    class={`sub-menu ${
                      classPrefix ? `${classPrefix}-sub-menu` : ""
                    }`}
                  >
                    {nav.children?.map((u: any) => {
                      return (
                        <MenuItem
                          nav={u}
                          base={`${base}${nav.path}`}
                          level={level + 1}
                          classPrefix={classPrefix}
                        />
                      );
                    })}
                  </ul>
                </div>
              )}
            </Transition>
          </div>
        ) : (
          <></>
        )}
      </li>
    );
  }

  return (
    <li
      class={`menu-item menu-item-${direction} ${
        classPrefix ? `${classPrefix}-menu-item` : ""
      }`}
      onMouseEnter={() => {
        if (timer) {
          clearTimeout(timer);
        }
        setShow(true);
      }}
      onMouseLeave={() => {
        timer = setTimeout(() => {
          clearTimeout(timer);
          setShow(false);
        }, 50);
      }}
    >
      <NavLink
        ref={referenceEl}
        class={`menu-item-link ${
          classPrefix ? `${classPrefix}-menu-item-link` : ""
        } ${level > 1 ? "sub-menu-item-link" : ""}`}
        href={`${base}${nav.path}`}
      >
        {nav.name}
      </NavLink>
      {nav.children?.length ? (
        <div
          ref={floatingEl}
          class={`sub-menu-wrap ${
            classPrefix ? `${classPrefix}-sub-menu-wrap` : ""
          }`}
        >
          <Transition
            onEnter={(el, done) => {
              const a = el.animate(
                [
                  { opacity: 0, transform: "scale(0.9)" },
                  { opacity: 1, transform: "scale(1)" },
                ],
                {
                  duration: 200,
                }
              );
              a.finished.then(done);
            }}
            onExit={(el, done) => {
              const a = el.animate(
                [
                  { opacity: 1, transform: "scale(1)" },
                  { opacity: 0, transform: "scale(0.9)" },
                ],
                {
                  duration: 200,
                }
              );
              a.finished.then(done);
            }}
          >
            {show() && (
              <div
                class={`sub-menu-ctn ${
                  classPrefix ? `${classPrefix}-sub-menu-ctn` : ""
                }`}
              >
                <ul
                  class={`sub-menu ${
                    classPrefix ? `${classPrefix}-sub-menu` : ""
                  }`}
                >
                  {nav.children?.map((u: any) => {
                    return (
                      <MenuItem
                        nav={u}
                        base={`${base}${nav.path}`}
                        level={level + 1}
                        classPrefix={classPrefix}
                      />
                    );
                  })}
                </ul>
              </div>
            )}
          </Transition>
        </div>
      ) : (
        <></>
      )}
    </li>
  );
}
