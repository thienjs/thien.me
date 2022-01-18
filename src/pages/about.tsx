import Image from 'next/image'
import profile from '../../public/notion-me.png'
import { AboutSection } from '../components/about/AboutSection'
import { AboutListElement } from '../components/about/AboutListElement'
import { getCurrentlyReading, getReviews } from '../lib/goodreads'
import { FaBook, FaBookOpen, FaMusic, FaStar } from 'react-icons/fa'
import Layout from '~/components/ui/Layout'
import TopTracks from '~/components/music/TopTracks'
import { GetStaticProps } from 'next'
import UnstyledLink from '~/components/links/UnstyledLink'
import NowPlaying from '~/components/music/NowPlaying'
import TechStack from '~/components/about/TechStack'

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
      <div className="text-left content-start ml-4 mb-5 mt-4">
        <Image
          src="https://github.com/thienjs.png"
          alt="Profile"
          priority={true}
          className="rounded-full"
          width={120}
          height={120}
        />
      </div>
      <div className="px-1 dark:text-gray-200 mb-4">
        <h2 className="text-md">Hello, I'm Thien</h2>
        <p className="text-sm">
          I'm a self taught developer from Connecticut, USA. After many many
          years of making websites as a hobby, I decided to follow my dreams of
          becoming web developer. I studied and read many tutorials online from
          Udemy, freecodecamp, dev.to, and many other incredible online
          rescources.
        </p>
        <p className="text-sm">
          My goals for 2022 is to find a web developer job.
        </p>
        <p className="text-sm">
          Outside of tech, I love sports, guitar, tennis, longboarding, and collecting gadgets. 
        </p>
      </div>
      <TechStack />
      <UnstyledLink href="/music" className="text-2xl font-bold mb-2">
        Music
      </UnstyledLink>
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
        Now Playing
      </h3>
      <NowPlaying />
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        Monthly Top 10
      </h3>
      <TopTracks />
      <UnstyledLink href="/music" className="text-2xl font-bold mt-8">
        Books
      </UnstyledLink>
      <AboutSection id="books" title="Currently Reading" subtitle="">
        <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
          <ul>{currentlyReadingList}</ul>
        </div>
      </AboutSection>
      <AboutSection id="books" title="Favorites" subtitle="">
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
