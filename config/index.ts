/**
 * @description vite的插件配置文件
 */

import { Plugin } from 'vite'
import configEslint from './eslint'
import react from '@vitejs/plugin-react'
import RemixRouter from 'vite-plugin-remix-router'

export default function createVitePlugins(command: string, mode: string) {
  const vitePlugins: (Plugin | Plugin[])[] = [RemixRouter()]

  return vitePlugins
}
