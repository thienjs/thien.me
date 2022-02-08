import React from 'react';

type Props = {
  status: string
  user?: string
};

const DiscordCard = ({status, user }: Props) => {
  return <div className='mb-2  bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-md p-4 min-w-90 w-full'>
    <div>{status}</div>
    <div>{user}</div>
  </div>;
};


export default DiscordCard