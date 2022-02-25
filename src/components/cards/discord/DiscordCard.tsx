import React from 'react'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
type Props = {
  status: string
  user?: string
  activity: string
}

const DiscordCard = ({ status, user, activity }: Props) => {
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
          <div className="font-semibold">{user}#0601</div>
          <div className="text-sm font-light">{status}</div>
        </div>
        <FaDiscord className="h-6 w-6 text-blue-800" />
      </div>

      <div className="mt-2  ">{activity}</div>
    </div>
  )
}

export default DiscordCard
