import { onCleanup } from "solid-js";
import createNavs from "../header/header_navs";

import Menu from "../header/Menu";
import { open, setOpen } from "./sider_store";

// @ts-ignore
function clickOutside(el: any, accessor: any) {
  // implement here
  const onClick = (e: any) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener("click", onClick);
  onCleanup(() => document.body.removeEventListener("click", onClick));
}

export default function MainLayout() {
  const navs = createNavs()[0].children;

  return (
    <>
      <aside
        // @ts-ignore
        use:clickOutside={() => setOpen(false)}
        class={`sider${open() ? " open" : ""}`}
      >
        <Menu direction={"vertical"} navs={navs} classPrefix={"sider"} />
      </aside>
      <div class={`sider-mask${open() ? " open" : ""}`}></div>
    </>
  );
}
