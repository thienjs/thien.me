import Highlight, { defaultProps } from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula'
import github from 'prism-react-renderer/themes/github'
import duotoneDark from 'prism-react-renderer/themes/duotoneDark'
import palenight from 'prism-react-renderer/themes/palenight'
import okaidia from 'prism-react-renderer/themes/okaidia'
import vsDark from 'prism-react-renderer/themes/vsDark'

import { Language } from '~/lib/types'
import { useCopyToClipboard } from '~/lib/hooks/useCopyToClipboard'

type Props = {
  code: string
  language: Language
  metastring?: string
}

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta) => {
  if (!RE.test(meta)) {
    return () => false
  }
  const lineNumbers = RE.exec(meta)[1]
    .split(`,`)
    .map((v) => v.split(`-`).map((x) => parseInt(x, 10)))
  return (index) => {
    const lineNumber = index + 1
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    )
    return inRange
  }
}

export const CodeBlock = ({ code, language, metastring }: Props) => {
  const [isCopied, handleCopy] = useCopyToClipboard(1000, code)
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  const CopyCodeButton = (
    <button
      className={`relative left-1 top-0 ${
        isCopied ? 'text-teal-500' : 'text-gray-400'
      }`}
      onClick={() => handleCopy()}
    >
      <span className="sr-only">Copy code</span>
      <svg
        aria-hidden="true"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="transform stroke-current transition group-hover:rotate-[-4deg]"
      >
        <path
          d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.7475 16.2499L18.2475 16.2499"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.7475 19.2499L18.2475 19.2499"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <g
          className={`transition-opacity ${
            isCopied
              ? 'rotate-[-4deg] transform opacity-100 transition'
              : 'opacity-0'
          }`}
        >
          <path
            d="M15.9975 5.99988L15.9975 3.99988"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M19.9975 5.99988L20.9975 4.99988"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11.9975 5.99988L10.9975 4.99988"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </button>
  )
  return (
    <div className="overflow-auto rounded-md bg-zinc-900 bg-opacity-60 text-sm dark:bg-zinc-800">
      <div className="mb-1 flex flex-row  items-center justify-between border-b border-gray-300 dark:border-gray-700 ">
        {CopyCodeButton}
        <div className="mr-2 p-1 text-xs text-gray-400 ">{language}</div>
      </div>

      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={vsDark}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className=" flex" data-language={language}>
            <pre className="">
              {tokens.map((line, i) => {
                const lineProps = getLineProps({ line, key: i })

                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`
                }

                return (
                  <div key={i} {...lineProps}>
                    <span className="ml-4 inline-block w-8 select-none py-0.5 opacity-30">
                      {i + 1}
                    </span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        )}
      </Highlight>
    </div>
  )
}
