import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";

const TopNav: React.FC = () => {
  const navigate = useNavigate();
  const [inputFocus, setInputFocus] = useState(false);

  const go = (where: "back" | "front") => {
    if (where === "back") navigate(-1);
    else navigate(1);
  };


  return (
    <nav className="top-nav">
      <div className="navigation-buttons">
        <button onClick={() => {go("back");}}>
          <SvgIcon className="svg-icon" iconName="arrow-left-bold" />
        </button>
        <button onClick={() => {go("front");}}>
          <SvgIcon className="svg-icon" iconName="arrow-right-bold" />
        </button>
      </div>
      <ul className="center-part">
        <li>
          <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? "#335eea" : ""
          })}>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="explore" style={({ isActive }) => ({
            color: isActive ? "#335eea" : ""
          })}>
            发现
          </NavLink>
        </li>
        <li>
          <NavLink to="library" style={({ isActive }) => ({
            color: isActive ? "#335eea" : ""
          })}>
            音乐库
          </NavLink>
        </li>
      </ul>
      <div className="right-part">
        <div className="search-part"
             style={{ backgroundColor: inputFocus ? "rgba(189, 207, 255, 0.28)" : "#f5f5f7" }}>
          <SvgIcon iconName="search" className="search-icon"
                   style={{ color: inputFocus ? "#335eea" : "#999" }} />
          <input type="search" placeholder="搜索~" onFocus={() => {
            setInputFocus(true);
          }} onBlur={() => {
            setInputFocus(false);
          }} />
        </div>
        <div className="login">
          <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60"
               loading="lazy" className="avatar" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
