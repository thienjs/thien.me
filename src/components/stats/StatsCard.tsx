export default function StatsCard({ header, link, stat, isCurrency }) {
  return (
    <div className=" mb-2  bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 min-w-90 w-full">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-gray-900 dark:text-gray-100">
          {header}
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
      <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">
        {stat > 0 && isCurrency && '$'}
        {stat > 0 ? stat.toLocaleString() : '-'}
      </p>
    </div>
  )
}
