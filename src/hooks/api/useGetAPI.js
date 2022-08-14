import { getAPI } from 'utils';

import useApiGlobalError from './useApiGlobalError';

export default function useGetAPI() {
  const errorHandler = useApiGlobalError();

  return async (path, options) => {
    try {
      const res = await getAPI(path, options);
      return res;
    } catch (error) {
      const errorResponse = await error.response.json();

      errorHandler(errorResponse.error);
      throw errorResponse.error;
    }
  };
}
