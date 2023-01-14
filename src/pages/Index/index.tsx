import React from "react";
import "./index.scss";
import BoxList from "@/components/BoxList";

const Index = () => {
  return (
    <div className="index">
      <div className="title">
        <h1>推荐歌单</h1>
        <span>
          <a href="#">查看全部</a>
        </span>
      </div>
      <BoxList />
    </div>
  );
};

export default Index;
