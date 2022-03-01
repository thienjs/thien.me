import useSWR from 'swr'

import { fetcher } from '~/lib/fetcher'

import NowStat from './NowStat'
export function GithubFollowers() {
  const { data } = useSWR<any>('/api/github-stats', fetcher)

  const followers = new Number(data?.followers)
  const link = 'https://github.com/thienjs'
  return <NowStat link={link} stat={followers} />
}
