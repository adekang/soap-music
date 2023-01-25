import React, { useState } from "react";
import "./index.scss";
import { playlistCategories } from "@/utils";
import { RootState, useAppDispatch, useAppSelector } from "@/store";
import { addDataToCategory, Category } from "@/store/categoriesSlice";

const allBigCats = ["语种", "风格", "场景", "情感", "主题"];

const Explore = () => {
  const dispatch = useAppDispatch();

  const [showCatOption, setShowCatOption] = useState(false);
  const [activeCategory, setActiveCategory] = useState("全部");
  const { enabledPlaylistCategories } = useAppSelector((state: RootState) => state.categories);

  const changeCategory = (data: Category) => {
    dispatch(addDataToCategory(data));
  };

  console.log(enabledPlaylistCategories);

  return (
    <div className="explore">
      <h1>发现</h1>
      <section>
        <div className="buttons">
          {enabledPlaylistCategories.map((item, index) => {
            return (<div key={item.name}
                         className={`button ${item.name === activeCategory ? "active" : ""}`}
                         onClick={(e: any) => {
                           console.log(e.target.innerText);
                           setActiveCategory(e.target.innerText);
                         }}>{item.name}</div>);
          })}
          <div className="button" onClick={() => {
            setShowCatOption(!showCatOption);
          }}>...
          </div>
        </div>
        {
          showCatOption ? (
            <div className="panel">
              {allBigCats.map((item, index) => {
                return (
                  <div key={index} className="big-cat">
                    <div className="name">{item}</div>
                    <div className="cats">
                      {playlistCategories.filter(c => c.bigCat === item).map((category, index) => {
                        console.log(category);
                        return (
                          <div key={category.name}
                               className={`cat ${enabledPlaylistCategories.findIndex((c: Category) => c.name === category.name) != -1 ? "active" : ""} `}
                               onClick={() => {
                                 changeCategory(category);
                               }}><span>{category.name}</span></div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null
        }
      </section>

    </div>
  );
};

export default Explore;
