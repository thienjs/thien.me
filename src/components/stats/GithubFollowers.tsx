import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import StatsCard from 'components/stats/StatsCard'
import { FaGithub } from 'react-icons/fa'
export function GithubFollowers() {
  const { data } = useSWR<any>('/api/github-stats', fetcher)

  const followers = new Number(data?.followers)
  const link = 'https://github.com/thienjs'
  return (

    
    <StatsCard
      header="GitHub Followers"
      link={link}
      stat={followers}
      icon={<FaGithub className="h-6 w-6"/>}
      isCurrency={false}
    />
  )
}
