import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import StatsCard from 'components/stats/StatsCard'

export function TotalArticles() {
  const { data } = useSWR<any>('/api/stats/total-articles', fetcher)
  const total = new Number(data?.totalArticles)
  const link = 'https://github.com/thienjs'
  return (
    <StatsCard
      header="Total article"
      link={link}
      stat={total}
      isCurrency={false}
    />
  )
}
