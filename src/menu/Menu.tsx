import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Nav } from "../sections/topbar/Nav";
import bs from "/src/icons/bs";

interface Props {
  navs: Nav[];
  direction?: "vertical" | "horizontal";
}

export default function Menu({ navs, direction = "vertical" }: Props) {
  return (
    <ul className={`menu ${direction} l1`}>
      {navs.map((nav) => {
        return <MenuItem direction={direction} key={nav.path} nav={nav} />;
      })}
    </ul>
  );
}

interface MenuItemProps {
  nav: Nav;
  parentPath?: string;
  level?: number;
  direction: "vertical" | "horizontal";
}

function MenuItem({
  nav,
  parentPath = "",
  level = 1,
  direction,
}: MenuItemProps) {
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
        duration: 95,
      }
    );
  }, []);
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
          duration: 95,
        }
      )
      .finished.then(() => setShow(false));
  }, []);
  const handleToggle = useCallback((_show: boolean) => {
    if (direction === "horizontal") return;
    if (!_show) {
      return setShow(true);
    }
    return hideSubMenu();
  }, []);

  const handleHover = useCallback((_show: boolean) => {
    if (direction === "vertical") return;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setShow(true);
  }, []);

  const handleOut = useCallback((_show: boolean) => {
    if (direction === "vertical") return;
    timerRef.current = window.setTimeout(() => {
      window.clearTimeout(timerRef.current);
      hideSubMenu();
    }, 95);
  }, []);

  return (
    <li
      className={`menu-item l${level}`}
      onMouseLeave={() => handleOut(show)}
      onMouseEnter={() => handleHover(show)}
    >
      <div className={`menu-navi ${show ? "open" : ""}`}>
        {hasChildren ? (
          <div
            onPointerDown={() => handleToggle(show)}
            className={"menu-link"}
            style={{
              paddingLeft: direction === "vertical" ? level * 16 : 16,
              paddingRight: 16,
            }}
          >
            {nav.icon && (
              <span
                className={"menu-icon"}
                dangerouslySetInnerHTML={{ __html: nav.icon }}
              ></span>
            )}
            <div style={{ flex: 1 }}>{nav.name}</div>
            <span
              className={"menu-chevron"}
              dangerouslySetInnerHTML={{ __html: bs.chevron_right }}
            ></span>
          </div>
        ) : (
          <div
            className={"menu-link"}
            style={{
              paddingLeft: direction === "vertical" ? level * 16 : 16,
              paddingRight: 16,
            }}
          >
            {nav.icon && (
              <span
                className={"menu-icon"}
                dangerouslySetInnerHTML={{ __html: nav.icon }}
              ></span>
            )}
            <Link href={`${newPath}`}>{nav.name}</Link>
          </div>
        )}
      </div>
      {hasChildren && show && (
        <SubMenu
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
}

const SubMenu = React.forwardRef<
  HTMLUListElement,
  {
    nav: Nav;
    parentPath: string;
    showSubMenu: () => void;
    level: number;
    direction: "vertical" | "horizontal";
  }
>(({ nav, showSubMenu, parentPath, level, direction }, ref) => {
  useEffect(() => {
    showSubMenu();
  }, []);

  return (
    <ul ref={ref} className={`menu l${level}`} style={{ display: "none" }}>
      {nav.children!.map((subNav) => (
        <MenuItem
          key={subNav.path}
          nav={subNav}
          parentPath={parentPath}
          level={level}
          direction={direction}
        />
      ))}
    </ul>
  );
});
