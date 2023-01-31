import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { getAlbumDetailRequest } from "@/services";
import Cover from "@/components/Cover";
import { formatTime } from "@/utils/time";
import Button from "@/components/Button";
import SvgIcon from "@/components/SvgIcon";

const result: any = {
  album: {
    "songs": [],
    "paid": false,
    "onSale": false,
    "mark": 0,
    "awardTags": null,
    "companyId": 0,
    "blurPicUrl": "https://p2.music.126.net/fjD8l-bXU-LCy9oK9zxFow==/109951168271806233.jpg",
    "alias": [],
    "artists": [
      {
        "img1v1Id": 18686200114669624,
        "topicPerson": 0,
        "followed": false,
        "alias": [],
        "picId": 0,
        "musicSize": 0,
        "albumSize": 0,
        "briefDesc": "",
        "picUrl": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
        "img1v1Url": "https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
        "trans": "",
        "name": "金美辰",
        "id": 12250146,
        "img1v1Id_str": "18686200114669622"
      },
      {
        "img1v1Id": 18686200114669624,
        "topicPerson": 0,
        "followed": false,
        "alias": [],
        "picId": 0,
        "musicSize": 0,
        "albumSize": 0,
        "briefDesc": "",
        "picUrl": "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
        "img1v1Url": "https://p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
        "trans": "",
        "name": "蒙恩",
        "id": 55260422,
        "img1v1Id_str": "18686200114669622"
      }
    ],
    "copyrightId": 1416316,
    "picId": 109951168271806240,
    "artist": {
      "img1v1Id": 109951168107105300,
      "topicPerson": 0,
      "followed": false,
      "alias": [],
      "picId": 109951164343267780,
      "musicSize": 18,
      "albumSize": 14,
      "briefDesc": "",
      "picUrl": "https://p2.music.126.net/6hK7LuMxOWu9IvsdQTmujQ==/109951164343267782.jpg",
      "img1v1Url": "https://p2.music.126.net/Rf2so6gOYOJqnN03JZ6eug==/109951168107105295.jpg",
      "trans": "",
      "name": "金美辰",
      "id": 12250146,
      "picId_str": "109951164343267782",
      "img1v1Id_str": "109951168107105295"
    },
    "publishTime": 1675094400000,
    "company": "自在天浩",
    "briefDesc": "",
    "picUrl": "https://p2.music.126.net/fjD8l-bXU-LCy9oK9zxFow==/109951168271806233.jpg",
    "commentThreadId": "R_AL_3_159122784",
    "pic": 109951168271806240,
    "tags": "",
    "description": "《公子贵姓》是由王启蘅执导，金美辰、蒙恩、等主演，陈名豪特别出演的古装“砂糖”喜剧  。该剧改编自爱奇艺文学倪十一的热门人气小说《醉倒需等君来扶》，讲述了精灵古怪的唐门掌门唐不言携手冷面禁欲的玄奇山掌门李成蹊，共同踏上寻找“命定之人”的爆笑之旅，一路成长收获爱情，联手升级“打怪”的故事。\n     原声带专辑邀请了音乐人逄博制作，孟令楠监制，共收录2首专属定制歌曲。\n主题片头曲《公子你哪位》由片中男女主共同演绎，打怪路上的磕磕绊绊，继续延续到歌曲里的甜甜蜜蜜，二人再次持续给大家疯狂“撒糖”甜进心窝。\n片尾曲《庆幸遇见》由女主金美辰甜蜜献唱，结合剧情歌曲温暖又甜蜜，演唱风格俏皮又可爱，给剧情带来了更多美好的小确幸，大家一起期待起来吧！\n",
    "status": 1,
    "subType": "录音室版",
    "name": "《公子贵姓》影视剧原声带",
    "id": 159122784,
    "type": "EP",
    "size": 4,
    "picId_str": "109951168271806233",
    "info": {
      "commentThread": {
        "id": "R_AL_3_159122784",
        "resourceInfo": null,
        "resourceType": 3,
        "commentCount": 0,
        "likedCount": 0,
        "shareCount": 0,
        "hotCount": 0,
        "latestLikedUsers": null,
        "resourceOwnerId": 0,
        "resourceTitle": null,
        "resourceId": 0
      },
      "latestLikedUsers": null,
      "liked": false,
      "comments": null,
      "resourceType": 3,
      "resourceId": 159122784,
      "commentCount": 0,
      "likedCount": 0,
      "shareCount": 0,
      "threadId": "R_AL_3_159122784"
    }
  },
  songs: [
    {
      "rtUrls": [],
      "ar": [
        {
          "id": 55532436,
          "name": "程晓艺"
        }
      ],
      "al": {
        "id": 159122686,
        "name": "独立游戏 隐秘的角落 片尾曲",
        "picUrl": "https://p2.music.126.net/sO1iiLeq7ApEiXxQSx7Z-Q==/109951168271740899.jpg",
        "pic_str": "109951168271740899",
        "pic": 109951168271740900
      },
      "st": 1,
      "noCopyrightRcmd": null,
      "songJumpInfo": null,
      "rtype": 0,
      "rurl": null,
      "pst": 0,
      "alia": [
        "独立游戏《隐秘的角落》旧梦结局片尾曲"
      ],
      "pop": 5,
      "rt": "",
      "mst": 9,
      "cp": 0,
      "crbt": null,
      "cf": "",
      "dt": 142632,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 1,
      "fee": 0,
      "mv": 0,
      "t": 0,
      "v": 2,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 5707245,
        "vd": -15704,
        "sr": 48000
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2282925,
        "vd": -11327,
        "sr": 48000
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3424365,
        "vd": -13096,
        "sr": 48000
      },
      "name": "回声",
      "id": 2018410083,
      "privilege": {
        "id": 2018410083,
        "fee": 0,
        "payed": 0,
        "st": 0,
        "pl": 320000,
        "dl": 320000,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 320000,
        "toast": false,
        "flag": 1,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "exhigh",
        "dlLevel": "exhigh",
        "flLevel": "exhigh",
        "rscl": null,
        "freeTrialPrivilege": {
          "resConsumable": false,
          "userConsumable": false,
          "listenType": null
        },
        "chargeInfoList": [
          {
            "rate": 128000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 192000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 999000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
          }
        ]
      }
    },
    {
      "rtUrls": [],
      "ar": [
        {
          "id": 55531811,
          "name": "褚敏"
        }
      ],
      "al": {
        "id": 159122686,
        "name": "独立游戏 隐秘的角落 片尾曲",
        "picUrl": "https://p2.music.126.net/sO1iiLeq7ApEiXxQSx7Z-Q==/109951168271740899.jpg",
        "pic_str": "109951168271740899",
        "pic": 109951168271740900
      },
      "st": 1,
      "noCopyrightRcmd": null,
      "songJumpInfo": null,
      "rtype": 0,
      "rurl": null,
      "pst": 0,
      "alia": [
        "独立游戏《隐秘的角落》新生结局片尾曲"
      ],
      "pop": 5,
      "rt": "",
      "mst": 9,
      "cp": 0,
      "crbt": null,
      "cf": "",
      "dt": 96824,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 2,
      "fee": 0,
      "mv": 0,
      "t": 0,
      "v": 2,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 3875565,
        "vd": -9913,
        "sr": 48000
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 1550253,
        "vd": -5491,
        "sr": 48000
      },
      "sq": {
        "br": 640197,
        "fid": 0,
        "size": 7748327,
        "vd": -9827,
        "sr": 48000
      },
      "hr": {
        "br": 1382785,
        "fid": 0,
        "size": 16735898,
        "vd": -9726,
        "sr": 48000
      },
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 2325357,
        "vd": -7280,
        "sr": 48000
      },
      "name": "寓言",
      "id": 2018414709,
      "privilege": {
        "id": 2018414709,
        "fee": 0,
        "payed": 0,
        "st": 0,
        "pl": 320000,
        "dl": 999000,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 999000,
        "fl": 320000,
        "toast": false,
        "flag": 1,
        "preSell": false,
        "playMaxbr": 999000,
        "downloadMaxbr": 999000,
        "maxBrLevel": "hires",
        "playMaxBrLevel": "hires",
        "downloadMaxBrLevel": "hires",
        "plLevel": "exhigh",
        "dlLevel": "hires",
        "flLevel": "exhigh",
        "rscl": null,
        "freeTrialPrivilege": {
          "resConsumable": false,
          "userConsumable": false,
          "listenType": null
        },
        "chargeInfoList": [
          {
            "rate": 128000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 192000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 999000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
          },
          {
            "rate": 1999000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
          }
        ]
      }
    },
    {
      "rtUrls": [],
      "ar": [
        {
          "id": 55531810,
          "name": "Aluba Studio"
        }
      ],
      "al": {
        "id": 159122686,
        "name": "独立游戏 隐秘的角落 片尾曲",
        "picUrl": "https://p1.music.126.net/sO1iiLeq7ApEiXxQSx7Z-Q==/109951168271740899.jpg",
        "pic_str": "109951168271740899",
        "pic": 109951168271740900
      },
      "st": 1,
      "noCopyrightRcmd": null,
      "songJumpInfo": null,
      "rtype": 0,
      "rurl": null,
      "pst": 0,
      "alia": [],
      "pop": 5,
      "rt": "",
      "mst": 9,
      "cp": 0,
      "crbt": null,
      "cf": "",
      "dt": 138024,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 3,
      "fee": 0,
      "mv": 0,
      "t": 0,
      "v": 1,
      "h": {
        "br": 320003,
        "fid": 0,
        "size": 5521965,
        "vd": 115717,
        "sr": 48000
      },
      "l": {
        "br": 128003,
        "fid": 0,
        "size": 2208813,
        "vd": 120071,
        "sr": 48000
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192003,
        "fid": 0,
        "size": 3313197,
        "vd": 118334,
        "sr": 48000
      },
      "name": "独立游戏 隐秘的角落 遗憾结局片尾曲",
      "id": 2018410084,
      "privilege": {
        "id": 2018410084,
        "fee": 0,
        "payed": 0,
        "st": 0,
        "pl": 320000,
        "dl": 320000,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 320000,
        "toast": false,
        "flag": 1,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "exhigh",
        "dlLevel": "exhigh",
        "flLevel": "exhigh",
        "rscl": null,
        "freeTrialPrivilege": {
          "resConsumable": false,
          "userConsumable": false,
          "listenType": null
        },
        "chargeInfoList": [
          {
            "rate": 128000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 192000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 0
          },
          {
            "rate": 999000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
          }
        ]
      }
    }
  ]
};

