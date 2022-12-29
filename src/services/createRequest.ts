import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const API_TIME_OUT = 20000;

function isRspSuccess(
  { status, code }: { status: number; code: number },
  config: AxiosRequestConfig
) {
  return status === 200 || code === 200;
}

let axiosRequest;

function handleRequest(instance: AxiosInstance, createConfig: any) {
  if (Array.isArray(createConfig.interceptors?.request)) {
    createConfig.interceptors?.request.forEach((resInterceptor: any) => {
      instance.interceptors.request.use(...resInterceptor);
    });
  }
  instance.interceptors.request.use(options => {
    const setHeaders =
      typeof createConfig?.setHeaders === "function" ? createConfig?.setHeaders : () => ({});
    const headers = setHeaders();

    return {
      ...(options || {}),
      headers: {
        ...(options?.headers || {}),
        ...(typeof headers === "object" ? headers : {})
      }
    };
  });
}

function handleError(instance: AxiosInstance, createConfig: any) {
  const processError = (response: AxiosResponse<any, any>) => {
    const { data, config, status } = response || {};
    const responseStatusMap = createConfig.responseStatusMap || {};
    const errorText = responseStatusMap[data?.status] || data?.msg || "系统错误";

    const errorResult =
      typeof createConfig.httpStatusErrorHandler === "function" &&
      createConfig.httpStatusErrorHandler(status, response);

    return (
      errorResult ||
      Promise.reject(
        config
          ? {
            ...(data && typeof data === "object" ? data : { data }),
            errorText
          }
          : errorText
      )
    );
  };

  if (Array.isArray(createConfig.interceptors?.response)) {
    createConfig.interceptors?.response.forEach((resInterceptor: any) => {
      instance.interceptors.response.use(...resInterceptor);
    });
  }

  // http response 拦截器
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      // http status 200
      // const { needDetail, needHttpResponse } = config || {}

      /* TODO 修改后的 这里将status 合并到了返回的数据中，后续数据报错，请用上面代码，并对 checkMusic 做修改 */
      const { data, config, status } = response || {};

      const responseData = { status, ...data } || {};

      if (isRspSuccess(responseData, config)) {
        return responseData;
      }

      return processError(response);
    },
    (error: { response: any }) => processError(error.response)
  );
}

function createInstance(createConfig: any) {
  axiosRequest =
    // axiosRequest ||
    axios.create({
      timeout: API_TIME_OUT,
      ...(createConfig || {})
    });
  handleRequest(axiosRequest, createConfig);
  handleError(axiosRequest, createConfig);
  return axiosRequest;
}

const createRequest = (createConfig: any) => {
  const instance = createInstance(createConfig);
  const res = ({
                 url,
                 method = "get",
                 data,
                 ...config
               }: {
    url: any;
    method?: string;
    data?: any;
  }) => {
    if (method.toLowerCase() === "get") {
      const params = new URLSearchParams(data);
      const query = params.toString();
      return instance.get(`${url}${query !== "" ? `?${query}` : ""}`, config);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return instance[method.toLowerCase()](url, data, config);
  };

  res.instance = instance;
  return res;
};

export default createRequest;
