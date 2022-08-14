import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Login from '../Login';

describe('<Login />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Login />));

    expect(container).toBeInTheDocument();
  });
});
