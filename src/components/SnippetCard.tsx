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
      <div className="max-w-3xl px-4 py-4 bg-white dark:bg-zinc-900 w-full  border  rounded-md border-gray-200 dark:border-gray-800 hover:shadow-md dark:shadow-gray-700">
        <div className="flex flex-col">
          <h3 className="text-md font-semibold text-left mb-1">
            {snippet.title}
          </h3>
          <p className="pb-2 text-left text-gray-800 dark:text-gray-400 font-light text-sm">
            {snippet.summary}
          </p>
          {/* {JSON.stringify(Snippet)} */}
          {/* <p>{Snippet.summary}</p> */}
          <span className="text-xs flex text-gray-800 dark:text-gray-400 font-light">
            {new Date(snippet.publishedDate).toLocaleDateString(
              siteMetadata.locale,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )}{' '}
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
