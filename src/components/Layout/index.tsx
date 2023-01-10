import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import TopBar from "@/components/TopBar";
import Player from "@/components/Player";

const LayOut: FC = () => {

  return (
    <div className="LayOutWrapper">
      <TopBar />
      <Outlet />
      <div className="PlayerWrapper">
        <Player />
      </div>
    </div>
  );
};

export default LayOut;
