interface Enhancement {}

type FecheOptions = {
  abortController?: AbortController;
  timeout: number;
  retry: number;
} & RequestInit;

type InstanceOptions = {
  baseURL?: string;
};

export const create = (instanceOptions: InstanceOptions = {}) => {
  const reqInterceptors = [];
  const resInterceptors = [];

  const nativeFetch = <T>(input: RequestInfo | URL, init?: FecheOptions) => {
    let abortController: AbortController;
    let timer = 0;

    if (init?.abortController) {
      init.signal = init.abortController.signal;
    }

    // 处理超时
    if (init?.timeout) {
      // 必要的 AbortController
      if (!init.abortController) {
        abortController = new AbortController();
        init.signal = abortController.signal;
      }
    }

    return new Promise<T>((resolve, reject) => {
      fetch(instanceOptions.baseURL ?? "" + input, init)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          return resolve(res);
        })
        .catch((e) => {
          return reject(e);
        });
    });
  };

  const feche = (url: RequestInfo | URL, options?: FecheOptions) => {
    return nativeFetch(url, options);
  };

  const post = (url: RequestInfo | URL, options: FecheOptions) => {
    if (!options?.method) return nativeFetch(url, { ...options, method: "post" });
    return nativeFetch(url, options);
  };

  const useReqInterceptor = () => {};
  const useResInterceptor = () => {};

  feche.get = feche;
  feche.post = post;
  feche.create = create;
  feche.useReqInterceptor = useReqInterceptor;
  feche.useResInterceptor = useResInterceptor;

  return feche;
};

const feche = create();

export default feche;
