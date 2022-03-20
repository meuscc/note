import React from "react";
import Menu from "/src/menu/Menu";
import createNavs from "/src/sections/topbar/create_navs";
const navs = createNavs();
export default function Sidebar() {
  return (
    <div className={"sidebar"}>
      <Menu navs={navs} />
    </div>
  );
}
