import { Movie } from '~/lib/types'
import Image from 'next/image'

import siteMetadata from '~/data/siteMetadata'
import slugify from 'slugify'

import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import useSWR from 'swr'
import cn from 'classnames'
import readingTime from 'reading-time'

import { fetcher } from 'lib/fetcher'
import { Views } from 'lib/types'

type Props = {
  movie: Movie
}

export function MovieCard({ movie }: Props) {
  const router = useRouter()
  const slug = slugify(movie.title).toLowerCase()

  const readingTimeStats = readingTime(movie.summary)

  return (
    <div className="my-2 w-full rounded-md border border-gray-100 bg-white px-4  py-4  text-sm shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
      <div>
        <div className="flex flex-col">
          <h3 className="text-md mb-1 text-left font-semibold">
            {movie.title}
          </h3>
        </div>
      </div>
    </div>
  )
}
