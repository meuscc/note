import React, { useEffect, useRef, useState } from "react";

export default React.memo(function Transition({
  show,
  children,
  maxHeight,
}: any) {
  const [innerShow, setInnerShow] = useState(false);
  const ref = useRef<any>();

  console.log(maxHeight);

  useEffect(() => {
    if (show) {
      setInnerShow(true);
      setAnimationFrameTimeout(() => {
        if (ref.current) {
          ref.current.style.maxHeight = `${maxHeight}px`;
          ref.current.classList.add("show");
        }
      });
    } else {
      if (ref.current) {
        ref.current.style.maxHeight = 0;
        ref.current.classList.remove("show");
      }
    }
  }, [show]);

  if (!innerShow) {
    return <></>;
  }

  return React.cloneElement(children, {
    ref,
    onTransitionEnd: (e: any) => {
      if (!e.currentTarget.classList.contains("show")) {
        setInnerShow(false);
      }
    },
  });
});

export type Canceller = {
  id?: number;
};

export function setAnimationFrameTimeout(
  callback: () => void,
  timeout: number = 0
) {
  const startTime = performance.now();
  const canceller: Canceller = {};

  function call() {
    canceller.id = requestAnimationFrame((now) => {
      if (now - startTime > timeout) {
        callback();
      } else {
        call();
      }
    });
  }

  call();
  return canceller;
}

export function clearAnimationFrameTimeout(canceller: Canceller) {
  if (canceller.id) cancelAnimationFrame(canceller.id);
}
