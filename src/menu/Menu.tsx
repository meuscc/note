import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav } from "../sections/topbar/Nav";
import bs from "/src/icons/bs";

const animationDuration = 95;
const pointerOutDelay = 20;

// shrink 为环境发出的是否收缩的信号
// menu main
interface Props {
  navs: Nav[];
  direction?: "vertical" | "horizontal";
  shrink?: boolean;
}

export default React.memo(function Menu({
  navs,
  direction = "vertical",
  shrink = false,
}: Props) {
  return (
    <ul className={`menu ${direction} l1 ${shrink ? "shrink" : ""}`}>
      {navs.map((nav) => {
        return (
          <MenuItem
            level={1}
            shrink={shrink}
            direction={direction}
            key={nav.path}
            nav={nav}
          />
        );
      })}
    </ul>
  );
});

// menu item
interface MenuItemProps {
  nav: Nav;
  parentPath?: string;
  level: number;
  direction: "vertical" | "horizontal";
  shrink: boolean;
}

const MenuItem = React.memo(function _MenuItem({
  nav,
  parentPath = "",
  level = 1,
  direction,
  shrink,
}: MenuItemProps) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const hasChildren = nav.children?.length;
  const subMenuRef = useRef<HTMLUListElement>(null);
  const newPath = parentPath ? `${parentPath}${nav.path}` : nav.path;
  const timerRef = useRef(0);

  const showSubMenu = useCallback(() => {
    if (!subMenuRef.current) return;
    subMenuRef.current.removeAttribute("style");
    const currentStyle = getComputedStyle(subMenuRef.current);
    subMenuRef.current.animate(
      direction === "vertical"
        ? [
            { height: `0px`, padding: "0 0" },
            { height: currentStyle.height, padding: currentStyle.padding },
          ]
        : [
            {
              height: `0px`,
              padding: "0 0",
              opacity: 0,
              transform: "scale(0.5)",
            },
            {
              height: currentStyle.height,
              padding: currentStyle.padding,
              opacity: 1,
              transform: "scale(1)",
            },
          ],
      {
        duration: animationDuration,
      }
    );
  }, [direction, shrink]);

  const hideSubMenu = useCallback(() => {
    if (!subMenuRef.current) return;
    const currentStyle = getComputedStyle(subMenuRef.current);
    subMenuRef.current
      .animate(
        direction === "vertical"
          ? [
              { height: currentStyle.height, padding: currentStyle.padding },
              { height: `0px`, padding: "0 0" },
            ]
          : [
              {
                height: currentStyle.height,
                padding: currentStyle.padding,
                opacity: 1,
                transform: "scale(1)",
              },
              {
                height: `0px`,
                padding: "0 0",
                opacity: 0,
                transform: "scale(0.5)",
              },
            ],
        {
          duration: animationDuration,
        }
      )
      .finished.then(() => {
        setShow(false);
      });
  }, [direction, shrink]);

  const handleToggle = useCallback(
    (_show: boolean) => {
      if (direction === "horizontal" || shrink) return;
      if (!_show) {
        return setShow(true);
      }
      return hideSubMenu();
    },
    [direction, shrink]
  );

  const handleHover = useCallback(
    (_show: boolean) => {
      if (direction === "vertical" && !shrink) return;
      if (timerRef.current) window.clearTimeout(timerRef.current);
      setShow(true);
    },
    [direction, shrink]
  );

  const handleOut = useCallback(
    (_show: boolean) => {
      if (direction === "vertical" && !shrink) return;
      timerRef.current = window.setTimeout(() => {
        window.clearTimeout(timerRef.current);
        hideSubMenu();
      }, pointerOutDelay);
    },
    [direction, shrink]
  );

  useEffect(() => {
    hideSubMenu();
  }, [direction, shrink]);

  return (
    <li
      className={`menu-item l${level} ${show && hasChildren ? "open" : ""}`}
      onMouseLeave={() => handleOut(show)}
      onMouseEnter={() => handleHover(show)}
    >
      <div
        className={`menu-navi l${level} ${show && hasChildren ? "open" : ""}`}
      >
        {hasChildren ? (
          <div
            onPointerDown={() => handleToggle(show)}
            className={`menu-link l${level} ${
              router.pathname.startsWith(newPath) ? "has-active" : ""
            }`}
            style={{
              paddingLeft:
                direction === "vertical" && !shrink ? level * 16 : 16,
              paddingRight: 16,
            }}
          >
            {nav.icon && (
              <span
                className={"menu-icon"}
                dangerouslySetInnerHTML={{ __html: nav.icon }}
              ></span>
            )}
            <span className={"menu-text"} style={{ flex: 1 }}>
              {nav.name}
            </span>
            <span
              className={"menu-chevron"}
              dangerouslySetInnerHTML={{ __html: bs.chevron_right }}
            ></span>
          </div>
        ) : (
          <Link href={`${newPath}`}>
            <a
              className={`menu-link l${level} ${
                router.pathname === newPath ? "active" : ""
              }`}
              style={{
                paddingLeft:
                  direction === "vertical" && !shrink ? level * 16 : 16,
                paddingRight: 16,
              }}
            >
              {nav.icon && (
                <span
                  className={"menu-icon"}
                  dangerouslySetInnerHTML={{ __html: nav.icon }}
                ></span>
              )}
              <span className={"menu-text"}>{nav.name}</span>
            </a>
          </Link>
        )}
      </div>
      {hasChildren && show && (
        <SubMenu
          shrink={shrink}
          ref={subMenuRef}
          nav={nav}
          showSubMenu={showSubMenu}
          parentPath={newPath}
          level={level + 1}
          direction={direction}
        />
      )}
    </li>
  );
});

// sub menu
const SubMenu = React.memo(
  React.forwardRef<
    HTMLUListElement,
    {
      nav: Nav;
      parentPath: string;
      showSubMenu: () => void;
      level: number;
      direction: "vertical" | "horizontal";
      shrink: boolean;
    }
  >(({ nav, showSubMenu, parentPath, level, direction, shrink }, ref) => {
    useEffect(() => {
      showSubMenu();
    }, []);

    return (
      <ul ref={ref} className={`menu l${level}`} style={{ display: "none" }}>
        {nav.children!.map((subNav) => (
          <MenuItem
            shrink={shrink}
            key={subNav.path}
            nav={subNav}
            parentPath={parentPath}
            level={level}
            direction={direction}
          />
        ))}
      </ul>
    );
  })
);
