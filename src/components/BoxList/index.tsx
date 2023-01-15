import React, { FC } from "react";
import "./index.scss";
import Cover from "@/components/Cover";

const res: {
  id: number;
  name: string;
  picUrl: string;
  info?: string;
}[] = [{
  "id": 2796338476,
  "name": "别整太大鸭力，要多鸡立自己",
  "picUrl": "https://p2.music.126.net/BYUIoXcdJEEBkwQwUl43-Q==/109951164137325416.jpg",
  "info": "别整太大鸭力"
}, {
  "id": 318112231,
  "name": "【妖气弥漫】那些妖异的古风歌曲",
  "picUrl": "https://p2.music.126.net/JZguHNVDUvmo0rjhQVYjiA==/3405187517388215.jpg"
}, {
  "id": 2670054457,
  "name": "想和你躺在草坪上，慵懒地晒着太阳☀",
  "picUrl": "https://p2.music.126.net/-AT1GZSL8saI1Dsa88YkQg==/109951163865720551.jpg"
}, {
  "id": 2247986522,
  "name": "纯音 | 缓解压力.安眠.去享受孤独",
  "picUrl": "https://p2.music.126.net/i12pbDR7xexdUnLSFBBhRQ==/109951168012472581.jpg"
}, {
  "id": 701569273,
  "name": "麻麻，我想跟他们合唱！| 我想和你唱特辑",
  "picUrl": "https://p2.music.126.net/qW_tkvmFJCOfFJuEgWsYyA==/109951162992442802.jpg"
}, {
  "id": 156934569,
  "name": "这些充满『强烈画面感』的音乐",
  "picUrl": "https://p2.music.126.net/uXbDB1aWsp36_I_lQs-DeA==/1411772930113118.jpg"
}, {
  "id": 2195404116,
  "name": "[纯音乐]错落一身宁静，深海浮沉摘星",
  "picUrl": "https://p2.music.126.net/Fg_8XLbz9uwJvHVLXhz5Cg==/109951163349262839.jpg"
}, {
  "id": 893153237,
  "name": "粤语男声：我爱你依旧如初不曾改变",
  "picUrl": "https://p2.music.126.net/Xd6h-xOoPj2yTUuQXOhyCQ==/18612532836990988.jpg"
}, {
  "id": 123816281,
  "name": "「欧美Live」惊艳现场版，嗨到停不下来!",
  "picUrl": "https://p2.music.126.net/ZtQOTgvhqrcWYapiPj9NWQ==/19018252626210242.jpg"
}, {
  "id": 2235097256,
  "name": "〖纯音乐〗轻旋淡律，也可以抓住你的耳朵",
  "picUrl": "https://p2.music.126.net/7yf2kfPh7wlMGC-d-3AEsw==/109951163309396149.jpg"
}];

const BoxList: FC = () => {


    return (
      <div className="box-container">
        {
          res.map((item) => {
              return (
                <div className="box-item" key={item.id}>
                  <Cover id={item.id} picUrl={item.picUrl} />
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
          )
        }
      </div>
    );
  }
;

export default BoxList;
