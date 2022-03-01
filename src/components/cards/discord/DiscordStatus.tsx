import React from 'react'
import { fetcher } from '~/lib/fetcher'
import useSWR from 'swr'
import { Fragment, ReactNode } from 'react'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
type DiscordCardProps = {}
type Avatar =
  | {
      icon: boolean
    }
  | {
      alt: string
      href?: string
      url: string
    }

interface Activity {
  avatar: Avatar
  title: string
  description: string | Array<string>
  icon?: string | ReactNode
}

const DiscordStatus = (props: DiscordCardProps) => {
  const { data } = useSWR<any>('/api/discord', fetcher)

  const status = data?.status
  const link = 'https://discord.com/thienjs'
  const linklink = `https://cdn.discordapp.com/app-assets/383226320970055681/565945769320775680.webp`
  const id = data?.activityId
  const img = data?.activityImg
  const timeStart = data?.activityStart
  const activities: Array<Activity> = [
    /**
     * Discord User
     */
    {
      avatar: {
        alt: 'Discord Avatar',
        url: `https://cdn.discordapp.com/avatars/${status?.discord_user?.id}/${status?.discord_user?.avatar}.webp?size=256`,
      },
      title: status?.discord_user?.username,
      description: `#${status?.discord_user?.discriminator}`,
      icon: <div />,
    },

    /**
     * Spotify
     */
    ...(status?.spotify && status?.listening_to_spotify
      ? [
          {
            avatar: {
              alt: `${status?.spotify.song} - ${status?.spotify.artist}`,
              href: `https://open.spotify.com/track/${status?.spotify.track_id}`,
              url: status?.spotify.album_art_url,
            },
            title: status?.spotify.song,
            description: status?.spotify.artist,
            icon: 'feather:music',
          },
        ]
      : []),

    /**
     * All other activities
     */
    ...(status?.activities?.length > 0
      ? status?.activities?.map((activity) => {
          if (activity.id === 'custom' || activity.id.includes('spotify'))
            return null

          const hasAsset =
            activity.assets && activity.assets.large_image ? true : false
          const avatar = hasAsset
            ? {
                alt: activity.details,
                url: `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.webp`,
              }
            : {
                alt: activity.name,
                icon: true,
                url: '',
              }

          return {
            avatar,
            title: activity.name,
            description: [
              activity.details,
              ...(activity.state ? [activity.state] : []),
            ],
          }
        })
      : []),
  ].filter((item) => item !== null)

  return (
    <div className=" my-2 w-full max-w-3xl rounded-md border border-gray-100  bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
      <div className="flex justify-between ">
        <Image
          src="https://cdn.discordapp.com/avatars/925868267690672208/bd8aa214a9c54bd8e32de4cf8b91a33c.png?size=256"
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
        <div className="mr-auto ml-4">
          <div className="font-semibold">thien#0601</div>
          <div className="text-sm font-light">
            {data?.status ? data?.status : 'offline'}
          </div>
        </div>
        <FaDiscord className="h-6 w-6 text-blue-800" />
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
