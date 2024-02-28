import { type ClassValue } from "clsx"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"
import { useState } from 'react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useFormFields<T>(
  initialValues: T
): [T, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [values, setValues] = useState<T>(initialValues)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist()
    const { target } = event
    const { name, value } = target
    setValues({ ...values, [name]: value })
  }
  const resetFormFields = () => setValues(initialValues)
  return [values, handleChange, resetFormFields]
}

export function jsonResponse(status: number, data: any, init?: ResponseInit) {
  return new Response(JSON.stringify(data), {
    ...init,
    status,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
    },
  })
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json()
}
export const extractDate = (dateString: string | number | Date) =>
  new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}