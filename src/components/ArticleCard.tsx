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

import {fetcher} from 'lib/fetcher';
import { Views } from 'lib/types';


type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const router = useRouter();
  const slug = slugify(article.title).toLowerCase();
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  const [hasRead] = useIsArticleRead(slug);

  return (
    <div>
      <button onClick={() => handleArticleClicked(slug)}>
        <div className="group">
          <div className="text-left w-full">
            <h3 className="mt-2 text-2xl">{article.title}</h3>
            {/* {JSON.stringify(article)} */}
            {/* <p>{article.summary}</p> */}
            <span className="text-base font-semibold flex items-center px-auto">
              {new Date(article.publishedDate).toLocaleDateString(
                siteMetadata.locale,
                {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                }
              )}{' '}
              
              <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="ml-2 align-baseline capsize">
              {views ? new Number(views).toLocaleString() : '–––'}
            </span>
          </div>
              {hasRead && (
                <span className="text-sm inline-flex items-center text-teal-600 dark:text-teal-800 opacity-75 ml-3">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                    ></path>
                  </svg>
                  
                  <span>read</span>
                </span>
              )}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
