import createStore from "/src/stores/create-store";

export enum SidebarStatus {
  hide = "hide",
  float = "float",
  shrink = "shrink",
  full = "full",
}

export const sidebarStore = createStore(() => ({
  sidebarStatus: SidebarStatus.hide,
}));
