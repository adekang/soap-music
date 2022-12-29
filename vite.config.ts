import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import createVitePlugins from './config'
// https://vitejs.dev/config/

export default defineConfig((configEnv) => {
  console.log(`config::`, configEnv)
  const { command, mode } = configEnv
  return {
    base: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
      extensions: ['.js', '.json', '.ts', '.vue', '.tsx'] // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    plugins: [react(), createVitePlugins(command, mode)]
  }
})
