import { act } from 'react-dom/test-utils';

import { render } from 'utils/test-utils';

import LanguageSwitcher from '../LanguageSwitcher';

describe('<LanguageSwitcher />', () => {
  test('it should mount', async () => {
    const { container } = await act(async () => render(<LanguageSwitcher />));

    expect(container).toBeInTheDocument();
  });
});
