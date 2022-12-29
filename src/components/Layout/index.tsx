import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function LayOut() {
  const navigate = useNavigate();

  const goTo = (to: string) => {
    navigate(to);
  };
  return (
    <div className="LayOut">
      <ul>
        <li onClick={() => goTo("home")}>about</li>
        <li onClick={() => goTo("about")}>home</li>
      </ul>
      <Outlet />
    </div>
  );
}

export default LayOut;
