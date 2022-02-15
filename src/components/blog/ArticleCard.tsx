import { Article } from '~/lib/types';
import Image from 'next/image';
import { handleArticleClicked } from '~/lib/handleArticleClick';
import siteMetadata from '~/data/siteMetadata';
import slugify from 'slugify';
import { useIsArticleRead } from '~/lib/hooks/useIsArticleRead';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';
import readingTime from 'reading-time'
import { FiClock } from 'react-icons/fi'

import { fetcher } from 'lib/fetcher'
import LikeButton from '~/components/features/LikeButton'
import { Views } from 'lib/types'

type Props = {
  article: Article
}

export function ArticleCard({ article }: Props) {
  const router = useRouter()
  const slug = slugify(article.title).toLowerCase()
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher)
  const views = data?.total
  const [hasRead] = useIsArticleRead(slug)
  const readingTimeStats = readingTime(article.summary)

  return (
    <button
      className="w-full text-sm my-2 px-4 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800 border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900"
      onClick={() => handleArticleClicked(slug)}
    >
      <div className="flex flex-col">
        <div className="flex text-md font-semibold text-left mb-1 justify-between ">
          {article.title}
          {hasRead && (
            <span className="text-sm inline-flex items-center text-gray-800 dark:text-gray-400 opacity-75  ml-6">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                ></path>
              </svg>

              <span className="font-extralight text-xs">read</span>
            </span>
          )}
        </div>

        {/* {JSON.stringify(article)} */}
        {/* <p>{article.summary}</p> */}
        <p className="pb-2 my-1 text-left text-gray-600 dark:text-gray-400  text-sm">
          {article.summary}
        </p>
        <span className="text-xs flex text-gray-600 dark:text-gray-400 justify-end space-x-4 ">
          <div className="flex  text-gray-800 dark:text-gray-200 capsize text-xs items-center ">
            <span className=" text-xs text-gray-800 dark:text-gray-400 ">
              {views ? new Number(views).toLocaleString() : '–––'} views.
            </span>
          </div>
          <div className="  ">
           {/* {readingTimeStats.words} mins. */}
          </div>
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
