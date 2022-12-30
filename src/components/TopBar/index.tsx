import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";

const TopBar = () => {

  const navigate = useNavigate();

  const goTo = (to: string) => {
    navigate(to);
  };

  return (
    <div className="top-bar">
      <div className="navigation-buttons">
        <button>
          <SvgIcon iconName="arrow-left-bold" fontSize="18px" />
        </button>
        <button>
          <SvgIcon iconName="arrow-right-bold" fontSize="18px" />
        </button>
      </div>
      <ul className="center-part">
        <li onClick={() => goTo("home")}>首页</li>
        <li onClick={() => goTo("about")}>发现</li>
        <li onClick={() => goTo("about")}>音乐库</li>
      </ul>
      <div className="right-part">
        <input type="text" />
        <button>登录</button>
      </div>
    </div>
  );
};

export default TopBar;
