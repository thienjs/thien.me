import StatsCard from 'components/stats/StatsCard'
import useSWR from 'swr'

import { fetcher } from '~/lib/fetcher'

import { TBoxIcon } from '../icons'

export function TotalArticles() {
  const { data } = useSWR<any>('/api/stats/total-articles', fetcher)
  const total = new Number(data?.totalArticles)
  const link = 'https://github.com/thienjs'
  return (
    <StatsCard
      header="Blog Posts"
      link={link}
      stat={total}
      icon={<TBoxIcon className="h-7 w-7" />}
      isCurrency={false}
    />
  )
}
