import React from "react";

import Home from "@/pages/Home";
import About from "@/pages/About";
import { RouteObject } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Layout from "@/components/Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/home",
        element: <Home />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
];

export default routes;
