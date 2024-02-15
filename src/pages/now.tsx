import { fetcher } from '~/lib/fetcher'
import { NowPlayingSong } from '~/lib/types'
import { motion } from 'framer-motion'
import {
  TotalPosts,
  BlogViews,
  TotalSnippets,
  GithubFollowers,
  GithubStars,
  TwitterFollowers,
} from '~/components/now'
import useSWR from 'swr'
import { Description, H2, Title } from '~/components/ui/typography'

export const NowItem = ({ children }) => {
  return (
    <motion.div
    className='text-neutral-800 dark:text-neutral-300'
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
  var year = new Date().getFullYear()
  var date = new Date().getDate()
  var month = new Date().getMonth()
  var time = new Date().getTime()
  var hour = new Date().getHours()
  var minute = new Date().getMinutes()
  var second = new Date().getSeconds()
  var lokibday = '2021-05-10'
  var birthDate = new Date(lokibday)
  var today = new Date()
  var age = year - birthDate.getFullYear()
  var lokimonth = birthDate.getMonth() - month

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
          className="mt-20 mb-10 text-sm font-semibold text-neutral-900 dark:text-neutral-300"
        >
          <Title>

         Now
          </Title>
          <Description>what I'm up to:</Description>
        </motion.div>
        <ul className="space-y-5 text-left text-sm font-serif text-neutral-800 dark:text-neutral-300">
          <NowItem>- coaching tennis</NowItem>
          <NowItem>- walking Loki - my {age} year old doodle best friend</NowItem>
          <NowItem>
            - connecting with other developers on github
          </NowItem>
          <NowItem>
            <p className="ml-6">- github followers: {<GithubFollowers />}</p>
          </NowItem>
          <NowItem>
            <p className="ml-6">- github stars: {<GithubStars />}</p>
          </NowItem>
          <NowItem>
            - writing blog posts
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
          <NowItem>- reading: Be Useful - Arnold Schwarzenegger</NowItem>
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
