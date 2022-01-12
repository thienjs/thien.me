import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import StatsCard from 'components/stats/StatsCard'
export function GithubFollowers() {
  const { data } = useSWR<any>(
    '/api/stats/github-stats',
    fetcher
  )

  const followers = new Number(data?.followers)
  const link = 'https://github.com/thienjs'
  return (

    
    <StatsCard
      header="GitHub followers"
      link={link}
      stat={followers}
      isCurrency={false}
    />
  )
}
