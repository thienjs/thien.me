import useSWR from 'swr'

import { fetcher } from '~/lib/utils'

type Fallbackdata = {
  id: number
  body: string
  createdBy: string
  createdAt: string
}[]

export function useGuestbookEntries(fallbackData: Fallbackdata) {
  const { data, mutate } = useSWR<{ data: Fallbackdata; success: boolean }>(
    '/api/guestbook/all',
    fetcher,
    {
      fallbackData: {
        data: fallbackData,
        success: true,
      },
    }
  )

  return { data, mutate }
}
