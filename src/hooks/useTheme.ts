import { useState, useCallback, useContext } from 'react';

import { useLocalStorage } from './useLocalStorage';

import { ThemeContext } from '~/context/ThemeContext';
import { theme } from '~/utils/theme';
import type { Theme } from '../types/types';

export const useTheme = () => {
  const { getLocalStorageValue, setLocalStorageValue } = useLocalStorage();

  const [systemTheme, setSystemTheme] = useState<Theme>(() => {
    const localTheme = getLocalStorageValue('theme');
    return localTheme ? localTheme : theme.wob;
  });

  const setTheme = useCallback(
    (value: Theme) => {
      setSystemTheme(value);
      setLocalStorageValue('theme', value);
    },
    [setSystemTheme, setLocalStorageValue]
  );

  return { systemTheme, setTheme };
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
