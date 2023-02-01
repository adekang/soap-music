import React, { useEffect, useState } from "react";
import "./index.scss";
import BoxList, { DataProps } from "@/components/BoxList";
import {
  getHotArtists,
  getNewAlbumRequest,
  getRankListRequest,
  getRecommendList
} from "@/services";

const Index = () => {
  const [recommend, setRecommend] = useState<DataProps[]>([]);
  const [hotArtists, setHotArtists] = useState<DataProps[]>([]);
  const [newestAlbum, setNewestAlbum] = useState<DataProps[]>([]);
  const [rankList, setRankList] = useState<DataProps[]>([]);

  useEffect(() => {
    getRecommendList({ limit: 10 }).then((res: any) => {
      const data = res.result;
      setRecommend(data);
    })
      .catch((err: any) => {
        return err;
      });
    getHotArtists({ offset: 0, limit: 5 }).then((res: any) => {
      const data = res.artists;
      const array: DataProps[] = [];
      data.map((item: DataProps, index: number) => {
        array.push(Object.assign({}, item, { "type": "singer" }));
      });
      setHotArtists(array);
    })
      .catch((err: any) => {
        return err;
      });
    getNewAlbumRequest({ area: "all", limit: 10 }).then((res: any) => {
      const data = res.albums;
      setNewestAlbum(data);
    })
      .catch((err: any) => {
        return err;
      });
    getRankListRequest().then((res: any) => {
      const data = res.list;
      const rank: DataProps[] = [];
      data.map((item: any, index: number) => {
        rank.push(Object.assign({}, item, { "picUrl": item.coverImgUrl }));

      });
      setRankList(rank.slice(0, 5));
    })
      .catch((err: any) => {
        return err;
      });

  }, []);


  return (
    <div className="index">
      <section>
        <div className="index-title">
          <h1>推荐歌单</h1>
          <span>
          <a href="#">查看全部</a>
        </span>
        </div>
        <BoxList data={recommend} type="playlist" />
      </section>

      <section>
        <div className="index-title">
          <h1>推荐艺人</h1>
          <span>
          <a href="#">查看全部</a>
        </span>
        </div>
        <BoxList data={hotArtists} type="artist" />
      </section>
      <section>
        <div className="index-title">
          <h1>新专速递</h1>
          <span>
          <a href="#">查看全部</a>
        </span>
        </div>
        <BoxList data={newestAlbum} type="album" />
      </section>
      <section>
        <div className="index-title">
          <h1>排行榜</h1>
          <span>
          <a href="#">查看全部</a>
        </span>
        </div>
        <BoxList data={rankList} type="playlist" />
      </section>
    </div>
  );
};

export default Index;
