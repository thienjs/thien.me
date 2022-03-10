import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'

import NowStat from './NowStat'

export function TotalPosts() {
  const { data } = useSWR<any>('/api/stats/total-articles', fetcher)
  const total = new Number(data?.totalArticles)
  const link = 'https://thien.me/blog'
  return <NowStat link={link} stat={total} />
}
