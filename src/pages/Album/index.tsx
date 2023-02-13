import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { getAlbumDetailRequest } from "@/services";
import Cover from "@/components/Cover";
import { formatTime } from "@/utils/time";
import Button from "@/components/Button";
import SvgIcon from "@/components/SvgIcon";
import TrackList from "@/components/TrackList";

const Album = () => {
  const params = useParams<{ id: string }>();
  const [albumData, setAlbumData] = useState<any>({});

  useEffect(() => {
    const getAlbumDetail = () => {
      getAlbumDetailRequest({ id: Number(params.id) })
        .then((result: any) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          let res: any = {};
          res = {
            type: result.album.type,
            id: result.album.id,
            album: {
              name: result.album.name,
              picUrl: result.album.picUrl,
              description: result.album.description,
              subtitle: result.album.subtitle,
              publishTime: result.album.publishTime
            },
            artist: {
              id: result.album.artist.id,
              name: result.album.artist.name
            },
            tracks: result.songs
          };
          console.log("res::", res);
          setAlbumData(res);
        })
        .catch((err: any) => {
          return err;
        });
    };

    getAlbumDetail();
  }, [params.id]);

  const albumTime = () => {
    let time = 0;
    albumData.tracks?.map((t: { dt: number }) => (time = time + t.dt));
    return time;
  };

  return (
    <div className="Album">
      <div className="playlist-info">
        <Cover id={albumData.id} picUrl={albumData?.album?.picUrl} type={"cover"} />
        <div className="info">
          <div className="title">{albumData?.album?.name}</div>
          {albumData?.album?.subtitle ? (
            <div className="subtitle">{albumData?.album?.subtitle}</div>
          ) : null}
          <div className="artist">
            <span>{albumData.type} by </span>
            <span>{albumData?.artist?.name}</span>
          </div>
          <div className="date-and-count">
            {albumData?.album?.publishTime
              ? new Date(albumData.album.publishTime).getFullYear()
              : null}
            <span> · {3}首哥</span>,<span>{formatTime(albumTime(), "ZH")}</span>
          </div>
          <div className="description">{albumData?.album?.description}</div>
          <div className="buttons">
            <Button shape={"square"}>
              <SvgIcon iconName="play" style={{ paddingRight: "6px" }} />
              播放
            </Button>
            <Button shape={"square"}>
              <SvgIcon iconName="heart"></SvgIcon>
            </Button>
            <Button shape={"square"}>···</Button>
          </div>
        </div>
      </div>
      <TrackList id={albumData.id} tracks={albumData.tracks} type={"ablum"} />
    </div>
  );
};

export default Album;
