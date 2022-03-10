import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import NowStat from './NowStat'

export function BlogViews() {
  const { data } = useSWR<any>('/api/views', fetcher)
  const total = new Number(data?.total)
  const link = 'https://thien.me/blog'
  return <NowStat link={link} stat={total} />
}
