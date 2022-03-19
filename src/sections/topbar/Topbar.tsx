import React from "react";
import createNavs from "./create_navs";
import Menu from "../../menu/Menu";

const navs = createNavs();

export default React.memo(function Topbar() {
  return (
    <div>
      <Menu navs={navs} />
    </div>
  );
});
