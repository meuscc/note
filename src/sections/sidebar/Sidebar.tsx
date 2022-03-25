import React, { useEffect, useState } from "react";
import { useMedia } from "react-use";
import createNavs from "/src/sections/topbar/create-navs";
import useSidebarStore, { SidebarStatus } from "./SidebarStore";
import useNavsStore, { NavsPosition } from "/src/sections/navs-store";
import Brand from "/src/sections/topbar/Brand";
import Menu from "/src/menu/Menu";

const navs = createNavs();

export default function Sidebar() {
  const sidebarStore = useSidebarStore();
  const navsPosition = useNavsStore((s) => s.navsPosition);

  const isLg = useMedia("(min-width: 1200px)", false);
  const isMd = useMedia("(min-width: 900px)", false);
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

  let sideNavClass = "hide";

  if (navsPosition === NavsPosition.top) {
    sideNavClass =
      sidebarStore.sidebarStatus === SidebarStatus.float ? "float" : "hide";
  } else {
    sideNavClass = sidebarStore.sidebarStatus;
  }

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
        className={`sidebar ${sideNavClass} ${shrinking ? "shrinking" : ""}`}
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
