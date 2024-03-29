import useSWR from 'swr'

import { fetcher } from 'lib/fetcher'
import { TopTracks } from 'lib/types'
import Track from 'components/music/Track'
import { useThemeContext } from '~/hooks/useTheme'

export default function Tracks() {
  const { systemTheme, setTheme } = useThemeContext();
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher)

  if (!data) {
    return null
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  )
}
