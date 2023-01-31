import React, { FC } from "react";
import "./index.scss";
import SvgIcon from "@/components/SvgIcon";

interface Props {
  id: number;
  tracks: any[];
  type: string;
}

const TrackList: FC<Props> = (props) => {
  const { id, tracks, type } = props;
  return (
    <div className="TrackList">
      <h1>TrackList</h1>

      <div className="track">
        <img src="" alt="" loading="lazy" />
        <div className="no">
          <button>
            <SvgIcon iconName={"paly"} />
            <span>1</span>
          </button>
        </div>
        <div className="title-and-artist"></div>
        <div className="album"></div>
        <div className="actions"></div>
        <div className="time"></div>
        <div className="count"></div>
      </div>
    </div>
  );
};

export default TrackList;
