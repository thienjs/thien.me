import { useState } from 'react'


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