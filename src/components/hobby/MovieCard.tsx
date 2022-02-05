import { Movie } from '~/lib/types';
import Image from 'next/image';

import siteMetadata from '~/data/siteMetadata';
import slugify from 'slugify';

import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';
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
    <div className="w-full text-sm my-2 px-4 py-4 bg-white dark:bg-zinc-900  border  rounded-md border-gray-100 shadow-sm shadow-gray-300 dark:shadow-none dark:border-zinc-900">
    <div>
        <div className="flex flex-col">
          <h3 className="text-md font-semibold text-left mb-1">
            {movie.title}
          </h3>
          

          
        </div>
      </div>
    </div>
  )
}
