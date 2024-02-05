import Layout from 'components/ui/Layout'
import Title from 'components/ui/typography/Title'
import { fetcher } from '~/lib/fetcher'
import { NowPlayingSong } from '~/lib/types'
import useSWR from 'swr'

export default function Now() {
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
        <h3 className="mt-20 mb-10 text-sm font-semibold text-neutral-800 dark:text-neutral-300">
          what I'm doing to now:
        </h3>
        <ul className="space-y-3 text-left font-serif text-sm text-neutral-800 dark:text-neutral-300">
          <li>- coaching tennis</li>
          <li>- walking Loki - my 15 month old puppy</li>

          <li>- staying active by working on my tennis game and weight lifting</li>

          <li>
            - listening to :{' '}
            {data?.songUrl ? (
              <a
                className=""
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.title}
              </a>
            ) : (
              <span className="">pop and jazz</span>
            )}
          </li>
        </ul>
        <div className="mt-20 text-sm text-neutral-700 dark:text-neutral-400">
          last updated: {month}.{date}.{year}
          {'   '}@ {hour}:{minute}:{second}
        </div>
      </div>
    </>
  )
}
