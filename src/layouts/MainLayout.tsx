import React from "react";
import Topbar from "../sections/topbar/Topbar";
import Sidebar from "../sections/sidebar/Sidebar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className={"main-layout"}>
      <div className={"main-layout-topbar"}>
        <Topbar></Topbar>
      </div>
      <div className={"main-layout-body"}>
        <div className={"main-layout-sidebar"}>
          <Sidebar />
        </div>
        <div className={"main-layout-content"}>
          <main style={{ flex: 1 }}>{children}</main>
        </div>
      </div>
    </div>
  );
}
