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
        <div className="border-2 p-4 rounded-md border-opacity-60 dark:border-cyan-500 border-gray-200 max-w-3xl  ">
          <div className="flex flex-col">
            <h3 className="text-xl text-left">{snippet.title}</h3>
            {/* {JSON.stringify(Snippet)} */}
            {/* <p>{Snippet.summary}</p> */}
            <span className="text-left">
              {new Date(snippet.publishedDate).toLocaleDateString(
                siteMetadata.locale,
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }
              )}{' '}
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

  );
}
