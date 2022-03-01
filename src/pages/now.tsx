import { motion } from 'framer-motion'
import useSWR from 'swr'

import {
  BlogViews,
  GithubFollowers,
  GithubStars,
  TotalPosts,
  TotalSnippets,
  TwitterFollowers,
} from '~/components/now'
import { fetcher } from '~/lib/fetcher'
import { NowPlayingSong } from '~/lib/types'

export const NowItem = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3, duration: 0.7 }}
      variants={{
        hidden: {
          opacity: 0.1,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function NowPage() {
  const year = new Date().getFullYear()
  const date = new Date().getDate()
  const month = new Date().getMonth()
  const time = new Date().getTime()
  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const second = new Date().getSeconds()
  const lokibday = '2021-05-10'
  const birthDate = new Date(lokibday)
  const today = new Date()
  const age = year - birthDate.getFullYear()
  const lokimonth = birthDate.getMonth() - month

  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher)

  return (
    <>
      <div className="min-w-96 text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          className="mt-20 mb-10 text-sm font-semibold text-neutral-800 dark:text-neutral-300"
        >
          What I'm up to now:
        </motion.div>
        <ul className="space-y-3 text-left font-serif text-sm text-neutral-800 dark:text-neutral-300">
          <NowItem>- applying for my first tech job</NowItem>
          <NowItem>- taking more risks</NowItem>
          <NowItem>- walking Loki - my 9 month old puppy</NowItem>
          <NowItem>
            - focusing on getting better at React, Nextjs, Typescript, API's
          </NowItem>
          <NowItem>
            - diving deep into typography, fonts, icons, and spacing
          </NowItem>
          <NowItem>- learning spanish (slowly)</NowItem>
          <NowItem>- staying active by working on my tennis game</NowItem>
          <NowItem>
            - connecting with other developers on github and twitter
          </NowItem>
          <NowItem>
            <p className="ml-6">- github followers: {<GithubFollowers />}</p>
          </NowItem>
          <NowItem>
            <p className="ml-6">- github stars: {<GithubStars />}</p>
          </NowItem>
          <NowItem>
            <p className="ml-6">- twitter followers: {<TwitterFollowers />}</p>
          </NowItem>
          <NowItem>
            - attempting to write more meaningful and helpful blog posts
          </NowItem>
          <NowItem>
            <p className="ml-6">- blog posts: {<TotalPosts />}</p>
          </NowItem>
          <NowItem>
            <p className="ml-6">- blog views: {<BlogViews />} </p>
          </NowItem>
          <NowItem>
            <p className="ml-6">- snippets: {<TotalSnippets />} </p>
          </NowItem>
          <NowItem>- reading: Open - Andre Agassi</NowItem>
          <NowItem>
            - listening to:{' '}
            {data?.songUrl ? (
              <a
                className=""
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.title} - {data?.artist}
              </a>
            ) : (
              <span className="">a lot of 70's music</span>
            )}
          </NowItem>
        </ul>
        <div className="mt-32 text-xs text-neutral-700 dark:text-neutral-400">
          this page was automatically updated @ {month}.{date}.{year}.{'   '}{' '}
          {hour}:{minute}:{second}
        </div>
      </div>
    </>
  )
}
