import { createEffect, createMemo, createSignal, For } from "solid-js";
import { Transition } from "solid-transition-group";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import { BI_chevron_down, BI_chevron_up } from "/src/icons/bi/bi";
import { NavLink, useLocation } from "solid-app-router";
import { Nav } from "./types";
import { style } from "solid-js/web";

export default function MenuItem({
  nav,
  level = 1,
  direction = "vertical",
  pathPrefix = "",
}: {
  nav: Nav;
  level?: number;
  direction?: "vertical" | "horizontal";
  pathPrefix?: string;
}) {
  let timer = 0;
  let referenceEl: any;
  let floatingEl: any;

  const [subMenuShow, setSubMenuShow] = createSignal(false);

  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  const currentHref = `${pathPrefix}${nav.path}`;

  const isHorizontal = direction === "horizontal";
  const isVertical = !isHorizontal;
  const hasChildren = nav.children?.length;
  const noChildren = !hasChildren;
  const childrenLength = hasChildren ? nav.children!.length : 0;

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
  // 检测到其他菜单项激活 则关闭该子菜单
  createEffect(() => {
    // 没有子菜单 & 水平布局 => 什么都不做
    if (noChildren || isHorizontal) return;
    // 该菜单正好为激活的菜单 => 什么都不做
    if (pathname().includes(currentHref)) return;

    setSubMenuShow(false);
  });

  // 水平菜单子菜单定位
  createEffect(() => {
    if (isVertical) return;

    if (subMenuShow() && hasChildren) {
      update(referenceEl, floatingEl).then();
    }
  });

  const MenuLink = (
    <div class={"menu-link"}>
      <div className={"menu-link-content"}>
        {nav.icon}
        {nav.name}
      </div>
      {hasChildren && isVertical && (
        <div className={"menu-link-chevron"}>
          {subMenuShow() ? <BI_chevron_up /> : <BI_chevron_down />}
        </div>
      )}
    </div>
  );

  const subMenuHeight = `${childrenLength * 40}px`;

  return (
    <li
      class={`menu-item${subMenuShow() && hasChildren ? " open" : ""}`}
      onPointerEnter={() => {
        if (isVertical) return;
        if (timer) {
          clearTimeout(timer);
        }
        setSubMenuShow(true);
      }}
      onPointerLeave={() => {
        if (isVertical) return;
        timer = window.setTimeout(() => {
          clearTimeout(timer);
          setSubMenuShow(false);
        }, 50);
      }}
    >
      {hasChildren ? (
        <div
          class={"menu-navi"}
          onpointerup={() => {
            if (isVertical) {
              setSubMenuShow(!subMenuShow());
            }
          }}
          ref={referenceEl}
        >
          {MenuLink}
        </div>
      ) : (
        <NavLink
          end={noChildren}
          href={currentHref}
          class={"menu-navi"}
          ref={referenceEl}
        >
          {MenuLink}
        </NavLink>
      )}
      {hasChildren && (
        <Transition
          name={"expand"}
          // onEnter={async (el, done) => {
          //   await el.animate(
          //     isVertical
          //       ? [{ maxHeight: 0 }, { maxHeight: subMenuHeight }]
          //       : [
          //           { opacity: 0.2, transform: "scale(0.9)" },
          //           { opacity: 1, transform: "scale(1)" },
          //         ],
          //     {
          //       duration: 95,
          //     }
          //   ).finished;
          //   done();
          // }}
          // onExit={async (el, done) => {
          //   await el.animate(
          //     isVertical
          //       ? [{ maxHeight: subMenuHeight }, { maxHeight: 0 }]
          //       : [
          //           { opacity: 1, transform: "scale(1)" },
          //           { opacity: 0.2, transform: "scale(0.9)" },
          //         ],
          //     {
          //       duration: 95,
          //     }
          //   ).finished;
          //   done();
          // }}
        >
          {subMenuShow() && (
            <ul
              style={{ "max-height": subMenuHeight }}
              onTransitionEnd={(e) => {
                // console.log(subMenuShow());
                e.target.setAttribute("style", "max-height: auto");
                // if (e.target.classList.contains("expand-exit-to")) {
                //   console.log(subMenuShow());
                //   e.target.removeAttribute("style");
                // }
              }}
              className={`menu l${level + 1}`}
              ref={floatingEl}
            >
              <For each={nav.children}>
                {(subNav) => (
                  <MenuItem
                    pathPrefix={currentHref}
                    direction={direction}
                    level={level + 1}
                    nav={subNav}
                  />
                )}
              </For>
            </ul>
          )}
        </Transition>
      )}
    </li>
  );
}
