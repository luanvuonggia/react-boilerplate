import { BASE_URL, STORAGE_TOKEN } from './constants';
import { getLocalStorage } from './storage';

export class HttpError extends Error {
  constructor(response) {
    const { status, statusText } = response;

    super(statusText || String(status));

    this.name = 'HttpError';
    this.response = response;
  }
}

function newHeaders(headerOptions) {
  return new Headers(headerOptions ?? {});
}

function getHeaders(headerOptions) {
  const token = getLocalStorage(STORAGE_TOKEN, '');
  const headers = newHeaders({
    ...(token && { Authorization: `Bearer ${token}` }),
    ...headerOptions,
  });
  return headers;
}

function getJSONHeaders(headerOptions) {
  const headers = getHeaders(headerOptions);
  headers.set('content-type', 'application/json');
  return headers;
}

async function request(path, options = {}) {
  const {
    headers,
    method = 'GET',
    host = BASE_URL,
    responseType = 'json',
    ...restOptions
  } = options;

  const apiURL = `${host}${path}`;
  const requestOptions = {
    method,
    headers,
    ...restOptions,
  };

  const response = await fetch(apiURL, requestOptions);

  if (response.ok) {
    return await response[responseType]();
  }

  throw new HttpError(response);
}

export function getAPI(path, { headers = {}, ...options } = {}) {
  return request(path, {
    method: 'GET',
    headers: getHeaders(headers),
    ...options,
  });
}

export function postAPI(path, { headers = {}, body, ...options } = {}) {
  return request(path, {
    method: 'POST',
    headers: getHeaders(headers),
    body,
    ...options,
  });
}

export function postJSON(path, { headers = {}, body = {}, ...options } = {}) {
  return request(path, {
    method: 'POST',
    headers: getJSONHeaders(headers),
    body: JSON.stringify(body),
    ...options,
  });
}

export function putAPI(path, { headers = {}, body, ...options } = {}) {
  return request(path, {
    method: 'PUT',
    headers: getHeaders(headers),
    body,
    ...options,
  });
}

export function putJSON(path, { headers = {}, body = {}, ...options } = {}) {
  return request(path, {
    method: 'PUT',
    headers: getJSONHeaders(headers),
    body: JSON.stringify(body),
    ...options,
  });
}

export function patchAPI(path, { headers = {}, body, ...options } = {}) {
  return request(path, {
    method: 'PATCH',
    headers: getHeaders(headers),
    body,
    ...options,
  });
}

export function patchJSON(path, { headers = {}, body = {}, ...options } = {}) {
  return request(path, {
    method: 'PATCH',
    headers: getJSONHeaders(headers),
    body: JSON.stringify(body),
    ...options,
  });
}

export function deleteAPI(path, { headers = {}, ...options } = {}) {
  return request(path, {
    method: 'DELETE',
    headers: getHeaders(headers),
    ...options,
  });
}
