import StatsCard from 'components/stats/StatsCard'
import useSWR from 'swr'

import { fetcher } from '~/lib/fetcher'
export function Visitors() {
  const { data: liveVisitors } = useSWR<any>(
    '/api/statistics/visitors',
    fetcher
  )
  const link = 'https://github.com/thienjs'
  return (
    <StatsCard
      icon="place"
      header="Current Visitors"
      link={link}
      stat={liveVisitors ? liveVisitors?.visitors : '--'}
      isCurrency={false}
    />
  )
}
