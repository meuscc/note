declare module "*.md";

import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "c-b": {
        c: string;
        l: string;
      };
      "y-dropdown": any;
      "y-dropdown-trigger": any;
      "y-dropdown-container": any;
    }
  }
}
