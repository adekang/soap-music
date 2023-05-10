/**
 * @description vite的插件配置文件
 */

import type { Plugin } from 'vite'
import RemixRouter from 'vite-plugin-remix-router'
import configEslint from './eslint'
import configSvgSprites from './svgSprite'
import configMock from './mock'

export default function createVitePlugins(command: string, mode: string) {
  const vitePlugins: (Plugin | Plugin[])[] = [RemixRouter(), configSvgSprites(), configEslint(), configMock()]

  return vitePlugins
}
