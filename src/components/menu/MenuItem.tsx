import { Nav } from "./types";
import { createSignal } from "solid-js";
import { Transition } from "solid-transition-group";

export default function MenuItem({
  nav,
  level = 1,
}: {
  nav: Nav;
  level?: number;
}) {
  const [subMenuShow, setSubMenuShow] = createSignal(false);

  const handleOpen = () => {
    setSubMenuShow(!subMenuShow());
  };
  return (
    <li class={`menu-item l${level}`}>
      <div class={"menu-link"} onClick={handleOpen}>
        {nav.name}
      </div>
      {nav.children?.length && (
        <Transition
          onEnter={async (el, done) => {
            await el.animate(
              [
                { opacity: 1, maxHeight: `0px` },
                { opacity: 1, maxHeight: `${nav.children!.length * 30}px` },
              ],
              {
                duration: 200,
              }
            ).finished;
            done();
          }}
          onExit={async (el, done) => {
            await el.animate(
              [
                { opacity: 1, maxHeight: `${nav.children!.length * 30}px` },
                { opacity: 1, maxHeight: `0px` },
              ],
              {
                duration: 200,
              }
            ).finished;
            done();
          }}
        >
          {subMenuShow() && (
            <ul className={`menu l${level + 1}`}>
              {nav.children?.map((subNav) => {
                return <MenuItem level={level + 1} nav={subNav} />;
              })}
            </ul>
          )}
        </Transition>
      )}
    </li>
  );
}
