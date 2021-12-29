import * as React from 'react'
import clsx from 'clsx'
import slugify from 'slugify'
export { slugify, clsx as cx }

export function useFormFields<T>(
  initialValues: T
): [T, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [values, setValues] = React.useState<T>(initialValues)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    const { target } = event
    const { name, value } = target
    setValues({ ...values, [name]: value })
  }
  return [values, handleChange]
}

type ConvertUndefined<T> = OrUndefined<{
  [K in keyof T as undefined extends T[K] ? K : never]-?: T[K]
}>
type OrUndefined<T> = { [K in keyof T]: T[K] | undefined }
type PickRequired<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
}
type ConvertPick<T> = ConvertUndefined<T> & PickRequired<T>

export const pick = <Obj, Keys extends keyof Obj>(
  obj: Obj,
  keys: Keys[]
): ConvertPick<{ [K in Keys]: Obj[K] }> => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key]
    return acc
  }, {} as any)
}

export const formatDate = (date, format = 'short') => {
  const formats = {
    short: {
      month: 'numeric',
      day: 'numeric',
    },
    long: {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    },
    full: {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    },
  }
  let options = formats[format]
  options.timeZone = 'UTC'
  return new Date(date).toLocaleDateString('en-us', options)
}

export const fetcher = (url) => fetch(url).then((res) => res.json())

export const isInternalUrl = (url) => url.startsWith('/') || url.startsWith('#')

export const isElement = (element) => {
  return React.isValidElement(element)
}

export const isDOMTypeElement = (element) => {
  return isElement(element) && typeof element.type === 'string'
}
