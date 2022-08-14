import { createContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE, LOCALES } from './index.mjs';

const orderLocaleDetected =
  navigator.language || localStorage.getItem('locale') || DEFAULT_LOCALE;

async function loadLocaleData(locale) {
  locale = String(locale).trim();
  let messages = null;
  try {
    if (LOCALES[locale]) {
      messages = await import(`./compiled-lang/${locale}.json`);
    } else {
      messages = await import(`./compiled-lang/${DEFAULT_LOCALE}.json`);
    }
  } catch (e) {
    messages = {};
  }
  return messages;
}

const LocaleContext = createContext({
  locale: orderLocaleDetected,
  setLocale: () => {},
});

const LocaleProvider = ({ children }) => {
  const [localeData, setLocaleData] = useState({
    locale: orderLocaleDetected,
    messages: {},
  });

  const setLocale = async locale => {
    const messages = await loadLocaleData(locale);

    setLocaleData({
      locale,
      messages,
    });
    localStorage.setItem('locale', locale);
  };

  useEffect(() => {
    setLocale(orderLocaleDetected);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale: localeData.locale, setLocale }}>
      <IntlProvider
        locale={localeData.locale}
        defaultLocale={orderLocaleDetected}
        messages={localeData.messages}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export { LocaleContext };

export default LocaleProvider;
