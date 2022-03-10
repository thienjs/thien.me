import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import NowStat from './NowStat'

export function TotalSnippets() {
  const { data } = useSWR<any>('/api/stats/total-snippets', fetcher)
  const total = new Number(data?.totalSnippets)
  const link = 'https://thien.me/snippets'
  return <NowStat link={link} stat={total} />
}
