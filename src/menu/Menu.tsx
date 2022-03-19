import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Nav } from "../sections/topbar/Nav";

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
}

function MenuItem({ nav, parentPath = "" }: MenuItemProps) {
  const [show, setShow] = useState(false);
  const hasChildren = nav.children?.length;
  const subMenuRef = useRef<HTMLUListElement>(null);
  const newPath = parentPath ? `${parentPath}${nav.path}` : nav.path;

  const showSubMenu = useCallback(() => {
    if (!subMenuRef.current) return;
    subMenuRef.current.removeAttribute("style");
    subMenuRef.current.animate(
      [
        { height: "0px" },
        { height: getComputedStyle(subMenuRef.current!).height },
      ],
      {
        duration: 95,
      }
    );
  }, []);
  const hideSubMenu = useCallback(() => {
    if (!subMenuRef.current) return;
    subMenuRef.current
      .animate(
        [
          { height: getComputedStyle(subMenuRef.current!).height },
          { height: `0px` },
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
      <div className={"menu-navi"}>
        {hasChildren ? (
          <div onClick={() => handleToggle(show)}>{nav.name}</div>
        ) : (
          <Link href={`${newPath}`}>{nav.name}</Link>
        )}
      </div>
      {hasChildren && show && (
        <SubMenu
          ref={subMenuRef}
          nav={nav}
          showSubMenu={showSubMenu}
          parentPath={newPath}
        ></SubMenu>
      )}
    </li>
  );
}

const SubMenu = React.forwardRef<
  HTMLUListElement,
  { nav: Nav; parentPath: string; showSubMenu: () => void }
>(({ nav, showSubMenu, parentPath }, ref) => {
  useEffect(() => {
    showSubMenu();
  }, []);

  return (
    <ul ref={ref} className={"menu"} style={{ display: "none" }}>
      {nav.children!.map((subNav) => (
        <MenuItem key={subNav.path} nav={subNav} parentPath={parentPath} />
      ))}
    </ul>
  );
});
