import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { SWR_OPTIONS } from 'utils';

import LocaleProvider from 'i18n/LocaleProvider';

import App from 'App';

import 'index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <LocaleProvider>
      <BrowserRouter>
        <SWRConfig value={SWR_OPTIONS}>
          <App />
        </SWRConfig>
      </BrowserRouter>
    </LocaleProvider>
  </StrictMode>
);
