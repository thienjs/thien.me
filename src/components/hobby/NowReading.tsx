import { ReactNode } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

export type NowReadingProps = {
  title: string
  subtitle?: string
  url: string
  leftPanel?: ReactNode | undefined
  rightPanel?: ReactNode | undefined
  titleSide?: ReactNode | undefined
}

export const NowReading: React.FC<NowReadingProps> = ({
  title,
  subtitle,
  url,
  leftPanel,
  rightPanel,
  titleSide,
}) => (
  <li className="flex flex-row-reverse items-center sm:flex-row mb-4 mt-6 space-x-0 sm:space-x-2  w-full text-sm  border rounded-md px-4 py-4 bg-white border-zinc-200 shadow-sm dark:border-zinc-900 dark:shadow-none cursor-pointer  dark:bg-zinc-900">
    {leftPanel && <div className="pr-2">{leftPanel}</div>}
    <div className="flex flex-row justify-between w-full md:justify-start">
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
        <p className="text-gray-600 dark:text-gray-500">{subtitle}</p>
      </div>
      {rightPanel && <div className="flex flex-row md:ml-2">{rightPanel}</div>}
    </div>
  </li>
)
