import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazyHome = lazy(() => import('./Home'));

const Home = props => (
  <Loadable>
    <LazyHome {...props} />
  </Loadable>
);

export default Home;
