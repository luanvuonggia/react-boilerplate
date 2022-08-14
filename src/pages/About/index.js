import { lazy } from 'react';

import Loadable from 'components/Loadable';

const LazyAbout = lazy(() => import('./About'));

const About = props => (
  <Loadable>
    <LazyAbout {...props} />
  </Loadable>
);

export default About;
