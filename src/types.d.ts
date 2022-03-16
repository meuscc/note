declare module "*.md";

import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "y-sidebar": any;
    }
  }
}
// declare global {
//   interface HTMLElementTagNameMap {
//     "y-sidebar": Sidebar;
//   }
// }

declare global {
  export namespace JSX {
    interface IntrinsicElements {
      "y-sidebar": any;
    }
  }
}
declare namespace JSX {
  interface IntrinsicElements {
    "y-sidebar": any;
  }
}
import * as Solid from "solid-js/web";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "y-sidebar": any;
    }
  }
}
