import React, { useEffect, useState } from "react";
import Menu from "/src/menu/Menu";
import createNavs from "/src/sections/topbar/create_navs";
import { SidebarStatus, sidebarStore } from "./SidebarStore";
import Link from "next/link";
import bs from "/src/icons/bs";
import Brand from "/src/sections/topbar/Brand";
const navs = createNavs();

export default function Sidebar() {
  const [sidebarStatus, setSidebarStatus] = useState<SidebarStatus>();

  useEffect(() => {
    sidebarStore.subscribe((state) => {
      setSidebarStatus(state.sidebarStatus);
    });
  }, []);

  return (
    <div className={`sidebar ${sidebarStatus}`}>
      <Brand />
      <div className={"sidebar-content"}>
        <Menu navs={navs} />
      </div>
    </div>
  );
}
