import service from "./request";
import { categoryMap } from "@/utils";

export const checkMusic = (data: { id: number }) =>
  service({
    url: "/check/music",
    data
  });

export const getRecommendList = (data: { limit: number }) => {
  return service({
    url: "/personalized",
    data
  });
};
export const getHotArtists = (data: { offset: number, limit: number }) => {
  return service({
    url: "/top/artists",
    data
  });
};


export const getBannerRequest = () => {
  return service({
    url: "/banner"
  });
};
export const getNewAlbumRequest = (data: { area: string, limit: number }) => {
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

export const getAlbumDetailRequest = (id: number) => {
  return service({
    url: `/playlist/detail?id=${id}`
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
