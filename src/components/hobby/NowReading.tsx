import { ReactNode } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { useThemeContext } from '~/hooks/useTheme'

export type NowReadingProps = {
  title: string
  subtitle?: string
  url: string
  leftPanel?: ReactNode | undefined
  rightPanel?: ReactNode | undefined
  titleSide?: ReactNode | undefined
}

export function NowReading({
  title,
  subtitle,
  url,
  leftPanel,
  rightPanel,
  titleSide,
}: NowReadingProps) {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <li
      className="mb-4 mt-6 flex w-full cursor-pointer flex-row-reverse items-center space-x-0  rounded-md border   px-4 py-4 text-sm shadow-none sm:flex-row  sm:space-x-2"
      style={{
        color: systemTheme.text.secondary,
        backgroundColor: systemTheme.background.secondary,
        borderColor: systemTheme.text.secondary,
      }}
    >
      {leftPanel && <div className="pr-2">{leftPanel}</div>}
      <div className="flex w-full flex-row justify-between md:justify-start">
        <div className="flex flex-col">
          <div className="flex">
            <a href={url} className="text-title" target="_blank">
              <span className="flex">
                {title}{' '}
                <FaExternalLinkAlt className="ml-1 self-center" size="0.7em" />
              </span>
            </a>
            {titleSide}
          </div>
          <p
            className=""
            style={{
              color: systemTheme.text.accent,

            }}
          >
            {subtitle}
          </p>
        </div>
        {rightPanel && (
          <div className="flex flex-row md:ml-2">{rightPanel}</div>
        )}
      </div>
    </li>
  )
}
export default NowReading
