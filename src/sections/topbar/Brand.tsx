import bs from "/src/icons/bs";
import Link from "next/link";
import React from "react";
import sidebarStore, { SidebarStatus } from "../sidebar/SidebarStore";

export default function Brand() {
  return (
    <div className="brand">
      <button
        role={"button"}
        dangerouslySetInnerHTML={{ __html: bs.list }}
        className={"brand-toggle hide-md"}
        onPointerUp={(e) => {
          e.stopPropagation();
          sidebarStore.setState((v) => ({
            sidebarStatus:
              v.sidebarStatus === SidebarStatus.hide
                ? SidebarStatus.float
                : SidebarStatus.hide,
          }));
        }}
      />
      <button
        role={"button"}
        dangerouslySetInnerHTML={{ __html: bs.list }}
        className={"brand-toggle show-md"}
        onPointerUp={(e) => {
          e.stopPropagation();
          sidebarStore.setState((v) => ({
            sidebarStatus:
              v.sidebarStatus === SidebarStatus.shrink
                ? SidebarStatus.full
                : SidebarStatus.shrink,
          }));
        }}
      />
      <Link href={"/"}>
        <span className={"brand-name"}>
          <Logo />
          天真笔记
        </span>
      </Link>
    </div>
  );
}

export function Logo() {
  return (
    <svg className="icon" viewBox="0 0 1024 1024">
      <path
        d="M896.63 462.3a298.21 298.21 0 0 0-55.78-203.67c-59.78-82.29-153.6-125.16-248.12-123.45a298.21 298.21 0 0 0-210.94-9.89c-96.74 31.43-166.5 107.41-194.08 197.83a298.22 298.22 0 0 0-74.59 197.56c0 101.72 50.69 191.55 128.17 245.72a298.2 298.2 0 0 0 164.84 132c96.74 31.43 197.84 11 273.3-46a298.18 298.18 0 0 0 176.47-116c59.78-82.26 71.57-184.73 40.73-274.1zM759 650.5a637.64 637.64 0 0 1-164.67 157.56 639.89 639.89 0 0 1-136.43-28.42 637.6 637.6 0 0 1-200.72-107.88A640.83 640.83 0 0 1 282.56 309a640.74 640.74 0 0 1 352.88-88 640.93 640.93 0 0 1 192.73 308.46A639.09 639.09 0 0 1 759 650.5z"
        fill="currentColor"
      ></path>
      <path
        d="M718.73 485.28A160.48 160.48 0 0 0 555.8 309.91a160.46 160.46 0 0 0-217.14 100.76 160.46 160.46 0 0 0 28.73 237.64 160.47 160.47 0 0 0 234.89 46.12 160.47 160.47 0 0 0 116.45-209.15z m-73.81 100.9a342 342 0 0 1-88.26 84.47 343.48 343.48 0 0 1-180.75-73.08 343.22 343.22 0 0 1 13.64-194.48A343.38 343.38 0 0 1 578.73 356 343.42 343.42 0 0 1 682 521.32a342.83 342.83 0 0 1-37.08 64.86z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
