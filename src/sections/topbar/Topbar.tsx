import React from "react";
import createNavs from "./create_navs";
import Menu from "../../menu/Menu";
import Brand from "./Brand";

const navs = createNavs();

export default React.memo(function Topbar() {
  return (
    <div className={"topbar"}>
      <div className={"topbar-left"}>
        <Brand />
        <Menu direction={"horizontal"} navs={navs.slice(1, navs.length)} />
      </div>
    </div>
  );
});
