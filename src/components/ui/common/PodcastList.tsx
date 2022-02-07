import { IPodcast } from '~/types/podcast';
import { Podcast } from './Podcast';

export interface PodcastListProps {
	podcasts: IPodcast[];
}

const PodcastList = ({ podcasts }: PodcastListProps) => {
	return (
		<ul className="relative w-full flex gap-4 snap-x scroll-mandatory overflow-x-auto pb-14">
			{podcasts.map((podcast) => (
				<Podcast {...podcast} key={podcast.name} />
			))}
		</ul>
	);
};

export { PodcastList };