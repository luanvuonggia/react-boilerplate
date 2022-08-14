import { deleteAPI } from 'utils';

import useApiGlobalError from './useApiGlobalError';

export default function useDeleteAPI() {
  const errorHandler = useApiGlobalError();

  return async (path, options) => {
    try {
      const res = await deleteAPI(path, options);
      return res;
    } catch (error) {
      const errorResponse = await error.response.json();

      errorHandler(errorResponse.error);
      throw errorResponse.error;
    }
  };
}
