import useSWR from 'swr'

import { fetcher } from 'lib/fetcher'
import { GitHub } from 'lib/types'
import StatsCard from 'components/stats/StatsCard'

export function GithubStars() {
  const { data } = useSWR<GitHub>('/api/github-stats', fetcher)

  const stars = new Number(data?.stars)
  const link = 'https://github.com/thienjs'

  return (
    <StatsCard
      header="GitHub Stars"
      link={link}
      stat={stars}
      isCurrency={false}
    />
  )
}
