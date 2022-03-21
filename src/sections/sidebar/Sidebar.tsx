import React, { useEffect, useState } from "react";
import Menu from "/src/menu/Menu";
import createNavs from "/src/sections/topbar/create_navs";
import { SidebarStatus, sidebarStore } from "./SidebarStore";
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
      <Menu navs={navs} />
    </div>
  );
}
