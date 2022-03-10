import { Outlet } from "solid-app-router";
import Header from "/src/sections/header/Header";
import Slider from "/src/sections/sider/Sider";

export default function MainLayout() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Outlet />
    </>
  );
}
