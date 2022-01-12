import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'

export function GithubFollowers() {
  const { data: githubFollowers } = useSWR<any>(
    '/api/stats/github-followers',
    fetcher
  )
  return (
    <div className="h-32 justify-center text-center bg-gray-100 dark:bg-midnight rounded-lg p-6 flex flex-col items-center col-span-2 mb-2">
      <p className="text-base m-0">followers</p>
      <h2 className="text-3xl font-bold m-0">
        {githubFollowers ? githubFollowers.followers : '--'}
      </h2>
    </div>
  )
}
