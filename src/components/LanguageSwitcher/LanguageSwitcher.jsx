import { useContext } from 'react';

import { LANGUAGES } from 'i18n/index.mjs';
import { LocaleContext } from 'i18n/LocaleProvider';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useContext(LocaleContext);

  const onChangeLanguage = e => setLocale(e.target.value);

  return (
    <select onChange={onChangeLanguage} value={locale}>
      {LANGUAGES.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
}
