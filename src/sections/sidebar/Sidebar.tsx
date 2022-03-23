import React from "react";
import Menu from "/src/menu/Menu";
import createNavs from "/src/sections/topbar/create-navs";
import useSidebarStore, { SidebarStatus } from "./SidebarStore";
import Brand from "/src/sections/topbar/Brand";

const navs = createNavs();

export default function Sidebar() {
  const sidebarStore = useSidebarStore();

  return (
    <>
      <div
        onPointerUp={(e) => {
          // @ts-ignore
          if (e.target.classList.contains("sidebar-mask")) {
            useSidebarStore.setState({ sidebarStatus: SidebarStatus.hide });
          }
        }}
        className={`sidebar-mask ${sidebarStore.sidebarStatus}`}
      />
      <div className={`sidebar ${sidebarStore.sidebarStatus}`}>
        <Brand />
        <div className={"sidebar-content"}>
          <Menu
            navs={navs}
            shrink={sidebarStore.sidebarStatus === SidebarStatus.shrink}
            direction={"vertical"}
          />
        </div>
      </div>
    </>
  );
}
