import React from "react";
import { fetchName, increment, updateAge } from "@/store/counterSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store";

const Library = () => {

  const { value, age } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="Player">
      <h1>{value}</h1>
      <h1>{age}</h1>
      <button onClick={() => {
        dispatch(increment());
        dispatch(updateAge(15));
      }
      }>ok
      </button>
      <h1>1</h1>
      <button onClick={() => {
        dispatch(fetchName());
      }}>
        获取
      </button>
    </div>
  );
};

export default Library;
