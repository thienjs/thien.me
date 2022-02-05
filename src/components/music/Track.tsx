export default function Track(track) {
    return (
      <div className="flex flex-row border-b border-zinc-300 dark:border-gray-800 max-w-3xl w-full mt-4">
        <p className="text-sm font-bold text-gray-400 dark:text-gray-600 mr-2">
          {track.ranking}
        </p>
        <img
          src={track.albumArtUrl}
          title={track.album}
          className="w-12 h-12 borde "
        />
        <div className="flex flex-col pl-3">
          <a
            className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {track.title}
          </a>
          <p
            className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
            color="gray.500"
          >
            {track.artist}
          </p>
        </div>
      </div>
    )
  }