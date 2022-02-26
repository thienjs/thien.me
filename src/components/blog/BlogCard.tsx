import { Article } from '~/lib/types'
import Image from 'next/image'
import { handleArticleClicked } from '~/lib/handleArticleClick'
import siteMetadata from '~/data/siteMetadata'
import slugify from 'slugify'
import { useIsArticleRead } from '~/lib/hooks/useIsArticleRead'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import useSWR from 'swr'
import cn from 'classnames'
import readingTime from 'reading-time'
import { FiClock } from 'react-icons/fi'
import { Tag } from './Tag'
import { fetcher } from 'lib/fetcher'
import LikeButton from '~/components/features/LikeButton'
import { Views } from 'lib/types'

type Props = {
  article: Article
}

export function BlogCard({ article }: Props) {
  const router = useRouter()
  const slug = slugify(article.title).toLowerCase()
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = data?.total
  const [hasRead] = useIsArticleRead(slug)
  const readingTimeStats = readingTime(article.summary)

  return (
    <button
      className="my-2 mb-12 w-full border-b px-4  py-4 text-sm    hover:bg-zinc-300 dark:hover:bg-zinc-800"
      onClick={() => handleArticleClicked(slug)}
    >
      <div className="flex flex-col">
        <div className="text-md mb-1 flex justify-between text-left font-semibold ">
          {article.title}
          {hasRead && (
            <span className="ml-6 inline-flex items-center text-sm text-gray-800 opacity-75  dark:text-gray-400">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                ></path>
              </svg>

              <span className="text-xs font-extralight">read</span>
            </span>
          )}
        </div>
        <div className="mb-1 flex flex-row flex-wrap space-x-3">
          {article.tags.map((tag) => (
            <div className="mt-0.5 rounded-sm bg-zinc-200 px-3 text-xs text-gray-700 opacity-80 dark:bg-zinc-700 dark:text-gray-300">
              #{tag.name}
            </div>
          ))}
        </div>
        {/*JSON.stringify(article) */}
        {/* <p>{article.summary}</p> */}

        <p className="my-1 pb-2 text-left text-sm text-gray-600  dark:text-gray-400">
          {article.summary}
        </p>

        <span className="flex justify-end space-x-4 text-xs text-gray-600 dark:text-gray-400 ">
          <div className="capsize  flex items-center text-xs text-gray-800 dark:text-gray-200 ">
            <span className=" text-xs text-gray-800 dark:text-gray-400 ">
              {views ? new Number(views).toLocaleString() : '–––'} views.
            </span>
          </div>

          <div className="  ">{/* {readingTimeStats.words} mins. */}</div>
          <div>
            {new Date(article.publishedDate).toLocaleDateString('de-AT', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}{' '}
          </div>
        </span>
      </div>
    </button>
  )
}
