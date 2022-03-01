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
  <li className="mb-4 mt-6 flex w-full cursor-pointer flex-row-reverse items-center space-x-0  rounded-md border  border-zinc-200 bg-white px-4 py-4 text-sm shadow-sm dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none sm:flex-row  sm:space-x-2">
    {leftPanel && <div className="pr-2">{leftPanel}</div>}
    <div className="flex w-full flex-row justify-between md:justify-start">
      <div className="flex flex-col">
        <div className="flex">
          <a href={url} className="text-title" target="_blank" rel="noreferrer">
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
