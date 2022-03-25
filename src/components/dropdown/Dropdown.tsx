import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const animationDuration = 95;
const pointerOutDelay = 20;

type Placement =
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | "top"
  | "topLeft"
  | "topRight";

export default function Dropdown({
  children,
  placement = "bottomLeft",
  trigger = "hover",
  overlay,
}: React.PropsWithChildren<{
  overlay: ReactElement;
  placement?: Placement;
  trigger?: "hover" | "click";
}>) {
  const [show, setShow] = useState(false);
  const timerRef = useRef(0);
  const subMenuRef = useRef<HTMLDivElement>(null);

  const showSubMenu = useCallback(() => {
    if (!subMenuRef.current) return;
    subMenuRef.current.removeAttribute("style");
    const currentStyle = getComputedStyle(subMenuRef.current);
    subMenuRef.current.animate(
      [
        {
          height: `0px`,
          padding: "0 0",
          opacity: 0,
          transform: "scale(0.5)",
        },
        {
          height: currentStyle.height,
          padding: currentStyle.padding,
          opacity: 1,
          transform: "scale(1)",
        },
      ],
      {
        duration: animationDuration,
      }
    );
  }, []);

  const hideSubMenu = useCallback(() => {
    if (!subMenuRef.current) return;
    const currentStyle = getComputedStyle(subMenuRef.current);
    subMenuRef.current
      .animate(
        [
          {
            height: currentStyle.height,
            padding: currentStyle.padding,
            opacity: 1,
            transform: "scale(1)",
          },
          {
            height: `0px`,
            padding: "0 0",
            opacity: 0,
            transform: "scale(0.5)",
          },
        ],
        {
          duration: animationDuration,
        }
      )
      .finished.then(() => {
        setShow(false);
      });
  }, []);

  const handleToggle = useCallback((_show: boolean) => {
    if (!_show) {
      return setShow(true);
    }
    return hideSubMenu();
  }, []);

  const handleHover = useCallback((_show: boolean) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setShow(true);
  }, []);

  const handleOut = useCallback((_show: boolean) => {
    timerRef.current = window.setTimeout(() => {
      window.clearTimeout(timerRef.current);
      hideSubMenu();
    }, pointerOutDelay);
  }, []);

  return (
    <div
      className={"dropdown-container"}
      // onPointerLeave={() => handleOut(show)}
      // onPointerEnter={() => handleHover(show)}
      onPointerUp={() => handleToggle(show)}
    >
      {children}
      {show && (
        <DropdownBody
          placement={placement}
          ref={subMenuRef}
          showSubMenu={showSubMenu}
        >
          {overlay}
        </DropdownBody>
      )}
    </div>
  );
}

const DropdownBody = React.memo(
  React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<{
      showSubMenu: () => void;
      placement: Placement;
    }>
  >(({ showSubMenu, children, placement }, ref) => {
    useEffect(() => {
      showSubMenu();
    }, []);

    return (
      <div
        ref={ref}
        className={`dropdown-body placement-${placement}`}
        style={{ display: "none", right: 0 }}
      >
        {children}
      </div>
    );
  })
);
