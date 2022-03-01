import Image from 'next/image'

import { IPodcast } from '~/types/podcast'

const Podcast = ({ name, imagePath, url }: IPodcast) => {
  return (
    <li className="hover:from-blue-start hover:to-blue-stop dark:hover:from-purple-start dark:hover:via-purple-middle dark:hover:to-purple-stop h-[128px] w-[128px] shrink-0 snap-center rounded-md bg-transparent p-1 transition-all hover:bg-gradient-to-r">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image src={imagePath} alt={name} width={128} height={128} />
      </a>
    </li>
  )
}

export { Podcast }
