export default function StatsCard({ header, link, stat, isCurrency, icon }) {
  return (
    <div className="font-serif text-sm text-neutral-800 dark:text-neutral-200 ">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="my-6 grid grid-cols-2 ">
          {header}
          {/* <div className=" hidden">{icon}</div> */}
          <p className="text-md ml-28 font-semibold text-neutral-900 dark:text-neutral-100">
            {stat > 0 && isCurrency && '$'}
            {stat > 0 ? stat.toLocaleString() : '-'}
          </p>
        </div>
      </a>
    </div>
  )
}
