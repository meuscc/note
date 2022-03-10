import MenuItem from "./MenuItem";
import { Nav } from "./types";

interface Props {
  navs?: Nav[];
  direction?: "vertical" | "horizontal";
  class?: string;
}

export default function Menu({
  navs = [],
  direction = "vertical",
  class: clazz = "",
}: Props) {
  return (
    <ul class={`menu ${direction} l1 ${clazz}`}>
      {navs?.map((nav) => (
        <MenuItem direction={direction} nav={nav} />
      ))}
    </ul>
  );
}
