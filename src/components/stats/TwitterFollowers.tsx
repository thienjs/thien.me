import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import StatsCard from 'components/stats/StatsCard'
export function TwitterFollowers() {
  const { data: twitterFollowers } = useSWR<any>(
    '/api/stats/twitter-followers',
    fetcher
  )
  const link = 'https://github.com/thienjs'
  return (
    <StatsCard
      header="Twitter Followers"
      link={link}
      stat={twitterFollowers ? twitterFollowers.followerCount : '--'}
      isCurrency={false}
    />
  )
}
