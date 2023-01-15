import React, { FC, useState } from "react";
import SvgIcon from "@/components/SvgIcon";
import Transition from "@/components/Transition";
import "./index.scss";

interface Props {
  id: number;
  picUrl: string;
}

const Cover: FC<Props> = ({ id, picUrl }) => {
    const [showId, setShowId] = useState(0);
    const [show, setShow] = useState(true);
    const showShade = (mes: boolean) => {
      setShow(mes);
    };

    const shadowStyles = (picUrl: string) => {
      return { backgroundImage: `url(${picUrl}?param=512y512)` };
    };

    return (
      <div className="cover"
           onMouseLeave={() => {
             showShade(false);
             setShowId(0);
           }}
           onMouseEnter={() => {
             showShade(true);
             setShowId(id);
           }}>
        <div className="cover-container">
          {(show && showId === id) ?
            (<div className="shade">
              <button className="play-button">
                <SvgIcon iconName="bofang" className="svg-play" />
              </button>
            </div>) : null}
          <img
            src={`${picUrl}?param=512y512`}
            loading="lazy"
            alt="" />
          <Transition visible={showId === id && show} className="fade"
          >
            {
              showId === id && show ? (<div className="shadow" style={shadowStyles(picUrl)}>
              </div>) : (<div></div>)
            }
          </Transition>
        </div>
      </div>
    );
  }
;

export default Cover;
