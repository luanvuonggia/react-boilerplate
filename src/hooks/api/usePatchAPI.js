import { patchAPI } from 'utils';

import useApiGlobalError from './useApiGlobalError';

export default function usePatchAPI() {
  const errorHandler = useApiGlobalError();

  return async (path, body, options) => {
    try {
      const res = await patchAPI(path, {
        body,
        ...options,
      });
      return res;
    } catch (error) {
      const errorResponse = await error.response.json();

      errorHandler(errorResponse.error);
      throw errorResponse.error;
    }
  };
}
