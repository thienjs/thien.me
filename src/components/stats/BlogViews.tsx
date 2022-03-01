import StatsCard from 'components/stats/StatsCard'
import { FaEye } from 'react-icons/fa'
import GoEye from 'react-icons/go'
import useSWR from 'swr'

import { fetcher } from '~/lib/fetcher'

import { TBoxIcon } from '../icons'

export function BlogViews() {
  const { data } = useSWR<any>('/api/views', fetcher)
  const total = new Number(data?.total)
  const link = 'https://github.com/thienjs'
  return (
    <StatsCard
      header="Blog Views"
      link={link}
      stat={total}
      icon={<TBoxIcon className="h-7 w-7" />}
      isCurrency={false}
    />
  )
}
