import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import LocaleProvider from 'i18n/LocaleProvider';

const AllTheProviders = ({ children }) => (
  <StrictMode>
    <LocaleProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </LocaleProvider>
  </StrictMode>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
