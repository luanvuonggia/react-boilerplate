import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import NotFoundPage from '../NotFoundPage';

describe('<NotFoundPage />', () => {
  test('it should mount', async () => {
    const { container } = await act(async () => render(<NotFoundPage />));

    expect(container).toBeInTheDocument();
  });
});
