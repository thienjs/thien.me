// NOTE The functionality below (incl. TS types) will soon become part of Contentlayer itself. Please don't mind its existence. 😎

import { useState } from 'react'

export function useFormFields<T>(initialValues: T): [T, (event: React.ChangeEvent<HTMLInputElement>) => void] {
    const [values, setValues] = useState<T>(initialValues)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();
      const { target } = event;
      const { name, value } = target;
      setValues({ ...values, [name]: value })
    }
    return [ values, handleChange]
}

type ConvertUndefined<T> = OrUndefined<{
  [K in keyof T as undefined extends T[K] ? K : never]-?: T[K];
}>;
type OrUndefined<T> = { [K in keyof T]: T[K] | undefined };
type PickRequired<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};
type ConvertPick<T> = ConvertUndefined<T> & PickRequired<T>;

export const pick = <Obj, Keys extends keyof Obj>(
  obj: Obj,
  keys: Keys[]
): ConvertPick<{ [K in Keys]: Obj[K] }> => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as any);
};