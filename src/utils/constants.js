export const TIME_FORMAT = 'HH:mm';
export const STORAGE_TOKEN = 'token';
export const BASE_URL = process?.env.RB_BASE_URL;
export const SWR_OPTIONS = {
  errorRetryCount: 0,
  shouldRetryOnError: false,
  revalidateOnFocus: false,
  revalidateIfStale: false,
};
