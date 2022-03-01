import { fetcher } from 'lib/fetcher'
import { GitHub } from 'lib/types'
import useSWR from 'swr'

import NowStat from './NowStat'

export function GithubStars() {
  const { data } = useSWR<GitHub>('/api/github-stats', fetcher)

  const stars = new Number(data?.stars)
  const link = 'https://github.com/thienjs'

  return <NowStat link={link} stat={stars} />
}
