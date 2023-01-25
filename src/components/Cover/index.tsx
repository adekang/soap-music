import React, { FC, useRef, useState } from "react";
import SvgIcon from "@/components/SvgIcon";
import "./index.scss";
import LuTransition from "@/components/Transition";

interface Props {
  id: number;
  picUrl: string;
  type: "cover" | "singer";
}

const Cover: FC<Props> = ({ id, picUrl, type = "cover" }) => {
  const [showId, setShowId] = useState(0);
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  const showShade = (mes: boolean) => {
    setShow(mes);
  };


  const shadowStyles = (picUrl: string) => {
    return {
      backgroundImage: `url(${picUrl}?param=512y512)`,
      borderRadius: `${type == "singer" ? "50%" : null}`
    };
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
            style={
              { borderRadius: `${type == "singer" ? "50%" : null}` }
            }
            loading="lazy"
            alt="" />
          <LuTransition nodeRef={ref} visible={showId === id && show} className="fade">
            <div ref={ref} className="shadow" style={shadowStyles(picUrl)}>
            </div>
          </LuTransition>
        </div>
      </div>
    );
  }
;

export default Cover;
