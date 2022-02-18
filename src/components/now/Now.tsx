import Layout from 'components/ui/Layout'
import Title from 'components/ui/typography/Title'
import {fetcher} from '~/lib/fetcher';
import { NowPlayingSong } from '~/lib/types';
import useSWR from 'swr';

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

  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <>
      <div className="min-w-96 text-left">
        <Title>Now</Title>
        <h3 className="text-sm mb-8 text-neutral-900 dark:text-neutral-300">
          what i'm up to now:
        </h3>
        <ul className="text-sm text-left space-y-3 text-neutral-800 dark:text-neutral-300">
          <li>- applying for my first tech job</li>
          <li>- walking Loki - my 8 month old puppy</li>

          <li>
            - focusing on getting better at React, Nextjs, Typescript, and
            communicating with backends
          </li>
          <li>- solidifying my fudamentals of javascript, css, and html</li>
          <li>- learning spanish (slowly)</li>
          <li>- reading/listening to books when I can</li>
          <li>- staying active by working on my tennis game</li>
          <li>- starting to write meaningful and helpful blog posts</li>
          <li>- listening to : {data?.title}</li>
        </ul>
        <div className="mt-20 text-sm text-neutral-700 dark:text-neutral-400">
          last updated: {month}.{date}.{year}
          {'   '}@    {hour}:{minute}:{second}
        </div>
      </div>
    </>
  )
}
