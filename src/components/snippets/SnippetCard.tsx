import { Snippet } from '~/lib/types';
import Image from 'next/image';
import { handleSnippetClicked } from '~/lib/handleSnippetClick';
import siteMetadata from '~/data/siteMetadata';
import slugify from 'slugify';
import { useIsSnippetRead } from '~/lib/hooks/useIsSnippetRead';
import { useRouter } from 'next/dist/client/router';

type Props = {
  snippet: Snippet;
};

export function SnippetCard({ snippet }: Props) {
  const router = useRouter();
  const slug = slugify(snippet.title).toLowerCase();

  const [hasRead] = useIsSnippetRead(slug);

  return (
    <button onClick={() => handleSnippetClicked(slug)}>
  <div className="w-full text-sm my-2 px-4 py-4 bg-white dark:bg-zinc-900 hover:bg-zinc-300 dark:hover:bg-zinc-800  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
        <div className="flex flex-col">
          <h3 className="text-md font-semibold text-left mb-1">
            {snippet.title}
          </h3>
          <p className="pb-2 text-left text-gray-800 dark:text-gray-400 font-light text-sm">
            {snippet.summary}
          </p>
          <div className="flex flex-row space-x-3 flex-wrap mb-1">
          {snippet.tags.map((tag) => (
            <div className="mt-0.5 rounded-sm bg-zinc-200 dark:bg-zinc-700 px-3 opacity-80 text-xs text-gray-700 dark:text-gray-300">
              #{tag.name}
            </div>
          ))}
        </div>
          {/* {JSON.stringify(Snippet)} */}
          {/* <p>{Snippet.summary}</p> */}
          <span className="text-xs flex text-gray-800 dark:text-gray-400 font-light">
            {/*{new Date(snippet.publishedDate).toLocaleDateString(
              siteMetadata.locale,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )}{' '}*/}
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
          </span>
        </div>
      </div>
    </button>
  )
}
