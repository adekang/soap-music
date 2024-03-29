import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import createVitePlugins from './config'
import cssOption from './config/style'
import { VITE_APP_BASE } from './config/config'
// https://vitejs.dev/config/

export default defineConfig((configEnv) => {
  console.log('config::', configEnv)
  const { command, mode } = configEnv
  const isDev = mode === 'development'

  return {
    base: isDev ? './' : VITE_APP_BASE,
    define: {
      isDev: mode === 'development',
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.json', '.ts', '.vue', '.tsx'], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    css: cssOption,
    plugins: [react(), createVitePlugins(command, mode)],
    server: {
      port: 3000,
    },
  }
})
