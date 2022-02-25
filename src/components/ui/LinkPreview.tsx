import Image from 'next/image'
import * as Tooltip from '@radix-ui/react-tooltip'
import classNames from '~/lib/classNames'

interface ILinkPreview {
  name: string
  href: string
  preview?: string
  alt: string
}

export default function LinkPreview({
  name,
  href,
  alt,
  preview,
}: ILinkPreview) {
  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect id="r" width="${w}" height="${h}" fill="#0f172a" />
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return (
    <Tooltip.Root delayDuration={0}>
      <Tooltip.Trigger asChild>
        <a
          className={classNames(
            'font-normal tracking-wide text-gray-200',
            'relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gray-200 after:transition-[width] after:duration-200 after:ease-out hover:after:w-full'
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {name}
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content
        side="top"
        sideOffset={16}
        className="radix-side-top:animate-slide-in radix-state-closed:animate-slide-out h-40 w-64 rounded-lg bg-gray-900/95 p-2 ring-1 ring-inset ring-gray-500/30 backdrop-blur"
      >
        <Image
          src={
            preview ||
            `https://api.microlink.io?url=${href}&screenshot=true&meta=false&colorScheme=dark&embed=screenshot.url`
          }
          alt={alt}
          className="overflow-hidden rounded-md p-2"
          width={240}
          height={144}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(240, 144)
          )}`}
          objectFit="cover"
        />
      </Tooltip.Content>
    </Tooltip.Root>
  )
}
