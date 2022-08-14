import { usePostAPI } from 'hooks/api';

export default function useUpload() {
  const postAPI = usePostAPI();
  return file => {
    const formData = new FormData();
    formData.append('files', file);
    return postAPI('/upload', formData);
  };
}
