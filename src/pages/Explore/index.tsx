import React from "react";
import "./index.scss";
import { playlistCategories } from "@/utils";

const allBigCats = ["语种", "风格", "场景", "情感", "主题"];

const Explore = () => {
  return (
    <div className="explore">
      <h1>发现</h1>
      <section>
        <div className="buttons">
          {playlistCategories.map((item, index) => {
            return (<div key={index} className="button">{item.name}</div>);
          })}
          <div className="button">...</div>
        </div>
      </section>

    </div>
  );
};

export default Explore;
