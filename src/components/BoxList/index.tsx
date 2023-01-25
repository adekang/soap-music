import React, { FC } from "react";
import "./index.scss";
import Cover from "@/components/Cover";

export interface DataProps {
  id: number;
  picUrl: string;
  name: string;
  info?: string;
  type: "cover" | "singer";
  coverImgUrl?: string;

}

export interface Props {
  data: DataProps[];
}


const BoxList: FC<Props> = ({ data }) => {

    return (
      <div className="box-container">
        {
          data != undefined ? data.map((item) => {
              return (
                <div className="box-item" key={item.id}>
                  <Cover id={item.id} picUrl={item.picUrl} type={item.type} />
                  <div className="text">
                    <div className="title">
                      {item.name}
                    </div>
                    {item?.info ? (<div className="info">
                      {item.info}
                    </div>) : null}
                  </div>
                </div>
              );
            }
          ) : null
        }
      </div>
    );
  }
;

export default BoxList;
