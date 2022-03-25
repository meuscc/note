import React from "react";
import createNavs from "./create-navs";
import Menu from "../../menu/Menu";
import Brand from "./Brand";
import Dropdown from "/src/components/dropdown/Dropdown";
import bs from "/src/icons/bs";
import useNavsStore, { NavsPosition } from "/src/sections/navs-store";

const navs = createNavs();

export default React.memo(function Topbar() {
  const navsPosition = useNavsStore((s) => s.navsPosition);

  return (
    <div className={"topbar"}>
      <div className={"topbar-left"}>
        <Brand />
        {navsPosition === NavsPosition.top && (
          <Menu direction={"horizontal"} navs={navs.slice(1, navs.length)} />
        )}
      </div>
      <div className={"topbar-right"} style={{ marginRight: 300 }}>
        <Dropdown
          trigger={"click"}
          overlay={
            <div>
              <ul className={"menu"}>
                <li className={"menu-item"}>
                  <div className={"menu-navi"}>
                    <div className={"menu-link nowrap-keep-all"}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: bs.gear_wide_connected,
                        }}
                      />
                      <span>
                        <i
                          className="bi-github"
                          role="img"
                          aria-label="GitHub"
                        />
                        侧边菜单
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          }
        >
          <div>
            <button
              className={"btn-p5y btn-fill"}
              onClick={() => {
                useNavsStore.setState((v) => ({
                  navsPosition:
                    v.navsPosition === NavsPosition.top
                      ? NavsPosition.left
                      : NavsPosition.top,
                }));
              }}
            >
              设置
            </button>
          </div>
        </Dropdown>
      </div>
    </div>
  );
});
