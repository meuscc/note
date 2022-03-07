import MenuItem from "./MenuItem";
import { Nav } from "./types";

interface Props {
  navs?: Nav[];
  direction?: "vertical" | "horizontal";
}

export default function Menu({ navs = [], direction = "vertical" }: Props) {
  console.log(navs, direction);
  return (
    <ul class="menu l1">
      {navs?.map((nav) => (
        <MenuItem nav={nav} />
      ))}
    </ul>
  );
}
