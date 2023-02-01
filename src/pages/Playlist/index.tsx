import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import SvgIcon from "@/components/SvgIcon";
import Button from "@/components/Button";
import Cover from "@/components/Cover";
import { getPlaylistDetail } from "@/services";


const Playlist = () => {
  const params = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<any>();

  useEffect(() => {
    getPlaylistDetail(Number(params.id)).then((res: any) => {
      setPlaylist(res.playlist);
    });


  }, []);
  console.log("Playlist::", params);
  return (
    <div className="playlist">
      <div className="playlist-info">
        <Cover id={playlist?.id} picUrl={playlist?.coverImgUrl} type="cover" />
        <div className="info">
          <div className="title">
            <span className="lock-icon">
            <SvgIcon iconName="lock" />
              {playlist?.name}
            </span>
          </div>
          <div className="artist">
            Playlist by {playlist?.creator?.nickname}
          </div>
          <div className="date-and-count">

          </div>
          <div className="description">
            {playlist?.description}
          </div>
          <div className="buttons">
            <Button shape="square">
              <SvgIcon iconName="play" />
            </Button>
            <Button shape="square">
              <SvgIcon iconName="heart" />
            </Button>
            <Button shape="square">
              <SvgIcon iconName="more" />

            </Button>
          </div>
        </div>
      </div>
    </div>
  )
    ;
};

export default Playlist;
