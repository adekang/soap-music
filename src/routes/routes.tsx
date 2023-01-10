import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/home", element: <Home /> }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
