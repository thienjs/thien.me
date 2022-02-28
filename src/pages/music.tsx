import NowPlaying from '~/components/music/NowPlaying'
import TopTracks from '~/components/music/TopTracks'
import Title from '~/components/ui/typography/Title'
export default function MusicPage() {
  return (
    <>
      <Title>Music</Title>

      <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        Currently listening to:
      </p>
      <NowPlaying />
      <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        My Top 10 recently:
      </p>

      <TopTracks />
    </>
  )
}
