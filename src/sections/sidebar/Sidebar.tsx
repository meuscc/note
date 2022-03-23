import React, { useEffect, useState } from "react";
import { useMedia } from "react-use";
import Menu from "/src/menu/Menu";
import createNavs from "/src/sections/topbar/create-navs";
import useSidebarStore, { SidebarStatus } from "./SidebarStore";

import Brand from "/src/sections/topbar/Brand";

const navs = createNavs();

export default function Sidebar() {
  const sidebarStore = useSidebarStore();
  const isLg = useMedia("(min-width: 1200px)");
  const isMd = useMedia("(min-width: 900px)");
  const [shrinking, setShrinking] = useState(false);

  useEffect(() => {
    console.log(isMd, isLg);
    if (isMd && isLg) {
      useSidebarStore.setState({ sidebarStatus: SidebarStatus.full });
    }
    if (isMd && !isLg) {
      useSidebarStore.setState({ sidebarStatus: SidebarStatus.shrink });
    }
    if (!isMd && !isLg) {
      useSidebarStore.setState({ sidebarStatus: SidebarStatus.hiding });
      setTimeout(() => {
        // useSidebarStore.setState({ sidebarStatus: SidebarStatus.hide });
      }, 1000);
    }
  }, [isMd, isLg]);

  useEffect(() => {
    if (sidebarStore.sidebarStatus === SidebarStatus.shrink) {
      setShrinking(true);
      setTimeout(() => {
        setShrinking(false);
      }, 95);
    }
  }, [sidebarStore.sidebarStatus]);

  return (
    <>
      <div
        onPointerUp={(e) => {
          useSidebarStore.setState({ sidebarStatus: SidebarStatus.hide });
        }}
        className={`sidebar-mask ${
          sidebarStore.sidebarStatus === SidebarStatus.float ? "show" : ""
        }`}
      />
      <div
        className={`sidebar ${sidebarStore.sidebarStatus} ${
          shrinking ? "shrinking" : ""
        }`}
      >
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
