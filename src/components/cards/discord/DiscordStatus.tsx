import React from 'react'
import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'

import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
type DiscordCardProps = {}

const DiscordStatus = (props: DiscordCardProps) => {
  const { data } = useSWR<any>('/api/discord', fetcher)

  const status = data?.status
  const link = 'https://discord.com/thienjs'
  const linklink = `https://cdn.discordapp.com/app-assets/383226320970055681/565945769320775680.webp`
  const id = data?.activityId
  const img = data?.activityImg
  const timeStart = data?.activityStart
  return (
    <div className=" max-w-3xl px-4 py-4 bg-white dark:bg-zinc-900 w-full  border my-2 rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
      <div className="flex justify-between ">
        <Image
          src="https://cdn.discordapp.com/avatars/925868267690672208/bd8aa214a9c54bd8e32de4cf8b91a33c.png?size=256"
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
        <div className="mr-auto ml-4">
          <div className="font-semibold">thien#0601</div>
          <div className="font-light text-sm">
            {data?.status ? data?.status : 'offline'}
          </div>
        </div>
        <FaDiscord className="text-blue-800 w-6 h-6" />
      </div>
      <div className=" mt-2 flex">
        {data?.status ? (
         

            <Image
              src={linklink}
              width={50}
              height={50}
              className="rounded-md"
            ></Image>
         
        ) : (
          ''
        )}

        <div className="ml-4">
          <div className=" ">{data?.activityName}</div>
          <div className=" text-sm ">{data?.activityState}</div>
        </div>
      </div>
    </div>
  )
}

export default DiscordStatus
