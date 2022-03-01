import { formatDistanceToNowStrict, intlFormat } from 'date-fns'
import { BiLink } from 'react-icons/bi'
import { GoRepoForked, GoStar } from 'react-icons/go'
import { MdStarOutline } from 'react-icons/md'

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
  <div className="my-2 w-full rounded-md border border-gray-100 bg-white px-4 py-4 text-sm  shadow-sm  shadow-gray-300 hover:bg-zinc-100 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none dark:hover:bg-zinc-800">
    <a
      className="animated-underline text-lg font-semibold "
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
    </a>

    {props.description && (
      <p className="text-md my-1 pb-1 text-gray-600 dark:text-gray-400">
        {props.description}
      </p>
    )}
    {props.homepageUrl && (
      <div className="flex ">
        <BiLink className="mt-1.5" color="gray" />

        <p className="text-md  my-1 ml-1 pb-1 text-sm text-gray-600 dark:text-gray-400">
          {props.homepageUrl}
        </p>
      </div>
    )}

    <div className="flex flex-wrap text-gray-600 dark:text-gray-400 ">
      {props.language && (
        <div className="mr-2 flex text-xs">
          <span className="mr-2 block h-3 w-3 rounded-full">
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
            className="mr-2 flex flex-row pb-0 text-xs font-light  "
          >
            <MdStarOutline
              fill="currentColor"
              className="text-nm mr-1 h-4 w-4 align-text-bottom font-light hover:fill-yellow-400 "
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
            <GoRepoForked fill="currentColor" className="mr-1 h-3 w-3  " />
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

export default RepoCard
