import { viteMockServe } from 'vite-plugin-mock'

export default function configMock() {
  return [
    // 在 Vite HMR 叠加层和终端控制台中提示错误
    viteMockServe({
      mockPath: './mock',
      supportTs: true,
    }),
  ]
}
