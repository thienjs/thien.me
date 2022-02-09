import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import StatsCard from 'components/stats/StatsCard'
import { FaTwitter } from 'react-icons/fa'
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
      icon={<FaTwitter className='h-6 w-6 text-blue-400'/>}
      stat={twitterFollowers ? twitterFollowers.followerCount : '--'}
      isCurrency={false}
    />
  )
}
