export default function StatsCard({ header, link, stat, isCurrency, icon }) {
  return (
    <div className=" mb-2  bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 rounded-md p-4 min-w-90 w-full">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-gray-900 dark:text-gray-100 font-semibold justify-between">
          {header}
          <div className=" ">{icon}</div>
        </div>
      </a>
      <p className="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white">
        {stat > 0 && isCurrency && '$'}
        {stat > 0 ? stat.toLocaleString() : '-'}
      </p>
    </div>
  )
}
