import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { getAlbumDetailRequest } from "@/services";
import Cover from "@/components/Cover";
import { formatTime } from "@/utils/time";
import Button from "@/components/Button";
import SvgIcon from "@/components/SvgIcon";
import TrackList from "@/components/TrackList";

const result: any = {
  album: {
    "songs": [],
    "paid": false,
    "onSale": false,
    "mark": 8192,
    "awardTags": null,
    "companyId": 0,
    "blurPicUrl": "https://p1.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
    "alias": [],
    "artists": [
      {
        "img1v1Id": 18686200114669624,
        "topicPerson": 0,
        "alias": [],
        "picId": 0,
        "musicSize": 0,
        "albumSize": 0,
        "briefDesc": "",
        "picUrl": "https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
        "img1v1Url": "https://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",
        "followed": false,
        "trans": "",
        "name": "DISH//",
        "id": 768193,
        "img1v1Id_str": "18686200114669622"
      }
    ],
    "copyrightId": 2706476,
    "picId": 109951168198570580,
    "artist": {
      "img1v1Id": 109951165690717150,
      "topicPerson": 0,
      "alias": [
        "ディッシュ"
      ],
      "picId": 109951165690710350,
      "musicSize": 251,
      "albumSize": 74,
      "briefDesc": "",
      "picUrl": "https://p1.music.126.net/dQwmERok4VyVwsX4YubOIw==/109951165690710346.jpg",
      "img1v1Url": "https://p1.music.126.net/XTISDYD4YTGh7L-x_HoKqg==/109951165690717156.jpg",
      "followed": false,
      "trans": "",
      "name": "DISH//",
      "id": 768193,
      "picId_str": "109951165690710346",
      "img1v1Id_str": "109951165690717156"
    },
    "briefDesc": "",
    "publishTime": 1675180800000,
    "company": "索尼音乐",
    "picUrl": "https://p1.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
    "commentThreadId": "R_AL_3_157467863",
    "pic": 109951168198570580,
    "description": "12月迎来结成11周年，气势高涨的DISH//的第5张专辑！收录了人气电视剧主题曲3首、北村出演的广告歌曲等话题歌曲丰富的12首歌曲。\n",
    "tags": "",
    "status": 1,
    "subType": "录音室版",
    "name": "TRIANGLE",
    "id": 157467863,
    "type": "专辑",
    "size": 12,
    "picId_str": "109951168198570583",
    "info": {
      "commentThread": {
        "id": "R_AL_3_157467863",
        "resourceInfo": {
          "id": 157467863,
          "userId": -1,
          "name": "TRIANGLE",
          "imgUrl": "http://p1.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
          "creator": null,
          "encodedId": null,
          "subTitle": null,
          "webUrl": null
        },
        "resourceType": 3,
        "commentCount": 7,
        "likedCount": 0,
        "shareCount": 2,
        "hotCount": 0,
        "latestLikedUsers": null,
        "resourceOwnerId": -1,
        "resourceTitle": "TRIANGLE",
        "resourceId": 157467863
      },
      "latestLikedUsers": null,
      "liked": false,
      "comments": null,
      "resourceType": 3,
      "resourceId": 157467863,
      "commentCount": 7,
      "likedCount": 0,
      "shareCount": 2,
      "threadId": "R_AL_3_157467863"
    }
  },
  songs: [
    {
      "rtUrls": [],
      "ar": [
        {
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p2.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 232960,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 1,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9318444,
        "vd": -72116,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3727404,
        "vd": -68448,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5591084,
        "vd": -69762,
        "sr": 44100
      },
      "name": "No.1",
      "id": 2010946330,
      "privilege": {
        "id": 2010946330,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p2.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
      },
      "st": 1,
      "noCopyrightRcmd": null,
      "songJumpInfo": null,
      "rtype": 0,
      "rurl": null,
      "pst": 0,
      "alia": [
        "日剧《乘上独角兽》主题曲"
      ],
      "pop": 5,
      "rt": "",
      "mst": 9,
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 236225,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 2,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9450101,
        "vd": -58343,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3780066,
        "vd": -54342,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5670078,
        "vd": -55908,
        "sr": 44100
      },
      "name": "しわくちゃな雲を抱いて",
      "id": 2010946799,
      "privilege": {
        "id": 2010946799,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p2.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 235023,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 3,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9402036,
        "vd": -61648,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3760840,
        "vd": -57522,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5641239,
        "vd": -59153,
        "sr": 44100
      },
      "name": "スパゲッティ",
      "id": 2010946331,
      "privilege": {
        "id": 2010946331,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p2.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 238759,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 4,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9551456,
        "vd": -64605,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3820608,
        "vd": -60774,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5730891,
        "vd": -62245,
        "sr": 44100
      },
      "name": "万々歳",
      "id": 2010946332,
      "privilege": {
        "id": 2010946332,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p2.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 261773,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 5,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10472011,
        "vd": -71949,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4188831,
        "vd": -67771,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6283224,
        "vd": -69389,
        "sr": 44100
      },
      "name": "マチネソワレ",
      "id": 2010946333,
      "privilege": {
        "id": 2010946333,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p2.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 207830,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 6,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8314297,
        "vd": -61601,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3325745,
        "vd": -57413,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4988595,
        "vd": -59094,
        "sr": 44100
      },
      "name": "Brand new day",
      "id": 2010946800,
      "privilege": {
        "id": 2010946800,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p2.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 228493,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 7,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9140811,
        "vd": -47321,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3656351,
        "vd": -43348,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5484504,
        "vd": -44894,
        "sr": 44100
      },
      "name": "Replay",
      "id": 2010946801,
      "privilege": {
        "id": 2010946801,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p1.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
      },
      "st": 1,
      "noCopyrightRcmd": null,
      "songJumpInfo": null,
      "rtype": 0,
      "rurl": null,
      "pst": 0,
      "alia": [
        "日剧《旅行护士》主题曲"
      ],
      "pop": 5,
      "rt": "",
      "mst": 9,
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 261590,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 8,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10463652,
        "vd": -61280,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4185487,
        "vd": -57079,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6278209,
        "vd": -58738,
        "sr": 44100
      },
      "name": "五明後日",
      "id": 2010946802,
      "privilege": {
        "id": 2010946802,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p2.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 181498,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 9,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7259995,
        "vd": -72275,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2904024,
        "vd": -68181,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4356014,
        "vd": -69772,
        "sr": 44100
      },
      "name": "ブラックコーヒー",
      "id": 2010946334,
      "privilege": {
        "id": 2010946334,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p1.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 152267,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 10,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6090754,
        "vd": -77070,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2436328,
        "vd": -73515,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 3654470,
        "vd": -74843,
        "sr": 44100
      },
      "name": "FLY",
      "id": 2010946335,
      "privilege": {
        "id": 2010946335,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p1.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
      },
      "st": 1,
      "noCopyrightRcmd": null,
      "songJumpInfo": null,
      "rtype": 0,
      "rurl": null,
      "pst": 0,
      "alia": [
        "日剧《二月的胜者-绝对合格的教室-》主题曲"
      ],
      "pop": 5,
      "rt": "",
      "mst": 9,
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 232333,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 11,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9293366,
        "vd": -64364,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3717373,
        "vd": -60226,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5576037,
        "vd": -61813,
        "sr": 44100
      },
      "name": "沈丁花",
      "id": 2010946336,
      "privilege": {
        "id": 2010946336,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
          "id": 768193,
          "name": "DISH//",
          "alia": [
            "ディッシュ"
          ]
        }
      ],
      "al": {
        "id": 157467863,
        "name": "TRIANGLE",
        "picUrl": "https://p1.music.126.net/2fP-eI6jdfx3vdT3d3QOBA==/109951168198570583.jpg",
        "pic_str": "109951168198570583",
        "pic": 109951168198570580
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
      "cp": 2706476,
      "crbt": null,
      "cf": "",
      "dt": 215771,
      "rtUrl": null,
      "ftype": 0,
      "djId": 0,
      "no": 12,
      "fee": 8,
      "mv": 0,
      "t": 0,
      "v": 3,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8630901,
        "vd": -61880,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3452386,
        "vd": -57726,
        "sr": 44100
      },
      "sq": null,
      "hr": null,
      "cd": "01",
      "a": null,
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5178558,
        "vd": -59495,
        "sr": 44100
      },
      "name": "真っ白",
      "id": 2010946337,
      "privilege": {
        "id": 2010946337,
        "fee": 8,
        "payed": 0,
        "st": 0,
        "pl": 128000,
        "dl": 0,
        "sp": 7,
        "cp": 1,
        "subp": 1,
        "cs": false,
        "maxbr": 320000,
        "fl": 128000,
        "toast": false,
        "flag": 4,
        "preSell": false,
        "playMaxbr": 320000,
        "downloadMaxbr": 320000,
        "maxBrLevel": "exhigh",
        "playMaxBrLevel": "exhigh",
        "downloadMaxBrLevel": "exhigh",
        "plLevel": "standard",
        "dlLevel": "none",
        "flLevel": "standard",
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
            "chargeType": 1
          },
          {
            "rate": 320000,
            "chargeUrl": null,
            "chargeMessage": null,
            "chargeType": 1
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
  const [albumData, setAlbumData] = useState<any>({});
  const [songs, setSongs] = useState({});

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

        setSongs(result.songs);
      })
      .catch((err: any) => {
        return err;
      });
  };

  useEffect(() => {
    getAlbumDetail();

  }, []);

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
              <SvgIcon iconName="play" style={{ paddingRight: "6px" }} />播放
            </Button>
            <Button shape={"square"}>
              <SvgIcon iconName="heart"></SvgIcon>
            </Button>
            <Button shape={"square"}>
              ···
            </Button>
          </div>
        </div>
      </div>
      <TrackList id={albumData.id} tracks={albumData.tracks} type={"ablum"} />

    </div>
  );
};

export default Album;
