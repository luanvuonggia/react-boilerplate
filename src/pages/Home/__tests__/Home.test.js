import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Home from '../Home';

describe('<Home />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Home />));

    expect(container).toBeInTheDocument();
  });
});
