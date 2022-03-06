import MenuItem from "./MenuItem";

export default function Menu({
  navs,
  classPrefix,
  direction = "horizontal",
}: {
  navs: any;
  classPrefix: string;
  direction?: "horizontal" | "vertical";
}) {
  return (
    <section
      class={`menu-wrap${classPrefix ? ` ${classPrefix}-menu-wrap` : ""}`}
    >
      <nav class={`menu-ctn${classPrefix ? ` ${classPrefix}-menu-ctn` : ""}`}>
        <ul class={`menu ${classPrefix ? `${classPrefix}-menu` : ""}`}>
          {navs.map((v: any) => {
            return (
              <MenuItem
                direction={direction}
                nav={v as any}
                classPrefix={classPrefix}
                base={""}
              />
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
