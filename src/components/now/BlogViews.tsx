import useSWR from 'swr'

import { fetcher } from '~/lib/fetcher'

import NowStat from './NowStat'

export function BlogViews() {
  const { data } = useSWR<any>('/api/views', fetcher)
  const total = new Number(data?.total)
  const link = 'https://github.com/thienjs'
  return <NowStat link={link} stat={total} />
}
