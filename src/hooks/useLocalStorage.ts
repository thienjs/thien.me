import { Theme } from '~/types/types';

export const useLocalStorage = () => {
  const setLocalStorageValue = (key: string, value: number | Theme) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {

    }
  };

  const getLocalStorageValue = (key: string) => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {

    }
  };

  return { setLocalStorageValue, getLocalStorageValue };
};
