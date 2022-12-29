import React, { PureComponent } from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>index</h1>
      <Outlet />
    </div>
  );
}

export default Home;
