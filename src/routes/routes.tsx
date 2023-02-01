import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import NotFound from "@/pages/NotFound";
import Library from "@/pages/Library";
import Explore from "@/pages/Explore";
import Index from "@/pages/Index";
import Album from "@/pages/Album";
import Artist from "@/pages/Artist";
import Playlist from "@/pages/Playlist";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/explore", element: <Explore /> },
      { path: "/library", element: <Library /> },
      { path: "/album/:id", element: <Album /> },
      { path: "/artist/:id", element: <Artist /> },
      { path: "/playlist/:id", element: <Playlist /> }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
