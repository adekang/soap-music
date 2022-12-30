import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import TopBar from "@/components/TopBar";

const LayOut: FC = () => {

  return (
    <div className="LayOutWrapper">
      <TopBar />
      <Outlet />
    </div>
  );
};

export default LayOut;
