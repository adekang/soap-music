import React from "react";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";

const MinPlayer = () => {
  return (
    <div className="MinPlayer">
      <div className="left-part">

        <button>
          <SvgIcon iconName="heart" />
        </button>
      </div>
      <div className="center-part">
        <SvgIcon iconName="previous" />
        <SvgIcon iconName="play" />
        <SvgIcon iconName="next" />

      </div>
      <div className="right-part">
        <SvgIcon iconName="list" />
        <SvgIcon iconName="repeat" />
        <SvgIcon iconName="shuffle" />
      </div>
    </div>
  );
};

export default MinPlayer;
