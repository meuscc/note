import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter(
  [
    {
      path: "/",
      element: <div></div>,
    },
  ],
  {
    // basename: "/editor.html",
  }
);

export default function Router() {
  return <RouterProvider router={router} />;
}
