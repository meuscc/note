import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Nav } from "../sections/topbar/Nav";

interface Props {
  navs: Nav[];
}

export default function Menu({ navs }: Props) {
  console.log(navs);
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

  console.log(newPath);

  const showSubMenu = useCallback(() => {
    subMenuRef.current!.removeAttribute("style");
    subMenuRef.current!.animate(
      [{ height: "0px" }, { height: `${hasChildren! * 40}px` }],
      {
        duration: 95,
      }
    );
  }, []);
  const hideSubMenu = useCallback(() => {
    subMenuRef
      .current!.animate(
        [{ height: `${hasChildren! * 40}px` }, { height: `0px` }],
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
    <ul ref={ref} className={"menu"} style={{ height: 0 }}>
      {nav.children!.map((subNav) => (
        <MenuItem key={subNav.path} nav={subNav} parentPath={parentPath} />
      ))}
    </ul>
  );
});
