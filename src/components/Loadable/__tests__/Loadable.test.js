import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Loadable from '../Loadable';

describe('<Loadable />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Loadable />));

    expect(container).toBeInTheDocument();
  });
});
