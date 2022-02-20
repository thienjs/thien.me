export default function StatsCard({ header, link, stat, isCurrency, icon }) {
  return (
    <div className="text-sm text-neutral-800 dark:text-neutral-200 font-serif ">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="grid grid-cols-2 my-6 ">
          {header}
          {/* <div className=" hidden">{icon}</div> */}
          <p className="font-semibold text-md ml-28 text-neutral-900 dark:text-neutral-100">
            {stat > 0 && isCurrency && '$'}
            {stat > 0 ? stat.toLocaleString() : '-'}
          </p>
        </div>
      </a>
    </div>
  )
}
