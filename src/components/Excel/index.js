import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazyExcel = lazy(() => import('./Excel'));

const Excel = props => (
  <Loadable>
    <LazyExcel {...props} />
  </Loadable>
);

export default Excel;
