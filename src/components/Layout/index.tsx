import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import TopNav from "@/components/TopNav";
import Player from "@/components/Player";

const LayOut: FC = () => {

  return (
    <div className="LayOutWrapper">
      <TopNav />
      <Outlet />
      <div className="PlayerWrapper">
        <Player />
      </div>
    </div>
  );
};

export default LayOut;
