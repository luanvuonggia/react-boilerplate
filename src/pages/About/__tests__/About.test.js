import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import About from '../About';

describe('<About />', () => {
  test('it should mount', async () => {
    const { container } = await act(async () => render(<About />));

    expect(container).toBeInTheDocument();
  });
});
