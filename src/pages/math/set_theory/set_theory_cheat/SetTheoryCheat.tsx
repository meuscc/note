import Menu from "/src/components/menu/Menu";
import createNavs from "/src/sections/header/header_navs";

export default function SetTheoryCheat() {
  return (
    <div class="page">
      <h1>集合论概览</h1>
      <Menu navs={createNavs()[0].children} />
    </div>
  );
}
