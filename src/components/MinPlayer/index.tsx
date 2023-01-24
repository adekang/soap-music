import React from "react";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";

const MinPlayer = () => {
  return (
    <div className="MinPlayer">
      <div className="left-part">

        <button>
          <SvgIcon iconName="like" />
        </button>
      </div>
      <div className="center-part">
        <SvgIcon iconName="bofang" />
        <SvgIcon iconName="kuaijin" />

      </div>
      <div className="right-part">
        <SvgIcon iconName="gedan" />
        <SvgIcon iconName="suijibofang" />
        <SvgIcon iconName="xunhuanbofang" />
      </div>
    </div>
  );
};

export default MinPlayer;
