import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazyLogin = lazy(() => import('./Login'));

const Login = props => (
  <Loadable>
    <LazyLogin {...props} />
  </Loadable>
);

export default Login;