const Album = () => {
  const params = useParams<{ id: string }>();
  console.log(params);

  const [albumData, setAlbumData] = useState<any>({});
  const [songs, setSongs] = useState({});

  const getAlbumDetail = () => {
    getAlbumDetailRequest({ id: Number(params.id) })
      .then((result: any) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        let res: any = {};
        res = {
          id: result.album.id | 159122686,
          name: result.album.name,
          picUrl: result.album.picUrl,
          type: result.album.type,
          description: result.album.description,
          subtitle: result.album?.subtitle
        };
        console.log(res);
        setAlbumData(res);
        setSongs(result.songs);
      })
      .catch((err: any) => {
        return err;
      });
  };

  useEffect(() => {
    // getAlbumDetail();
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

  }, []);
  console.log(albumData);

  const albumTime = () => {
    let time = 0;
    albumData.tracks?.map((t: { dt: number; }) => (time = time + t.dt));
    return time;
  };

  return (
    <div className="Album">
      <div className="playlist-info">
        <Cover id={albumData.id} picUrl={albumData?.album?.picUrl} type={"cover"} />
        <div className="info">
          <div className="title">{albumData?.album?.name}</div>
          {albumData?.album?.subtitle ? (
            <div className="subtitle">{albumData?.album?.subtitle}</div>) : null}
          <div className="artist">
            <span>{albumData.type} by </span><span>{albumData?.artist?.name}</span>
          </div>
          <div className="date-and-count">
            {albumData?.album?.publishTime ? new Date(albumData.album.publishTime).getFullYear() : null}
            <span> · {3}首哥</span>,<span>{formatTime(albumTime(), "ZH")}</span>
          </div>
          <div className="description">
            {albumData?.album?.description}
          </div>
          <div className="buttons">
            <Button shape={"square"}>
              <SvgIcon iconName="bofang" />播放
            </Button>
            <Button shape={"square"}>
              <SvgIcon iconName="like"></SvgIcon>
            </Button>
            <Button shape={"square"}>
              ···
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
