import MenuItem from "./MenuItem";

interface Nav {
  name: string;
  path: string;
  icon?: any;
  component: any;
  children?: Nav[];
}

type Direction = "vertical" | "horizontal";

export default function Menu({
  navs,
  direction = "vertical",
}: {
  navs: Nav[];
  direction?: Direction;
}) {
  return (
    <ul className={`menu ${direction} l1`}>
      {navs.map((nav) => {
        return <MenuItem key={nav.name} nav={nav}></MenuItem>;
      })}
    </ul>
  );
}
