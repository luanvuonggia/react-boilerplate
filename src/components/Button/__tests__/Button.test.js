import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import Button from '../Button';

describe('<Button />', () => {
  test('it should mount', async () => {
    const { container } = await act(async () =>
      render(<Button>Button</Button>)
    );

    expect(container).toBeInTheDocument();
  });
});
