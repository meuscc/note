import create from "zustand";

export enum SidebarStatus {
  hide = "hide",
  float = "float",
  shrink = "shrink",
  full = "full",
}

export default create(() => {
  return {
    sidebarStatus: SidebarStatus.hide,
  };
});
