import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazySignup = lazy(() => import('./Signup'));

const Signup = props => (
  <Loadable>
    <LazySignup {...props} />
  </Loadable>
);

export default Signup;
