/// <reference types="vite/client" />
import * as React from "react";

declare var tw: any;

declare module "*.md";
declare module "*.raw";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "y-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
