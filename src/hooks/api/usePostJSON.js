import { postJSON } from 'utils';

import useApiGlobalError from './useApiGlobalError';

export default function usePostJSON() {
  const errorHandler = useApiGlobalError();

  return async (path, body, options) => {
    try {
      const res = await postJSON(path, {
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
