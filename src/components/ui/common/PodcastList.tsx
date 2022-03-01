import { IPodcast } from '~/types/podcast'

import { Podcast } from './Podcast'

export interface PodcastListProps {
  podcasts: IPodcast[]
}

const PodcastList = ({ podcasts }: PodcastListProps) => {
  return (
    <ul className="scroll-mandatory relative flex w-full snap-x gap-4 overflow-x-auto pb-14">
      {podcasts.map((podcast) => (
        <Podcast {...podcast} key={podcast.name} />
      ))}
    </ul>
  )
}

export { PodcastList }
