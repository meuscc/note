import { computePosition, flip, shift, offset } from "@floating-ui/dom";
import { createSignal, onMount } from "solid-js";
import { NavLink } from "solid-app-router";
import { Transition } from "solid-transition-group";

export function Dropdown({
  nav,
  class: clazz,
  base = "",
  level = 1,
}: {
  nav: any;
  class: string;
  base?: string;
  level?: number;
}) {
  let triggerEl: any;
  let dropdownEl: any;
  let timer = 0;
  const [show, setShow] = createSignal(false);

  onMount(() => {
    if (nav.children?.length) {
      computePosition(triggerEl, dropdownEl, {
        placement: level === 1 ? "bottom-start" : "right-start",
        middleware: [offset(level === 1 ? 1 : 6), flip(), shift()],
      }).then(({ x, y }) => {
        Object.assign(dropdownEl.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  });

  return (
    <li
      onMouseEnter={() => {
        if (timer) {
          clearTimeout(timer);
        }
        setShow(true);
      }}
      onMouseLeave={() => {
        // @ts-ignore
        timer = setTimeout(() => {
          clearTimeout(timer);
          setShow(false);
        }, 50);
      }}
    >
      <NavLink
        ref={triggerEl}
        class={` ${level > 1 ? "header-dropdown-link" : ""}`}
        href={`${base}${nav.path}`}
      >
        {nav.name}
      </NavLink>
      {nav.children?.length ? (
        <div ref={dropdownEl} class={`header-dropdown ${clazz}`}>
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
              <div class="header-dropdown-content">
                <ul>
                  {nav.children?.map((u: any) => {
                    return (
                      <Dropdown
                        nav={u}
                        class={""}
                        base={`${base}${nav.path}`}
                        level={level + 1}
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
