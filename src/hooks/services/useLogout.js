import { useNavigate } from 'react-router-dom';
import { STORAGE_TOKEN } from 'utils';

export default function useLogout() {
  const navigate = useNavigate();
  return () => {
    window.localStorage.removeItem(STORAGE_TOKEN);
    navigate('/login', { replace: true });
  };
}
