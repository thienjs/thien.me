import StatsCard from 'components/stats/StatsCard'
import { FaTwitter } from 'react-icons/fa'
import useSWR from 'swr'

import { fetcher } from '~/lib/fetcher'
export function TwitterFollowers() {
  const { data: twitterFollowers } = useSWR<any>(
    '/api/stats/twitter-followers',
    fetcher
  )
  const link = 'https://twitter.com/thientsx'
  return (
    <StatsCard
      header="Twitter Followers"
      link={link}
      icon={<FaTwitter className="h-6 w-6 text-blue-400" />}
      stat={twitterFollowers ? twitterFollowers.followerCount : '--'}
      isCurrency={false}
    />
  )
}
