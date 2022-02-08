import React from 'react';
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
type Props = {
  status: string
  user?: string
  activity: string
}

const DiscordCard = ({ status, user, activity }: Props) => {
  return (
    <div className=" max-w-3xl px-4 py-4 bg-white dark:bg-zinc-900 w-full  border my-2 rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
      <div className="flex justify-between ">
        <Image
          src="https://cdn.discordapp.com/avatars/925868267690672208/bd8aa214a9c54bd8e32de4cf8b91a33c.png?size=256"
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
        <div className='mr-auto ml-4'>
          <div className="font-semibold">{user}#0601</div>
          <div className="font-light text-sm">{status}</div>
        </div>
      <FaDiscord className='text-blue-800 w-6 h-6' />
      </div>

      <div className="mt-2  ">{activity}</div>
    </div>
  )
}


export default DiscordCard