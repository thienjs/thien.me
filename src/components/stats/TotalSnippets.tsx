import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import StatsCard from 'components/stats/StatsCard'
import { TBoxIcon } from '../icons'

export function TotalSnippets() {
  const { data } = useSWR<any>('/api/stats/total-snippets', fetcher)
  const total = new Number(data?.totalSnippets)
  const link = 'https://github.com/thienjs'
  return (
    <StatsCard
      header="Snippets"
      link={link}
      stat={total}
      icon={<TBoxIcon className="h-7 w-7" />}
      isCurrency={false}
    />
  )
}
