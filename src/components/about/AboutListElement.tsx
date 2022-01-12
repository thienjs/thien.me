import { ReactNode } from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

export type AboutListElementProps = {
  title: string
  subtitle?: string
  url: string
  leftPanel?: ReactNode | undefined
  rightPanel?: ReactNode | undefined
  titleSide?: ReactNode | undefined
}

export const AboutListElement: React.FC<AboutListElementProps> = ({
  title,
  subtitle,
  url,
  leftPanel,
  rightPanel,
  titleSide,
}) => (
  <li className="flex py-4 text-sm border-b border-gray-100 dark:border-gray-800 md:last:border-b-0">
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