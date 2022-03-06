import { useState } from "react";
import Transition from "./Transition";

interface Nav {
  name: string;
  path: string;
  icon?: any;
  component: any;
  children?: Nav[];
}

export default function MenuItem({
  nav,
  level = 1,
}: {
  nav: Nav;
  level?: number;
}) {
  const [subMenuShow, setSubMenuShow] = useState(false);

  const handleOpen = () => {
    setSubMenuShow((v) => !v);
  };

  return (
    <li className={`menu-item l${level}`}>
      <div className={`menu-item-link l${level}`} onClick={handleOpen}>
        <span>{nav.name}</span>
      </div>
      {nav.children?.length && (
        <Transition
          show={subMenuShow}
          onExit={() => setSubMenuShow(false)}
          maxHeight={nav.children?.length * 40}
        >
          <ul className={`menu l${level + 1}`}>
            {nav.children?.map((subNav) => {
              return (
                <MenuItem level={level + 1} key={subNav.name} nav={subNav} />
              );
            })}
          </ul>
        </Transition>
      )}
    </li>
  );
}
