import React from "react";
import Topbar from "../sections/topbar/Topbar";
import Sidebar from "../sections/sidebar/Sidebar";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Topbar />
      <Sidebar />
      <main>{children}</main>
    </>
  );
}
