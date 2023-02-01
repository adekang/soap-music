/**
 * @description vite的插件配置文件
 */

import { Plugin } from "vite";
import configEslint from "./eslint";
import RemixRouter from "vite-plugin-remix-router";
import configSvgSprites from "./svgSprite";
import configMock from "./mock";

export default function createVitePlugins(command: string, mode: string) {
  const vitePlugins: (Plugin | Plugin[])[] = [RemixRouter(), configSvgSprites(), configEslint(), configMock()];

  return vitePlugins;
}
