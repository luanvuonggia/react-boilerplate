import useSWRAPI from 'swr';

import { useApiGlobalError } from '.';

const useSWR = (endpoint, fetcher, options) => {
  const errorHandler = useApiGlobalError();

  return useSWRAPI(endpoint, fetcher, {
    onError: async error => {
      const errorResponse = await error.response.json();
      errorHandler(errorResponse.error);
    },
    ...options,
  });
};

export default useSWR;
