import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Signup from '../Signup';

describe('<Signup />', () => {
  it('should mount', async () => {
    const { container } = await act(async () => render(<Signup />));

    expect(container).toBeInTheDocument();
  });
});
