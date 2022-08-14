import { useGetAPI } from '../api';

export default function useCheckAccountAvailable() {
  const getAPI = useGetAPI();
  return params => {
    const searchParams = new URLSearchParams(params);
    return getAPI(`/users/available-props?${searchParams}`);
  };
}
