import type { MockMethod } from "vite-plugin-mock";
import {
  HotArtistsMock,
  NewAlbumMock,
  playlistMock,
  rankListMock,
  RecommendListMock
} from "./playlist";

export default [
  playlistMock,
  rankListMock,
  NewAlbumMock,
  RecommendListMock,
  HotArtistsMock
] as MockMethod[];
