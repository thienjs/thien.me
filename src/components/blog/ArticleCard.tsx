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
    <button className="w-full text-sm my-2 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900" onClick={() => handleArticleClicked(slug)}>
      
        <div className="flex flex-col">
          <div
            className="text-md font-semibold text-left mb-1 "

          >
            {article.title}
          </div>
          {/* {JSON.stringify(article)} */}
          {/* <p>{article.summary}</p> */}
          <p className="pb-2 text-left text-gray-600 dark:text-gray-400 font-light text-sm">
            {article.summary}
          </p>
          <span className="text-xs flex text-gray-600 dark:text-gray-400 font-light">
            {new Date(article.publishedDate).toLocaleDateString(
              siteMetadata.locale,
              {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
              }
            )}{' '}
            <div className="flex  text-gray-800 dark:text-gray-200 capsize text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 ml-4 text-gray-800 dark:text-gray-400"
                fill="none"
                viewBox="0 0 22 22"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span className="ml-2 text-xs text-gray-800 dark:text-gray-400 font-light">
                {views ? new Number(views).toLocaleString() : '–––'}
              </span>
            </div>
            <div className="ml-6">{readingTimeStats.words} mins</div>
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
            <div className="ml-4">
             
            </div>
          </span>
        </div>

    </button>
  )
}
