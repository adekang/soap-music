import createRequest from './createRequest.js'
import { environmentVariable } from '@/utils'

const isPrd = environmentVariable() === 'dev'

// http://121.41.42.16:3000
// http://www.codeman.ink/api
// https://api.trtst.com/
export const baseUrl = isDev ? '/api/' : 'https://api.trtst.com'

const service = createRequest({
  baseURL: baseUrl,
  timeout: 5000,
  withCredentials: true,
  changeOrigin: true,
  responseStatusMap: {},
  headers: {
    // "X-SERVICE-GROUP": getCookie("cookie"),
    'Content-Type': 'application/json',
  },
})

export default service
