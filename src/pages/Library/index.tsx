import React from "react";
import { fetchName, increment, updateAge } from "@/store/counterSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import Button from "@/components/Button";
import SvgIcon from "@/components/SvgIcon";
import "./index.scss";

const Library = () => {
  const { value, age } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  const ok = () => {
    console.log("ok");
  };

  return (
    <div className="Player">
      <h1>{value}</h1>
      <h1>{age}</h1>
      <button
        onClick={() => {
          dispatch(increment());
          dispatch(updateAge(15));
        }}
      >
        ok
      </button>
      <h1>1</h1>
      <button
        onClick={() => {
          dispatch(fetchName());
        }}
      >
        获取
      </button>

      <Button onClick={ok} shape="square">
        <span>你好</span>
        <SvgIcon className="svg-icon" iconName="github" />
      </Button>
    </div>
  );
};

export default Library;
