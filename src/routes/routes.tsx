import React from "react";

import Home from "@/pages/Home";
import About from "@/pages/About";
import { RouteObject, useRoutes } from "react-router-dom";
import NotFound from "@/pages/NotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
