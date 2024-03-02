import { useThemeContext } from '~/hooks/useTheme'

export default function StatsCard({ header, link, stat, isCurrency, icon }) {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <div
      className="font-serif text-sm text-neutral-800 dark:text-neutral-200 "
      style={{
        color: systemTheme.text.primary,
        backgroundColor: systemTheme.background.primary,
      }}
    >
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="my-6 grid grid-cols-2 ">
          {header}
          {/* <div className=" hidden">{icon}</div> */}
          <p
            className="text-md ml-28 font-semibold text-neutral-900 dark:text-neutral-100"
            style={{
              color: systemTheme.text.accent,
              backgroundColor: systemTheme.background.primary,
            }}
          >
            {stat > 0 && isCurrency && '$'}
            {stat > 0 ? stat.toLocaleString() : '-'}
          </p>
        </div>
      </a>
    </div>
  )
}
