import useSWR from 'swr'

import { fetcher } from '~/lib/fetcher'

import NowStat from './NowStat'

export function TwitterFollowers() {
  const { data: twitterFollowers } = useSWR<any>(
    '/api/stats/twitter-followers',
    fetcher
  )
  const link = 'https://twitter.com/thientsx'
  return (
    <NowStat
      link={link}
      stat={twitterFollowers ? twitterFollowers.followerCount : '--'}
    />
  )
}
