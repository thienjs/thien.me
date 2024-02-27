import { useThemeContext } from '~/hooks/useTheme'

export default function Track(track) {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <div
      className="mt-4 flex w-full max-w-5xl flex-row border-b "
      style={{
        borderColor: systemTheme.background.secondary,
      }}
    >
      <p
        className="mr-3 text-sm font-bold "
        style={{
          color: systemTheme.text.accent2,
        }}
      >
        {track.ranking}
      </p>
      <img
        src={track.albumArtUrl}
        title={track.album}
        className="h-12 w-12 rounded-sm shadow-sm "
      />
      <div className="flex flex-col pl-3">
        <a
          className="w-60 truncate font-medium text-gray-900 dark:text-gray-100 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: systemTheme.text.primary,
          }}
        >
          {track.title}
        </a>
        <p
          className="mb-4 w-60 truncate text-sm text-gray-500 sm:w-96 md:w-full"
          style={{
            color: systemTheme.text.accent,
          }}
        >
          {track.artist}
        </p>
      </div>
    </div>
  )
}
