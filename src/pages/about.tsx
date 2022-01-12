import Image from 'next/image'
import profile from '../../public/notion-me.png'
import { AboutSection } from '../components/about/AboutSection'
import { AboutListElement } from '../components/about/AboutListElement'
import { getCurrentlyReading, getReviews } from '../lib/goodreads'
import { FaBook, FaBookOpen, FaMusic, FaStar } from 'react-icons/fa'
import Layout from '~/components/ui/Layout'
import TopTracks from '~/components/music/TopTracks'
import { GetStaticProps } from 'next'

export type AboutProps = {
  reviews: Awaited<ReturnType<typeof getReviews>>
  currentlyReading: Awaited<ReturnType<typeof getReviews>>
}

const AboutPage = ({ reviews, currentlyReading }) => {
  const reviewList = reviews.map((r) => (
    <AboutListElement
      key={r.url}
      title={r.title}
      subtitle={r.author}
      url={r.url}
      leftPanel={
        <div className="flex text-xs font-bold leading-6 text-subtitle items-center">
          {r.rating} <FaStar className="text-yellow-500 ml-1" />
        </div>
      }
    />
  ))
  const currentlyReadingList = currentlyReading.map((r) => (
    <AboutListElement
      key={r.url}
      title={r.title}
      subtitle={r.author}
      url={r.url}
    />
  ))

  return (
    <Layout>
      <div className="text-left content-start ">
        <Image
          src="https://github.com/thienjs.png"
          alt="Profile"
          priority={true}
          className="rounded-full"
          width={100}
          height={100}
        />
      </div>
      <h2>hello im thien</h2>
      <p>
        i have always been around the web. from geocites to myscpace, to tumblr.
        ive always enjoyed customizing websites. during covid, i decided to
        finally learn to code. i took udemy courses and read online tutorials on
        what language to learn. I started with swift and python. but eventually
        settled with javascript. Javascript always scared me when i was younger.
        but once i learned it it was really amazing.
      </p>
      <TopTracks/>
      <AboutSection id="books" title="currently reading" Icon={FaBookOpen}>
        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
          <ul>{currentlyReadingList}</ul>
        </div>
      </AboutSection>

      <AboutSection
        id="books"
        title="read"
        subtitle="some of my favorite books"
        Icon={FaBook}
      >
        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
          <ul>{reviewList.slice(0, 5)}</ul>
          <ul>{reviewList.slice(5, 10)}</ul>
        </div>
      </AboutSection>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const reviews = await getReviews({ limit: 10 })
  const currentlyReading = await getCurrentlyReading({ limit: 2 })

  return {
    props: {
      reviews,
      currentlyReading,
    },
    revalidate: 60 * 60 * 1, // Revalidate after 1 hour
  }
}

export default AboutPage
