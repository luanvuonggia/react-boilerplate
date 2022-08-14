import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from 'utils';

export const useLocalStorage = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() =>
    getLocalStorage(keyName, defaultValue)
  );
  const setValue = newValue => {
    setLocalStorage(keyName, newValue);
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
