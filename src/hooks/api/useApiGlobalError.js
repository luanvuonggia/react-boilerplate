// import { message } from 'antd';
import { useIntl } from 'react-intl';

import { useLogout } from 'hooks/services';
// import { useNavigate } from 'react-router-dom';

// https://docs.strapi.io/developer-docs/latest/developer-resources/error-handling.html#rest-errors
export default function useApiGlobalError() {
  const { formatMessage } = useIntl();
  // const navigate = useNavigate();
  const logout = useLogout();

  return error => {
    switch (error.status) {
      // case 404:
      //   navigate('/404', { replace: true });
      //   break;

      case 401:
      case 403:
        logout();
        break;
      default:
        // message.error(
        console.error(
          error.message
            ? formatMessage({
                id: error.message,
                defaultMessage: [],
              })
            : formatMessage({
                defaultMessage: 'Something went wrong. Try reload the page',
              })
        );
        // );
        break;
    }
  };
}
