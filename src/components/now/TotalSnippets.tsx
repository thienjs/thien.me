import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import NowStat from './NowStat'


export function TotalSnippets() {
  const { data } = useSWR<any>('/api/stats/total-snippets', fetcher)
  const total = new Number(data?.totalSnippets)
  const link = 'https://github.com/thienjs'
  return (
    <NowStat
      link={link}
      stat={total}
    />
  )
}
