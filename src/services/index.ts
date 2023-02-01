import service from "./request";
import { categoryMap } from "@/utils";


export const getPlaylistDetail = (id: number, noCache = false) => {
  const params: any = {
    id, s: 8
  };
  if (noCache) params.timestamp = new Date().getTime();
  return service({
    url: "/playlist/detail",
    data: params
  });
};

export const getRecommendList = (data: { limit: number }) => {
  return service({
    url: "/personalized",
    data
  });
};

export function getHighQualityList(data: { limit: number; before: number }) {
  return service({
    url: "/top/playlist/highquality",
    data
  });
}

/**
 * 歌单 ( 网友精选碟 )
 * 说明 : 调用此接口 , 可获取网友精选碟歌单
 * - order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
 * - cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * - limit: 取出歌单数量 , 默认为 50
 * @param {string} params.order
 * @param {string} params.cat
 * @param {number=} params.limit
 * @param {number=} params.offset
 * @param data
 */
export function getNormalPlayList(data: {
  limit: number;
  cat: string;
  order?: string;
  offset: number;
}) {
  return service({
    url: "/top/playlist",
    data
  });
}

export const getHotArtists = (data: { offset: number; limit: number }) => {
  return service({
    url: "/top/artists",
    data
  });
};

/**
 * 获取专辑内容 ( 网友精选碟 )
 * 说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
 * - id: 专辑 id
 * @param {number} params.id
 * @param data
 */
export const getAlbumDetailRequest = (data: { id: number }) => {
  return service({
    url: "/album",
    data
  });
};
export const getPlaylistDetailRequest = (data: { id: number }) => {
  return service({
    url: "/playlist/detail",
    data
  });
};

export const getBannerRequest = () => {
  return service({
    url: "/banner"
  });
};

export const getNewAlbumRequest = (data: { area: string; limit: number }) => {
  return service({
    url: "/album/new",
    data
  });
};

export const getHotSingerListRequest = (count: number) => {
  return service({
    url: `/top/artists?offset=${count}`
  });
};

export const getSingerListRequest = (category: string, alpha: string, count: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const { type, area } = !!category ? categoryMap.get(category) : {};
  const { type, area } = category ? categoryMap.get(category) : {};
  return service({
    url: `/artist/list?${
      type && area ? `type=${type}&area=${area}` : ""
    }&initial=${alpha.toLowerCase()}&offset=${count}`
  });
};

export const getRankListRequest = () => {
  return service({
    url: `/toplist`
  });
};

export const getSingerInfoRequest = (id: string | undefined) => {
  return service({
    url: `/artists?id=${id}`
  });
};
//拼接出歌曲的url链接
// export const getSongUrl = (id: number) => {
//   return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
// };

//拼接出歌曲的url链接
export const getSongUrl = (id: number) => {
  return service({
    url: `/song/url?id=${id}`
  });
};

export const getLyricRequest = (id: number) => {
  return service({
    url: `/lyric?id=${id}`
  });
};

export const getHotKeyWordsRequest = () => {
  return service({
    url: `/search/hot`
  });
};

export const getSuggestListRequest = (query: string) => {
  return service({
    url: `/search/suggest?keywords=${query}`
  });
};

export const getResultSongsListRequest = (query: string) => {
  return service({
    url: `/search?keywords=${query}`
  });
};

/**
 * 获取歌曲详情
 * 说明 : 说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(dt为歌曲时长)
 * - ids : 音乐 id
 * @param {number} ids
 * @param ids
 */

export const getSongDetailRequest = (ids: number) => {
  return service({
    url: `/song/detail?ids=${ids}`
  });
};

export const phoneLogin = (data: { phone: number; md5_password: string }) => {
  return service({
    url: "/login/cellphone",
    method: "post",
    data: {
      timestamp: new Date().getTime(),
      ...data
    }
  });
};

export const checkLogin = (data: { cookie: string | undefined }) => {
  return service({
    url: "/login/status",
    method: "post",
    data: {
      timestamp: new Date().getTime(),
      ...data
    }
  });
};

export const logout = () => {
  return service({
    url: "/logout",
    method: "post"
  });
};
