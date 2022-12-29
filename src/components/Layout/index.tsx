import React, { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SvgIcon from "@/components/SvgIcon";

const LayOut: FC = () => {
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

      <div>
        <SvgIcon
          iconClass={"pose"}
          fontSize="18px"
          className="formatSvg player"
        />
      </div>
    </div>
  );
};

export default LayOut;
