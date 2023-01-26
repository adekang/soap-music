import React from "react";
import './index.scss'
import { useParams } from "react-router-dom";
const Album = () => {
  const params = useParams<{ id: string }>();
  console.log(params);
  return (
    <div className="Album">

    </div>
  );
};

export default Album;
