import { Snippet } from '~/lib/types'
import Image from 'next/image'
import { handleSnippetClicked } from '~/lib/handleSnippetClick'
import siteMetadata from '~/data/siteMetadata'
import slugify from 'slugify'
import { useIsSnippetRead } from '~/lib/hooks/useIsSnippetRead'
import { useRouter } from 'next/dist/client/router'
import { useThemeContext } from '~/hooks/useTheme';

type Props = {
  snippet: Snippet
}

export function SnippetCard({ snippet }: Props) {
  const router = useRouter()
  const slug = slugify(snippet.title).toLowerCase()
  const { systemTheme, setTheme } = useThemeContext();

  const [hasRead] = useIsSnippetRead(slug)

  return (
    <button
      onClick={() => handleSnippetClicked(slug)}
      className="mb- my-2 w-full rounded-md  px-4 py-4 text-sm "
    >
      <div
        className=" w-full rounded-md border  px-4 py-4 text-sm  shadow-sm  shadow-gray-300  dark:shadow-none "
        style={{
          color: systemTheme.text.secondary,
          backgroundColor: systemTheme.background.secondary,
        }}
      >
        <div className="flex flex-col">
          <h3
            className="text-md mb-1 text-left font-semibold"
            style={{ color: systemTheme.text.title }}
          >
            {snippet.title}
          </h3>
          <p
            className="pb-2 text-left text-sm font-light "
            style={{ color: systemTheme.text.secondary }}
          >
            {snippet.summary}
          </p>
          <div className="mb-1 flex flex-row flex-wrap space-x-3">
            {snippet.tags.map((tag) => (
              <div
                className="mt-0.5 rounded-sm  px-3 text-xs  opacity-80 "
                style={{
                  color: systemTheme.background.primary,
                  backgroundColor: systemTheme.text.accent2,
                  borderColor: systemTheme.text.accent,
                }}
              >
                #{tag.name}
              </div>
            ))}
          </div>
          {/* {JSON.stringify(Snippet)} */}
          {/* <p>{Snippet.summary}</p> */}
          <span
            className="flex text-xs font-light "
            style={{
              color: systemTheme.text.secondary,
              backgroundColor: systemTheme.background.secondary,
            }}
          >
            {/*{new Date(snippet.publishedDate).toLocaleDateString(
              siteMetadata.locale,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }
            )}{' '}*/}
            {/*          {hasRead && (
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
)} */}
          </span>
        </div>
      </div>
    </button>
  )
}
