import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Nav } from "../sections/topbar/Nav";
import bs from "/src/icons/bs";

interface Props {
  navs: Nav[];
}

export default function Menu({ navs }: Props) {
  return (
    <ul className={"menu"}>
      {navs.map((nav) => {
        return <MenuItem key={nav.path} nav={nav} />;
      })}
    </ul>
  );
}

interface MenuItemProps {
  nav: Nav;
  parentPath?: string;
  level?: number;
}

function MenuItem({ nav, parentPath = "", level = 1 }: MenuItemProps) {
  const [show, setShow] = useState(false);
  const hasChildren = nav.children?.length;
  const subMenuRef = useRef<HTMLUListElement>(null);
  const newPath = parentPath ? `${parentPath}${nav.path}` : nav.path;

  const showSubMenu = useCallback(() => {
    if (!subMenuRef.current) return;
    subMenuRef.current.removeAttribute("style");
    const currentStyle = getComputedStyle(subMenuRef.current);
    subMenuRef.current.animate(
      [
        { height: `0px`, padding: "0 0" },
        { height: currentStyle.height, padding: currentStyle.padding },
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
        [
          { height: currentStyle.height, padding: currentStyle.padding },
          { height: `0px`, padding: "0 0" },
        ],
        {
          duration: 95,
        }
      )
      .finished.then(() => setShow(false));
  }, []);
  const handleToggle = useCallback((_show: boolean) => {
    if (!_show) {
      return setShow(true);
    }
    return hideSubMenu();
  }, []);

  return (
    <li className={"menu-item"}>
      <div className={`menu-navi ${show ? "open" : ""}`}>
        {hasChildren ? (
          <div
            onPointerDown={() => handleToggle(show)}
            className={"menu-link"}
            style={{ paddingLeft: level * 16, paddingRight: 16 }}
          >
            <div style={{ flex: 1 }}>{nav.name}</div>
            <span
              className={"menu-chevron"}
              dangerouslySetInnerHTML={{ __html: bs.chevron_right }}
            ></span>
          </div>
        ) : (
          <div
            className={"menu-link"}
            style={{ paddingLeft: level * 16, paddingRight: 16 }}
          >
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
        />
      )}
    </li>
  );
}

const SubMenu = React.forwardRef<
  HTMLUListElement,
  { nav: Nav; parentPath: string; showSubMenu: () => void; level: number }
>(({ nav, showSubMenu, parentPath, level }, ref) => {
  useEffect(() => {
    showSubMenu();
  }, []);

  return (
    <ul ref={ref} className={"menu"} style={{ display: "none" }}>
      {nav.children!.map((subNav) => (
        <MenuItem
          key={subNav.path}
          nav={subNav}
          parentPath={parentPath}
          level={level}
        />
      ))}
    </ul>
  );
});
