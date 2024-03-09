import { intlFormat, formatDistanceToNowStrict } from 'date-fns'

import { GoRepoForked, GoStar } from 'react-icons/go'
import { BiLink } from 'react-icons/bi'
import { MdStarOutline } from 'react-icons/md'
import { useThemeContext } from '~/hooks/useTheme'

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

const RepoCard = (props: Props) => {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <div
      className="my-2 w-full rounded-md  px-4 py-4 text-sm  shadow-sm "
      style={{
        color: systemTheme.text.accent2,
        backgroundColor: systemTheme.background.secondary,
      }}
    >
      <a
        className="animated-underline text-lg font-semibold "
        style={{
          color: systemTheme.text.accent2,
        }}
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.name}
      </a>

      {props.description && (
        <p
          className="text-md my-1 pb-1 "
          style={{
            color: systemTheme.text.secondary,
          }}
        >
          {props.description}
        </p>
      )}
      {props.homepageUrl && (
        <div className="flex ">
          <BiLink
            className="mt-1.5"
            color="gray"
            style={{
              color: systemTheme.text.accent,
            }}
          />

          <p
            className="text-md  my-1 ml-1 pb-1 text-sm  "
            style={{
              color: systemTheme.text.accent,
            }}
          >
            {props.homepageUrl}
          </p>
        </div>
      )}

      <div className="flex   ">
        {props.language && (
          <div className="mr-2 flex text-xs">
            <span className="mr-2 block h-3 w-3 rounded-full">
              <style jsx>{`
                span {
                  background-color: ${props.language.color};
                }
              `}</style>
            </span>
            <span
              style={{
                color: systemTheme.text.accent2,
              }}
            >
              {props.language.name}
            </span>
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
                className="text-nm mr-1 h-4 w-4 align-text-bottom font-light text-yellow-400 "
              />
              <span
                style={{
                  color: systemTheme.text.accent2,
                }}
              >
                {props.stars.toLocaleString('en-US')}
              </span>
            </a>
          </div>
        )}

        {props.forks > 0 && (
          <div className=" ">
            <a
              href={`${props.url}/network/members`}
              title={`${props.forks.toLocaleString('en-US')} ${
                props.forks === 1 ? 'fork' : 'forks'
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 flex flex-row pb-0 text-xs font-light  "
            >
              <GoRepoForked
                fill="currentColor"
                className=" mr-1 h-4 w-4 align-text-bottom font-light text-blue-400 "
              />
              <span
                style={{
                  color: systemTheme.text.accent2,
                }}
              >
                {props.forks.toLocaleString('en-US')}
              </span>
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
}

export default RepoCard
