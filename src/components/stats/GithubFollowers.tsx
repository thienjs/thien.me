import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import StatsCard from 'components/stats/StatsCard'
export function GithubFollowers() {
  const { data } = useSWR<any>(
    '/api/stats/github-followers',
    fetcher
  )

  const followers = new Number(data?.githubFollowers)
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
