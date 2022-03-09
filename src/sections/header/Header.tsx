import createNavs from "./header_navs";

import { setOpen } from "../sider/sider_store";
import Menu from "/src/components/menu/Menu";

export default function MainLayout() {
  const navs = createNavs()[0].children;

  return (
    <header class="header">
      <section class="header-left">
        <button onClick={() => setOpen((v) => !v)}>
          <span class="iconify-inline icon" data-icon="bi:list"></span>
        </button>
        <Menu navs={navs} direction={"horizontal"} class={""} />
      </section>
      <section class="header-right">
        <button
          onClick={() => {
            document.body.classList.toggle("dark");
          }}
        >
          <span class="iconify-inline" data-icon="carbon:moon"></span>
          <span class="iconify-inline" data-icon="carbon:sun"></span>
        </button>
      </section>
    </header>
  );
}
