import React from 'react'
import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import DiscordCard from './DiscordCard'
type DiscordCardProps = {}

const DiscordStatus = (props: DiscordCardProps) => {
  const { data } = useSWR<any>('/api/discord', fetcher)

  const status =data?.status
  const link = 'https://discord.com/thienjs'

  return <DiscordCard status={status} user={data?.user} activity={data?.activity} />
}

export default DiscordStatus
