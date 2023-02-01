import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import SvgIcon from "@/components/SvgIcon";
import Button from "@/components/Button";
import Cover from "@/components/Cover";


const res = {
  playlist: {
    "id": 2015397679,
    "name": "适合努力学习英语时听的歌曲",
    "coverImgId": 109951163085080180,
    "coverImgUrl": "https://p1.music.126.net/Ak2mqnmim2sFjxKAYnRb-A==/109951163085080176.jpg",
    "coverImgId_str": "109951163085080176",
    "adType": 0,
    "userId": 74029445,
    "createTime": 1513310850460,
    "status": 0,
    "opRecommend": false,
    "highQuality": false,
    "newImported": false,
    "updateTime": 1578588640103,
    "trackCount": 80,
    "specialType": 0,
    "privacy": 0,
    "trackUpdateTime": 1673509364084,
    "commentThreadId": "A_PL_0_2015397679",
    "playCount": 29520826,
    "trackNumberUpdateTime": 1533741654491,
    "subscribedCount": 560449,
    "cloudTrackCount": 0,
    "ordered": true,
    "description": "这张歌单制作于今年冬季四六级考试的前夕。为了给大家在紧张的学习生活之余放松心情，同时也不至于将英语知识慢慢遗忘，我们准备了这样一张英文歌的歌单，希望这些歌曲为努力学习英语的朋友们带来一份轻松的心情，为准备参加各种英语考试的朋友们带来一份好运，也希望为曾经学习过英语的朋友们带来一份回忆。\n\n这张歌单选择的曲目大都是大家耳熟能详、发音比较标准，同时也比较舒缓的英文歌曲。其中不乏一些歌曲的词作者妙笔生花，写下了诗意翩跹的词句；也有的作曲者谱写出琅琅上口的乐章，已同过去的时光一起，成为了大家成长中的回忆。\n\n封面：Avril Lavigne。\n\n致谢：\n\n感谢道格在歌单走向上的指导。\n\n谢谢各位听众的欣赏，也祝各位参加各类英语考试的朋友们，考试顺利！",
    "tags": [
      "欧美",
      "学习",
      "放松"
    ],
    "updateFrequency": null,
    "backgroundCoverId": 0,
    "backgroundCoverUrl": null,
    "titleImage": 0,
    "titleImageUrl": null,
    "englishTitle": null,
    "officialPlaylistType": null,
    "copied": false,
    "relateResType": null,
    "subscribers": [
      {
        "defaultAvatar": false,
        "province": 140000,
        "authStatus": 0,
        "followed": false,
        "avatarUrl": "http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg",
        "accountStatus": 0,
        "gender": 0,
        "city": 140500,
        "birthday": 0,
        "userId": 3224420726,
        "userType": 0,
        "nickname": "凉城喵喵喵喵",
        "signature": "",
        "description": "",
        "detailDescription": "",
        "avatarImgId": 109951165647004060,
        "backgroundImgId": 109951162868126480,
        "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
        "authority": 0,
        "mutual": false,
        "expertTags": null,
        "experts": null,
        "djStatus": 0,
        "vipType": 0,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": null,
        "avatarImgIdStr": "109951165647004069",
        "backgroundImgIdStr": "109951162868126486",
        "anchor": false,
        "avatarImgId_str": "109951165647004069"
      },
      {
        "defaultAvatar": false,
        "province": 0,
        "authStatus": 0,
        "followed": false,
        "avatarUrl": "http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg",
        "accountStatus": 0,
        "gender": 0,
        "city": 100,
        "birthday": 0,
        "userId": 8072690762,
        "userType": 0,
        "nickname": "韭菜06",
        "signature": "",
        "description": "",
        "detailDescription": "",
        "avatarImgId": 109951165647004060,
        "backgroundImgId": 109951162868126480,
        "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
        "authority": 0,
        "mutual": false,
        "expertTags": null,
        "experts": null,
        "djStatus": 0,
        "vipType": 0,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": null,
        "avatarImgIdStr": "109951165647004069",
        "backgroundImgIdStr": "109951162868126486",
        "anchor": false,
        "avatarImgId_str": "109951165647004069"
      },
      {
        "defaultAvatar": false,
        "province": 320000,
        "authStatus": 0,
        "followed": false,
        "avatarUrl": "http://p1.music.126.net/PCAJ6nlIb5KI2BifrGSU8Q==/109951165624667199.jpg",
        "accountStatus": 0,
        "gender": 2,
        "city": 320100,
        "birthday": 0,
        "userId": 1407878384,
        "userType": 0,
        "nickname": "LILY_PuYL",
        "signature": "",
        "description": "",
        "detailDescription": "",
        "avatarImgId": 109951165624667200,
        "backgroundImgId": 109951164686906720,
        "backgroundUrl": "http://p1.music.126.net/VapDJ7asbELWopagO0QT6g==/109951164686906721.jpg",
        "authority": 0,
        "mutual": false,
        "expertTags": null,
        "experts": null,
        "djStatus": 0,
        "vipType": 0,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": null,
        "avatarImgIdStr": "109951165624667199",
        "backgroundImgIdStr": "109951164686906721",
        "anchor": false,
        "avatarImgId_str": "109951165624667199"
      },
      {
        "defaultAvatar": false,
        "province": 430000,
        "authStatus": 0,
        "followed": false,
        "avatarUrl": "http://p1.music.126.net/QdxkgSKqJmUkhZXau1wTHQ==/109951164739436831.jpg",
        "accountStatus": 0,
        "gender": 1,
        "city": 430100,
        "birthday": 0,
        "userId": 1435798833,
        "userType": 0,
        "nickname": "呜嘟噜嘟",
        "signature": "",
        "description": "",
        "detailDescription": "",
        "avatarImgId": 109951164739436830,
        "backgroundImgId": 109951162868126480,
        "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
        "authority": 0,
        "mutual": false,
        "expertTags": null,
        "experts": null,
        "djStatus": 0,
        "vipType": 11,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": null,
        "avatarImgIdStr": "109951164739436831",
        "backgroundImgIdStr": "109951162868126486",
        "anchor": false,
        "avatarImgId_str": "109951164739436831"
      },
      {
        "defaultAvatar": false,
        "province": 410000,
        "authStatus": 0,
        "followed": false,
        "avatarUrl": "http://p1.music.126.net/8l9HFBs-EUWaHTOAGP_5kw==/109951167791153870.jpg",
        "accountStatus": 0,
        "gender": 1,
        "city": 410500,
        "birthday": 0,
        "userId": 1638404385,
        "userType": 0,
        "nickname": "ashkliyrzxbn",
        "signature": "",
        "description": "",
        "detailDescription": "",
        "avatarImgId": 109951167791153870,
        "backgroundImgId": 109951166289301340,
        "backgroundUrl": "http://p1.music.126.net/0kA1CU6eO1OVH1AO9-H_2g==/109951166289301343.jpg",
        "authority": 0,
        "mutual": false,
        "expertTags": null,
        "experts": null,
        "djStatus": 0,
        "vipType": 10,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": null,
        "avatarImgIdStr": "109951167791153870",
        "backgroundImgIdStr": "109951166289301343",
        "anchor": false,
        "avatarImgId_str": "109951167791153870"
      },
      {
        "defaultAvatar": false,
        "province": 230000,
        "authStatus": 0,
        "followed": false,
        "avatarUrl": "http://p1.music.126.net/hs5KNmiNe6sMjvG0HI-WKA==/109951166591177651.jpg",
        "accountStatus": 0,
        "gender": 2,
        "city": 230100,
        "birthday": 0,
        "userId": 377076563,
        "userType": 207,
        "nickname": "网易不知名仙女-",
        "signature": "废物仙女修炼日记",
        "description": "",
        "detailDescription": "",
        "avatarImgId": 109951166591177650,
        "backgroundImgId": 109951166543697280,
        "backgroundUrl": "http://p1.music.126.net/CyBS6wiC0KqQ-rSktOCaMQ==/109951166543697287.jpg",
        "authority": 0,
        "mutual": false,
        "expertTags": null,
        "experts": null,
        "djStatus": 10,
        "vipType": 11,
        "remarkName": null,
        "authenticationTypes": 528384,
        "avatarDetail": {
          "userType": 207,
          "identityLevel": 1,
          "identityIconUrl": "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340149/f4bf/64a1/1ea2/31a08617d7dfddb21fffdb92390ce268.png"
        },
        "avatarImgIdStr": "109951166591177651",
        "backgroundImgIdStr": "109951166543697287",
        "anchor": true,
        "avatarImgId_str": "109951166591177651"
      },
      {
        "defaultAvatar": false,
        "province": 460000,
        "authStatus": 0,
        "followed": false,
        "avatarUrl": "http://p1.music.126.net/SUeqMM8HOIpHv9Nhl9qt9w==/109951165647004069.jpg",
        "accountStatus": 0,
        "gender": 0,
        "city": 460100,
        "birthday": 0,
        "userId": 5000931567,
        "userType": 0,
        "nickname": "baguaxianren",
        "signature": "",
        "description": "",
        "detailDescription": "",
        "avatarImgId": 109951165647004060,
        "backgroundImgId": 109951162868126480,
        "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
        "authority": 0,
        "mutual": false,
        "expertTags": null,
        "experts": null,
        "djStatus": 0,
        "vipType": 11,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": null,
        "avatarImgIdStr": "109951165647004069",
        "backgroundImgIdStr": "109951162868126486",
        "anchor": false,
        "avatarImgId_str": "109951165647004069"
      },
      {
        "defaultAvatar": false,
        "province": 440000,
        "authStatus": 0,
        "followed": false,
        "avatarUrl": "http://p1.music.126.net/1iYJOe6mM76ezPiKRrdnrA==/109951168265014412.jpg",
        "accountStatus": 0,
        "gender": 2,
        "city": 441500,
        "birthday": 0,
        "userId": 297046011,
        "userType": 0,
        "nickname": "花夜w",
        "signature": "qwq",
        "description": "",
        "detailDescription": "",
        "avatarImgId": 109951168265014420,
        "backgroundImgId": 109951168074784300,
        "backgroundUrl": "http://p1.music.126.net/YwYvZq4Ma4ylqJTfdkUGIA==/109951168074784304.jpg",
        "authority": 0,
        "mutual": false,
        "expertTags": null,
        "experts": null,
        "djStatus": 10,
        "vipType": 0,
        "remarkName": null,
        "authenticationTypes": 0,
        "avatarDetail": null,
        "avatarImgIdStr": "109951168265014412",
        "backgroundImgIdStr": "109951168074784304",
        "anchor": false,
        "avatarImgId_str": "109951168265014412"
      }
    ],
    "subscribed": false,
    "creator": {
      "defaultAvatar": false,
      "province": 350000,
      "authStatus": 0,
      "followed": false,
      "avatarUrl": "http://p1.music.126.net/N3hK9zXfDdT9OGv6Goz0Tw==/109951164541822889.jpg",
      "accountStatus": 0,
      "gender": 0,
      "city": 350100,
      "birthday": 0,
      "userId": 74029445,
      "userType": 207,
      "nickname": "xept",
      "signature": "谢谢欣赏。\nosu:xept",
      "description": "",
      "detailDescription": "",
      "avatarImgId": 109951164541822900,
      "backgroundImgId": 109951167332223140,
      "backgroundUrl": "http://p1.music.126.net/6l5oaI437st4QfPJUPH-jw==/109951167332223135.jpg",
      "authority": 0,
      "mutual": false,
      "expertTags": [
        "日语",
        "轻音乐",
        "欧美"
      ],
      "experts": null,
      "djStatus": 10,
      "vipType": 11,
      "remarkName": null,
      "authenticationTypes": 524352,
      "avatarDetail": {
        "userType": 207,
        "identityLevel": 4,
        "identityIconUrl": "https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340194/0903/b735/7c7a/0dddcdf78047d397d24125840e54ab5b.png"
      },
      "avatarImgIdStr": "109951164541822889",
      "backgroundImgIdStr": "109951167332223135",
      "anchor": false,
      "avatarImgId_str": "109951164541822889"
    },
    "tracks": [
      {
        "name": "Anything but Ordinary",
        "id": 16431886,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 46490,
            "name": "Avril Lavigne",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 90,
        "st": 0,
        "rt": "600902000002810627",
        "fee": 1,
        "v": 31,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1515088,
          "name": "Let Go",
          "picUrl": "http://p3.music.126.net/rNWoK0vpHAW1H9kTFKRVig==/109951167596882130.jpg",
          "tns": [],
          "pic_str": "109951167596882130",
          "pic": 109951167596882130
        },
        "dt": 251000,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 10063590,
          "vd": -54581
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 6038225,
          "vd": -54581
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 4025542,
          "vd": -54581
        },
        "sq": null,
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 8,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 31,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7001,
        "mv": 14409028,
        "publishTime": 1023120000000
      },
      {
        "name": "Seasons in the Sun",
        "id": 20707571,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 45839,
            "name": "Westlife",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000002691507",
        "fee": 1,
        "v": 35,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1923805,
          "name": "Westlife",
          "picUrl": "http://p3.music.126.net/35sNZmMOleVcRDkSsOajMA==/109951167298989611.jpg",
          "tns": [],
          "pic_str": "109951167298989611",
          "pic": 109951167298989620
        },
        "dt": 249312,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 9973595,
          "vd": -48716
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5984174,
          "vd": -46211
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3989464,
          "vd": -44636
        },
        "sq": null,
        "hr": null,
        "a": null,
        "cd": "01",
        "no": 9,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 35,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7001,
        "mv": 14360553,
        "publishTime": 941385600000
      },
      {
        "name": "Five Hundred Miles",
        "id": 27759600,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 35331,
            "name": "Justin Timberlake",
            "tns": [],
            "alias": []
          },
          {
            "id": 27947531,
            "name": "Carey Mulligan",
            "tns": [],
            "alias": []
          },
          {
            "id": 27947532,
            "name": "Stark Sands",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [
          "电影《醉乡民谣》插曲"
        ],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 1,
        "v": 649,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 2672349,
          "name": "Inside Llewyn Davis: Original Soundtrack Recording",
          "picUrl": "http://p3.music.126.net/4BTe96FPQ_kW1pmNnlNvHg==/2536573326765583.jpg",
          "tns": [
            "醉乡民谣"
          ],
          "pic": 2536573326765583
        },
        "dt": 207453,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 8300713,
          "vd": -5372
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 4980445,
          "vd": -2734
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3320311,
          "vd": -952
        },
        "sq": {
          "br": 796492,
          "fid": 0,
          "size": 20654366,
          "vd": -5372
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 4,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 649,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7002,
        "mv": 5587174,
        "publishTime": 1379347200007,
        "tns": [
          "500英里"
        ]
      },
      {
        "name": "The Sound of Silence",
        "id": 1821488,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 41131,
            "name": "Paul Simon",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 1,
        "v": 57,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 184099,
          "name": "The Paul Simon Songbook",
          "picUrl": "http://p4.music.126.net/vZdXot11LirKnZ-ueTNT0g==/109951165992429144.jpg",
          "tns": [],
          "pic_str": "109951165992429144",
          "pic": 109951165992429150
        },
        "dt": 186749,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 7471064,
          "vd": 7993
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 4482656,
          "vd": 10605
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 2988452,
          "vd": 12376
        },
        "sq": null,
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 5,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 57,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7001,
        "mv": 14474679,
        "publishTime": 1079971200000
      },
      {
        "name": "Traveling Light",
        "id": 1491585,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 35375,
            "name": "Joel Hanson",
            "tns": [],
            "alias": []
          },
          {
            "id": 77700,
            "name": "Sara Groves",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [
          "轻装前行"
        ],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 0,
        "v": 19,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 152131,
          "name": "Traveling Light",
          "picUrl": "http://p3.music.126.net/zYqptzyHld2ylpb5FOoqDA==/1785606883508227.jpg",
          "tns": [],
          "pic": 1785606883508227
        },
        "dt": 208561,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 8344599,
          "vd": -59808
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5006777,
          "vd": -57265
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3337866,
          "vd": -55805
        },
        "sq": {
          "br": 1045971,
          "fid": 0,
          "size": 27268689,
          "vd": -59817
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 262144,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 19,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 0,
        "mv": 0,
        "publishTime": 1018886400000,
        "tns": [
          "轻装前行"
        ]
      },
      {
        "name": "Fearless",
        "id": 19292982,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 44266,
            "name": "Taylor Swift",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 95,
        "st": 0,
        "rt": "600902000007260086",
        "fee": 1,
        "v": 58,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1770438,
          "name": "Fearless",
          "picUrl": "http://p4.music.126.net/KurKrZ-dMmviArT5lM2RCQ==/18517974836953202.jpg",
          "tns": [],
          "pic_str": "18517974836953202",
          "pic": 18517974836953200
        },
        "dt": 241990,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 9681645,
          "vd": -59042
        },
        "m": null,
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3872685,
          "vd": -54936
        },
        "sq": {
          "br": 1042161,
          "fid": 0,
          "size": 31524070,
          "vd": -59229
        },
        "hr": {
          "br": 1810443,
          "fid": 0,
          "size": 54763665,
          "vd": -59027
        },
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 537141248,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 58,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7003,
        "mv": 37109,
        "publishTime": 1230739200000
      },
      {
        "name": "Tomorrow",
        "id": 16431885,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 46490,
            "name": "Avril Lavigne",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000002650792",
        "fee": 1,
        "v": 37,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1515088,
          "name": "Let Go",
          "picUrl": "http://p4.music.126.net/rNWoK0vpHAW1H9kTFKRVig==/109951167596882130.jpg",
          "tns": [],
          "pic_str": "109951167596882130",
          "pic": 109951167596882130
        },
        "dt": 228840,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 9156485,
          "vd": -37978
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5493908,
          "vd": -35466
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3662620,
          "vd": -34022
        },
        "sq": {
          "br": 1001534,
          "fid": 0,
          "size": 28648900,
          "vd": -37958
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 7,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 37,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7001,
        "mv": 315002,
        "publishTime": 1023120000000
      },
      {
        "name": "Keep Holding On",
        "id": 16432035,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 46490,
            "name": "Avril Lavigne",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 85,
        "st": 0,
        "rt": "600902000000084425",
        "fee": 8,
        "v": 23,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1515111,
          "name": "Keep Holding On",
          "picUrl": "http://p4.music.126.net/iLXrXyUASWYx8Te5Ic7HJg==/17741719626223411.jpg",
          "tns": [],
          "pic_str": "17741719626223411",
          "pic": 17741719626223412
        },
        "dt": 239906,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 9598476,
          "vd": -86236
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5759103,
          "vd": -83763
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3839417,
          "vd": -82269
        },
        "sq": {
          "br": 1080187,
          "fid": 0,
          "size": 32393020,
          "vd": -86220
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 262144,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 23,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7001,
        "mv": 14534144,
        "publishTime": 1165766400000
      },
      {
        "name": "Way Back Into Love",
        "id": 5046372,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 912120,
            "name": "Haley Bennett",
            "tns": [],
            "alias": []
          },
          {
            "id": 34911,
            "name": "Hugh Grant",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [
          "电影《K歌情人》插曲"
        ],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 1,
        "v": 63,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 500930,
          "name": "Music and Lyrics (Music from the Motion Picture)",
          "picUrl": "http://p3.music.126.net/_WLFR2EDo0UN1jJE6UxOTg==/6659741930159840.jpg",
          "tns": [
            "K歌情人"
          ],
          "pic": 6659741930159840
        },
        "dt": 277853,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 11116713,
          "vd": -48580
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 6670045,
          "vd": -45989
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 4446711,
          "vd": -44271
        },
        "sq": {
          "br": 919401,
          "fid": 0,
          "size": 31932338,
          "vd": -48612
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 10,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 63,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7002,
        "mv": 356240,
        "publishTime": 1171296000007
      },
      {
        "name": "My Love (Radio Edit)",
        "id": 2081057,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 45839,
            "name": "Westlife",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 23,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 209631,
          "name": "Coast to Coast",
          "picUrl": "http://p4.music.126.net/3aTmaCAfSfAS69wA-IYiRw==/109951163167214177.jpg",
          "tns": [],
          "pic_str": "109951163167214177",
          "pic": 109951163167214180
        },
        "dt": 233000,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 9339341,
          "vd": -44025
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5603621,
          "vd": -44025
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3735762,
          "vd": -44025
        },
        "sq": null,
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 262144,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 23,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7001,
        "mv": 392079,
        "publishTime": 975340800000
      },
      {
        "name": "Yesterday Once More",
        "id": 3986241,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 89363,
            "name": "Carpenters",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 114,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 403181,
          "name": "Yesterday Once More: Greatest Hits 1969-1983",
          "picUrl": "http://p4.music.126.net/oohnKqUgkNEsYJHJDcGmZw==/19000660439857160.jpg",
          "tns": [],
          "pic_str": "19000660439857160",
          "pic": 19000660439857160
        },
        "dt": 240333,
        "h": null,
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5769761,
          "vd": -7059
        },
        "l": null,
        "sq": {
          "br": 822581,
          "fid": 0,
          "size": 24711723,
          "vd": -8213
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 114,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7003,
        "mv": 5307733,
        "publishTime": 916070400007,
        "tns": [
          "昨日重现"
        ]
      },
      {
        "name": "Down By The Sally Gardens",
        "id": 17121714,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 130563,
            "name": "Orla Fallon",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 85,
        "st": 0,
        "rt": "600902000000799732",
        "fee": 1,
        "v": 124,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1577139,
          "name": "Songs From Solo Works: Celtic Woman",
          "picUrl": "http://p4.music.126.net/1G7BG9xbccCQTiILVLApcQ==/109951166066161990.jpg",
          "tns": [],
          "pic_str": "109951166066161990",
          "pic": 109951166066161980
        },
        "dt": 211513,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 8461627,
          "vd": 6995
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5076994,
          "vd": 9636
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3384677,
          "vd": 11429
        },
        "sq": null,
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 5,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 124,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7003,
        "mv": 0,
        "publishTime": 1104508800000
      },
      {
        "name": "Sometimes When We Touch",
        "id": 280578,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 9094,
            "name": "Olivia Ong",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 95,
        "st": 0,
        "rt": "",
        "fee": 8,
        "v": 43,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 27895,
          "name": "Fall in Love With",
          "picUrl": "http://p3.music.126.net/pFr84zTKvPowc73QpJ-B8w==/109951163268231736.jpg",
          "tns": [],
          "pic_str": "109951163268231736",
          "pic": 109951163268231740
        },
        "dt": 247133,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 9887913,
          "vd": -8968
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5932765,
          "vd": -8968
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3955191,
          "vd": -8968
        },
        "sq": {
          "br": 769185,
          "fid": 0,
          "size": 23761424,
          "vd": -8968
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 4,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 262144,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 43,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 624010,
        "mv": 0,
        "publishTime": 1345334400000
      },
      {
        "name": "The Saltwater Room (Original Version)",
        "id": 17706501,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 40859,
            "name": "Owl City",
            "tns": [],
            "alias": []
          },
          {
            "id": 50752,
            "name": "Breanne Düren",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 95,
        "st": 0,
        "rt": "600902000009404838",
        "fee": 1,
        "v": 16,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1627898,
          "name": "Maybe I'm Dreaming",
          "picUrl": "http://p4.music.126.net/M6UjnhRpL7SYT7x1q5Xx7g==/6667438511838692.jpg",
          "tns": [],
          "pic": 6667438511838692
        },
        "dt": 295000,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 11836778,
          "vd": -35209
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 7102136,
          "vd": -35209
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 4734815,
          "vd": -35209
        },
        "sq": null,
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 4,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 16,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7003,
        "mv": 0,
        "publishTime": 1205683200007
      },
      {
        "name": "Take Me Somewhere Nice",
        "id": 19182327,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 100807,
            "name": "Sky Sailing",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 40,
        "st": 0,
        "rt": "",
        "fee": 1,
        "v": 22,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1759051,
          "name": "An Airplane Carried Me To Bed",
          "picUrl": "http://p3.music.126.net/L6m_Kj5jTDqZhUQgjhFQ7Q==/109951164933547076.jpg",
          "tns": [],
          "pic_str": "109951164933547076",
          "pic": 109951164933547070
        },
        "dt": 167967,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 6719782,
          "vd": -39299
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 4031887,
          "vd": -36731
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 2687939,
          "vd": -35098
        },
        "sq": null,
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 10,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 22,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7003,
        "mv": 0,
        "publishTime": 1280073600000
      },
      {
        "name": "As Long as You Love Me",
        "id": 3950792,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 88148,
            "name": "Backstreet Boys",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 1,
        "v": 21,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 399674,
          "name": "Backstreet Boys (US Version)",
          "picUrl": "http://p3.music.126.net/P-2uAbQrgtIZfYy8HxuY2g==/19069929672343699.jpg",
          "tns": [],
          "pic_str": "19069929672343699",
          "pic": 19069929672343700
        },
        "dt": 214000,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 8484731,
          "vd": -31997
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5090902,
          "vd": -31997
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3393988,
          "vd": -31997
        },
        "sq": {
          "br": 1008216,
          "fid": 0,
          "size": 26723370,
          "vd": -31997
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 3,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 21,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7001,
        "mv": 508050,
        "publishTime": 871315200007
      },
      {
        "name": "I Want It That Way",
        "id": 3950552,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 88148,
            "name": "Backstreet Boys",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 1,
        "v": 60,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 399654,
          "name": "I Want It That Way",
          "picUrl": "http://p3.music.126.net/lahkJNOliIPCCx9zQjHQiw==/19197473021161020.jpg",
          "tns": [],
          "pic_str": "19197473021161020",
          "pic": 19197473021161020
        },
        "dt": 215866,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 8637170,
          "vd": -42648
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5182320,
          "vd": -42648
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3454894,
          "vd": -42648
        },
        "sq": {
          "br": 984325,
          "fid": 0,
          "size": 26560395,
          "vd": -42648
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 60,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7001,
        "mv": 33004,
        "publishTime": 925142400007
      },
      {
        "name": "The Scientist",
        "id": 17177367,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 89365,
            "name": "Coldplay",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "",
        "fee": 1,
        "v": 53,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1582632,
          "name": "The Scientist",
          "picUrl": "http://p3.music.126.net/k-a3PeCvisMJ0C4hwqRGYw==/109951165924811590.jpg",
          "tns": [],
          "pic_str": "109951165924811590",
          "pic": 109951165924811580
        },
        "dt": 311426,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 12459407,
          "vd": -37961
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 7475662,
          "vd": -35375
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 4983789,
          "vd": -33661
        },
        "sq": {
          "br": 877453,
          "fid": 0,
          "size": 34157810,
          "vd": -37872
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 53,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7002,
        "mv": 482157,
        "publishTime": 1046361600000
      },
      {
        "name": "Viva La Vida",
        "id": 3986017,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 89365,
            "name": "Coldplay",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000003619068",
        "fee": 1,
        "v": 69,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 403157,
          "name": "Viva La Vida or Death and All His Friends",
          "picUrl": "http://p4.music.126.net/Wr13D68yaaknFmxTD5xnoQ==/18569651881855121.jpg",
          "tns": [],
          "pic_str": "18569651881855121",
          "pic": 18569651881855120
        },
        "dt": 242373,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 9697742,
          "vd": -47397
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 5818662,
          "vd": -44787
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 3879123,
          "vd": -43113
        },
        "sq": {
          "br": 916481,
          "fid": 0,
          "size": 27766346,
          "vd": -47513
        },
        "hr": null,
        "a": null,
        "cd": "01",
        "no": 7,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 69,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7002,
        "mv": 376215,
        "publishTime": 1213632000007,
        "tns": [
          "生命万岁"
        ]
      },
      {
        "name": "Sailboats",
        "id": 19182328,
        "pst": 0,
        "t": 0,
        "ar": [
          {
            "id": 100807,
            "name": "Sky Sailing",
            "tns": [],
            "alias": []
          }
        ],
        "alia": [],
        "pop": 90,
        "st": 0,
        "rt": "",
        "fee": 1,
        "v": 24,
        "crbt": null,
        "cf": "",
        "al": {
          "id": 1759051,
          "name": "An Airplane Carried Me To Bed",
          "picUrl": "http://p3.music.126.net/L6m_Kj5jTDqZhUQgjhFQ7Q==/109951164933547076.jpg",
          "tns": [],
          "pic_str": "109951164933547076",
          "pic": 109951164933547070
        },
        "dt": 259056,
        "h": {
          "br": 320000,
          "fid": 0,
          "size": 10363342,
          "vd": -32480
        },
        "m": {
          "br": 192000,
          "fid": 0,
          "size": 6218022,
          "vd": -29914
        },
        "l": {
          "br": 128000,
          "fid": 0,
          "size": 4145363,
          "vd": -28285
        },
        "sq": null,
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 11,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 270336,
        "originCoverType": 0,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 24,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7003,
        "mv": 0,
        "publishTime": 1280073600000
      }
    ],
    "videoIds": null,
    "videos": null,
    "trackIds": [
      {
        "id": 16431886,
        "v": 31,
        "t": 0,
        "at": 1513318157543,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 20707571,
        "v": 35,
        "t": 0,
        "at": 1513318157499,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 27759600,
        "v": 649,
        "t": 0,
        "at": 1513318157522,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1821488,
        "v": 57,
        "t": 0,
        "at": 1513318157511,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1491585,
        "v": 19,
        "t": 0,
        "at": 1513318157526,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 19292982,
        "v": 58,
        "t": 0,
        "at": 1513318157506,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16431885,
        "v": 37,
        "t": 0,
        "at": 1513318157542,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16432035,
        "v": 23,
        "t": 0,
        "at": 1513318157540,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 5046372,
        "v": 63,
        "t": 0,
        "at": 1513318157529,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2081057,
        "v": 23,
        "t": 0,
        "at": 1513318157500,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3986241,
        "v": 114,
        "t": 0,
        "at": 1513318157538,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 17121714,
        "v": 124,
        "t": 0,
        "at": 1513318157514,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 280578,
        "v": 43,
        "t": 0,
        "at": 1513318157515,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 17706501,
        "v": 16,
        "t": 0,
        "at": 1513318157513,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 19182327,
        "v": 22,
        "t": 0,
        "at": 1513318157507,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3950792,
        "v": 21,
        "t": 0,
        "at": 1513320580339,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3950552,
        "v": 60,
        "t": 0,
        "at": 1513318157539,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 17177367,
        "v": 53,
        "t": 0,
        "at": 1513318157536,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3986017,
        "v": 69,
        "t": 0,
        "at": 1513320618716,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 19182328,
        "v": 24,
        "t": 0,
        "at": 1513318157508,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1215678,
        "v": 408,
        "t": 0,
        "at": 1513318157532,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1476058,
        "v": 26,
        "t": 0,
        "at": 1513318157524,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 37239018,
        "v": 28,
        "t": 0,
        "at": 1513318157534,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4172882,
        "v": 20,
        "t": 0,
        "at": 1513318157517,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2080322,
        "v": 21,
        "t": 0,
        "at": 1513318157498,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1475050,
        "v": 22,
        "t": 0,
        "at": 1513318157525,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1698413,
        "v": 124,
        "t": 0,
        "at": 1513318157518,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1697553,
        "v": 35,
        "t": 0,
        "at": 1513318157512,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3313653,
        "v": 390,
        "t": 0,
        "at": 1513318157510,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 26292652,
        "v": 35,
        "t": 0,
        "at": 1513318157501,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1674192,
        "v": 51,
        "t": 0,
        "at": 1513318157521,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4173190,
        "v": 35,
        "t": 0,
        "at": 1513318157516,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3986707,
        "v": 11,
        "t": 0,
        "at": 1513318157537,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1376614,
        "v": 21,
        "t": 0,
        "at": 1513318157530,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16439857,
        "v": 19,
        "t": 0,
        "at": 1513318157546,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2080139,
        "v": 20,
        "t": 0,
        "at": 1513318157509,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 18578526,
        "v": 31,
        "t": 0,
        "at": 1513318157523,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 18611614,
        "v": 16,
        "t": 0,
        "at": 1513318157527,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4330129,
        "v": 21,
        "t": 0,
        "at": 1513318157503,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2700745,
        "v": 15,
        "t": 0,
        "at": 1513318157528,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 19293014,
        "v": 39,
        "t": 0,
        "at": 1513319327856,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4370918,
        "v": 16,
        "t": 0,
        "at": 1513318157504,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3046898,
        "v": 16,
        "t": 0,
        "at": 1513318157520,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 38592976,
        "v": 159,
        "t": 0,
        "at": 1513318157533,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 215453,
        "v": 20,
        "t": 0,
        "at": 1513318157497,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 21971060,
        "v": 23,
        "t": 0,
        "at": 1513318157502,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 26650576,
        "v": 145,
        "t": 0,
        "at": 1513318157531,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2175282,
        "v": 29,
        "t": 0,
        "at": 1513318157544,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16431842,
        "v": 418,
        "t": 0,
        "at": 1513318157541,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3027393,
        "v": 223,
        "t": 0,
        "at": 1513318157519,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3986326,
        "v": 51,
        "t": 0,
        "at": 1516283470283,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 28692519,
        "v": 51,
        "t": 0,
        "at": 1516283470282,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 17194024,
        "v": 24,
        "t": 0,
        "at": 1516283470281,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 25730796,
        "v": 144,
        "t": 0,
        "at": 1516283470279,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4049385,
        "v": 26,
        "t": 0,
        "at": 1526126760199,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16439844,
        "v": 9,
        "t": 0,
        "at": 1516848187625,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2658203,
        "v": 95,
        "t": 0,
        "at": 1516847715473,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3986342,
        "v": 14,
        "t": 0,
        "at": 1516847715472,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16661978,
        "v": 27,
        "t": 0,
        "at": 1516847715475,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2117962,
        "v": 86,
        "t": 0,
        "at": 1516847715471,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 3986027,
        "v": 54,
        "t": 0,
        "at": 1520070556240,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4330110,
        "v": 15,
        "t": 0,
        "at": 1520070556239,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 18449193,
        "v": 31,
        "t": 0,
        "at": 1520070556238,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4380586,
        "v": 16,
        "t": 0,
        "at": 1520070556237,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2533578,
        "v": 17,
        "t": 0,
        "at": 1520070556236,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 27774566,
        "v": 15,
        "t": 0,
        "at": 1522464596463,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 29769727,
        "v": 64,
        "t": 0,
        "at": 1522464596462,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 2778475,
        "v": 6,
        "t": 0,
        "at": 1522464596461,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1822578,
        "v": 17,
        "t": 0,
        "at": 1522464596460,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16439854,
        "v": 9,
        "t": 0,
        "at": 1522464596459,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 19182319,
        "v": 25,
        "t": 0,
        "at": 1524931195597,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 17654227,
        "v": 18,
        "t": 0,
        "at": 1524931195596,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4433364,
        "v": 15,
        "t": 0,
        "at": 1524931195595,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4154790,
        "v": 48,
        "t": 0,
        "at": 1524931195594,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16432067,
        "v": 32,
        "t": 0,
        "at": 1524931195593,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 1477670,
        "v": 12,
        "t": 0,
        "at": 1533741654494,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 32619184,
        "v": 21,
        "t": 0,
        "at": 1533741654493,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4335590,
        "v": 14,
        "t": 0,
        "at": 1533741654492,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 16434969,
        "v": 20,
        "t": 0,
        "at": 1533741654491,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      },
      {
        "id": 4330310,
        "v": 12,
        "t": 0,
        "at": 1533741654490,
        "alg": null,
        "uid": 74029445,
        "rcmdReason": "",
        "sc": null,
        "f": null,
        "sr": null
      }
    ],
    "bannedTrackIds": null,
    "shareCount": 6498,
    "commentCount": 3808,
    "remixVideo": null,
    "sharedUsers": null,
    "historySharedUsers": null,
    "gradeStatus": "OPENED",
    "score": null,
    "algTags": null
  },
  privileges: [
    {
      "id": 16431886,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 320000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 320000,
      "downloadMaxbr": 320000,
      "maxBrLevel": "exhigh",
      "playMaxBrLevel": "exhigh",
      "downloadMaxBrLevel": "exhigh",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 20707571,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 320000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 320000,
      "downloadMaxbr": 320000,
      "maxBrLevel": "exhigh",
      "playMaxBrLevel": "exhigh",
      "downloadMaxBrLevel": "exhigh",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 27759600,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 999000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 1821488,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 320000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 320000,
      "downloadMaxbr": 320000,
      "maxBrLevel": "exhigh",
      "playMaxBrLevel": "exhigh",
      "downloadMaxBrLevel": "exhigh",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 1491585,
      "fee": 0,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 320000,
      "dl": 999000,
      "sp": 7,
      "cp": 1,
      "subp": 1,
      "cs": false,
      "maxbr": 999000,
      "fl": 320000,
      "pc": null,
      "toast": false,
      "flag": 128,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
      "plLevel": "exhigh",
      "dlLevel": "lossless",
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
    },
    {
      "id": 19292982,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 1,
      "subp": 0,
      "cs": false,
      "maxbr": 999000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "hires",
      "playMaxBrLevel": "hires",
      "downloadMaxBrLevel": "hires",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
        },
        {
          "rate": 1999000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
        }
      ]
    },
    {
      "id": 16431885,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 999000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 16432035,
      "fee": 8,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 128000,
      "dl": 0,
      "sp": 7,
      "cp": 1,
      "subp": 1,
      "cs": false,
      "maxbr": 999000,
      "fl": 128000,
      "pc": null,
      "toast": false,
      "flag": 0,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
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
    },
    {
      "id": 5046372,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 999000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 2081057,
      "fee": 8,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 128000,
      "dl": 0,
      "sp": 7,
      "cp": 1,
      "subp": 1,
      "cs": false,
      "maxbr": 320000,
      "fl": 128000,
      "pc": null,
      "toast": false,
      "flag": 256,
      "paidBigBang": false,
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
    },
    {
      "id": 3986241,
      "fee": 8,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 128000,
      "dl": 0,
      "sp": 7,
      "cp": 1,
      "subp": 1,
      "cs": false,
      "maxbr": 999000,
      "fl": 128000,
      "pc": null,
      "toast": false,
      "flag": 260,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
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
    },
    {
      "id": 17121714,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 320000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 260,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 320000,
      "downloadMaxbr": 320000,
      "maxBrLevel": "exhigh",
      "playMaxBrLevel": "exhigh",
      "downloadMaxBrLevel": "exhigh",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
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
          "chargeType": 1
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
    },
    {
      "id": 280578,
      "fee": 8,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 128000,
      "dl": 0,
      "sp": 7,
      "cp": 1,
      "subp": 1,
      "cs": false,
      "maxbr": 999000,
      "fl": 128000,
      "pc": null,
      "toast": false,
      "flag": 0,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
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
    },
    {
      "id": 17706501,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 320000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 260,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 320000,
      "downloadMaxbr": 320000,
      "maxBrLevel": "exhigh",
      "playMaxBrLevel": "exhigh",
      "downloadMaxBrLevel": "exhigh",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 19182327,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 320000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 260,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 320000,
      "downloadMaxbr": 320000,
      "maxBrLevel": "exhigh",
      "playMaxBrLevel": "exhigh",
      "downloadMaxBrLevel": "exhigh",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
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
          "chargeType": 1
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
    },
    {
      "id": 3950792,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 999000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 260,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 3950552,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 999000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 260,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 17177367,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 999000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 3986017,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 999000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 4,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 999000,
      "downloadMaxbr": 999000,
      "maxBrLevel": "lossless",
      "playMaxBrLevel": "lossless",
      "downloadMaxBrLevel": "lossless",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
      "rscl": null,
      "freeTrialPrivilege": {
        "resConsumable": true,
        "userConsumable": false,
        "listenType": null
      },
      "chargeInfoList": [
        {
          "rate": 128000,
          "chargeUrl": null,
          "chargeMessage": null,
          "chargeType": 1
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
    },
    {
      "id": 19182328,
      "fee": 1,
      "payed": 0,
      "realPayed": 0,
      "st": 0,
      "pl": 0,
      "dl": 0,
      "sp": 0,
      "cp": 0,
      "subp": 0,
      "cs": false,
      "maxbr": 320000,
      "fl": 0,
      "pc": null,
      "toast": false,
      "flag": 260,
      "paidBigBang": false,
      "preSell": false,
      "playMaxbr": 320000,
      "downloadMaxbr": 320000,
      "maxBrLevel": "exhigh",
      "playMaxBrLevel": "exhigh",
      "downloadMaxBrLevel": "exhigh",
      "plLevel": "none",
      "dlLevel": "none",
      "flLevel": "none",
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
          "chargeType": 1
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
  ]
};

const Playlist = () => {
  const params = useParams<{ id: string }>();
  const [playlist, setPlaylist] = useState<any>();

  useEffect(() => {
    // getPlaylistDetail(Number(params.id)).then((res) => {
    //   console.log(res);
    // });

    setPlaylist(res.playlist);

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
            Playlist by
            <a
              href="https://music.163.com/#/user/home?id=${playlist.creator.userId}"
              target="blank"
            >{playlist?.creator?.nickname}</a>
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
