import useSWR from 'swr'

import { fetcher } from 'lib/fetcher'
import { GitHub } from 'lib/types'
import StatsCard from 'components/stats/StatsCard'
import { FaGithub } from 'react-icons/fa'

export function GithubStars() {
  const { data } = useSWR<GitHub>('/api/stats/leetcode', fetcher)

  const stars = new Number(data?.stars)
  const link = 'https://github.com/thienjs'

  return (
    <StatsCard
      header="GitHub Stars"
      link={link}
      icon={<FaGithub className="h-6 w-6" />}
      stat={stars}
      isCurrency={false}
    />
  )
}
