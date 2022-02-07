import { intlFormat, formatDistanceToNowStrict } from "date-fns";

import { GoRepoForked, GoStar } from 'react-icons/go'
import { BiLink } from 'react-icons/bi'

import styles from './RepoCard.module.css'

type Props = {
  name: string
  url: string
  description?: string
  language?: {
    name: string
    color?: string
  }
  stars?: number
  forks?: number
  updatedAt: string
  deployments?: string
  homepageUrl: string
}

const RepoCard = (props: Props) => (
  <div className="w-full text-sm my-2 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
    <a
      className="text-lg font-semibold "
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>

    {props.description && (
      <p className="text-md text-gray-600 dark:text-gray-400 my-1 pb-1">
        {props.description}
      </p>
    )}
    {props.homepageUrl && (
      <div className="flex ">
        <BiLink className="mt-1.5" color="gray"/>

        <p className="text-sm  ml-1 text-md text-gray-600 dark:text-gray-400 my-1 pb-1">{props.homepageUrl}</p>
      </div>
    )}

    <div className="flex flex-wrap text-gray-600 dark:text-gray-400 ">
      {props.language && (
        <div className="text-xs mr-2 ">
          <span className={styles.language_color}>
            <style jsx>{`
              span {
                background-color: ${props.language.color};
              }
            `}</style>
          </span>
          <span>{props.language.name}</span>
        </div>
      )}

      {props.stars > 0 && (
        <div className="pb-0">
          <a
            href={`${props.url}/stargazers`}
            title={`${props.stars.toLocaleString('en-US')} ${
              props.stars === 1 ? 'star' : 'stars'
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row mr-2 text-xs font-light pb-0  "
          >
            <GoStar
              fill="currentColor"
              className="align-text-bottom mr-1 w-4 h-4 text-nm font-light hover:fill-yellow-400"
            />
            <span>{props.stars.toLocaleString('en-US')}</span>
          </a>
        </div>
      )}

      {props.forks > 0 && (
        <div className="text-xs">
          <a
            href={`${props.url}/network/members`}
            title={`${props.forks.toLocaleString('en-US')} ${
              props.forks === 1 ? 'fork' : 'forks'
            }`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoRepoForked fill="currentColor" className={styles.octicon} />
            <span>{props.forks.toLocaleString('en-US')}</span>
          </a>
        </div>
      )}

      <div
        className="text-xs "
        title={intlFormat(
          new Date(props.updatedAt),
          {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZoneName: 'short',
          },
          {
            locale: 'en-US',
          }
        )}
      >
        <span>
          Updated{' '}
          {formatDistanceToNowStrict(new Date(props.updatedAt), {
            addSuffix: true,
          })}
        </span>
      </div>
    </div>
  </div>
)

export default RepoCard;