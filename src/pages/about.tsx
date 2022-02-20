import Image from 'next/image'

import { AboutSection } from '../components/about/AboutSection'
import { AboutListElement } from '../components/about/AboutListElement'
import { getCurrentlyReading, getReviews } from '../lib/goodreads'
import { FaBook, FaBookOpen, FaMusic, FaStar } from 'react-icons/fa'
import Layout from '~/components/ui/Layout'
import TopTracks from '~/components/music/TopTracks'
import { GetStaticProps } from 'next'
import UnstyledLink from '~/components/ui/links/UnstyledLink'
import NowPlaying from '~/components/music/NowPlaying'
import TechStack from '~/components/about/TechStack'
import Link from 'next/link'
import Title from '~/components/ui/typography/Title'

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
      <div className="flex text-left   mb-5 mt-20 ">
        <div className="w-16 h-16 mt-4 mr-4 ml-2 ">
          <Image
            src="https://github.com/thienjs.png"
            alt="Profile"
            priority={false}
            className="rounded-md"
            width={80}
            height={80}
          />
        </div>
        <div className="ml-2 mt-4">
          <h2 className="text-lg font-semibold dark:text-gray-300 text-neutral-800">
            Thien Tran
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm">
            Web Developer from Connecticut, USA
          </p>
          <p className="text-gray-500 dark:text-neutral-500 text-sm">
            hi@thien.me
          </p>
        </div>
      </div>
      <div className=" dark:text-gray-200 mb-4 border p-5 rounded-lg border-neutral-300 dark:border-neutral-700 bg-zinc-300 dark:bg-zinc-900 font-serif">
        <p className=" mb-2 text-neutral-600 dark:text-neutral-400">
          I'm a self taught developer looking for my first job in tech. I have a
          passion for creating elegant, user friendly solutions using my problem
          solving abilities and design skills.
        </p>
        <p className="mb-2 text-neutral-600 dark:text-neutral-400">
          I want to create tools that will help users solve problems.
        </p>
        <p className="mb-2 text-neutral-600 dark:text-neutral-400">
          Outside of tech, I love tennis, guitar, skating, movies, and
          collecting gadgets.
        </p>
      </div>

      <h2 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mt-10 mb-6">
        Contact
      </h2>
      <div className="flex mt-6">
        <ul className="text-sm text-neutral-500 dark:text-neutral-400 space-y-3">
          <li>Github</li>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Email</li>
        </ul>
        <ul className="text-sm  text-neutral-800 dark:text-neutral-300 space-y-3 ml-44">
          <li>
            <a
              href="https://github.com/thienjs"
              className="hover:text-cyan-500"
            >
              thienjs
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/thienjs"
              className="hover:text-cyan-500"
            >
              thienjs
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/thientsx"
              className="hover:text-cyan-500"
            >
              thientsx
            </a>
          </li>
          <li>
            <a href="mailto:hi@thien.me" className="hover:text-cyan-500">
              hi@thien.me
            </a>
          </li>
        </ul>
      </div>

      <div className="text-sm font-semibold text-gray-800 dark:text-gray-300 mt-10 mb-6">
        Stack
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <ul className="text-sm text-neutral-500 dark:text-neutral-400 ">
          <li>Frontend</li>
        </ul>
        <ul className="text-sm ml-10 text-neutral-600 dark:text-neutral-300 ">
          <li className="mb-4 flex flex-col text-neutral-800 dark:text-neutral-300 ">
            <p>React</p>
            <span className="text-xs text-neutral-500 dark:text-neutral-700">
              3 years
            </span>
          </li>
          <li className="mb-4 flex flex-col">
            <p className="text-neutral-800 dark:text-neutral-300">Nextjs</p>
            <span className="text-xs text-neutral-500 dark:text-neutral-700">
              2 years
            </span>
          </li>
          <li className="mb-4 flex flex-col">
            <p className="text-neutral-800 dark:text-neutral-300">
              Tailwindcss
            </p>
            <span className="text-xs text-neutral-500 dark:text-neutral-700">
              2 years
            </span>
          </li>
          <li className="mb-4 flex flex-col">
            <p className="text-neutral-800 dark:text-neutral-300">Typescript</p>
            <span className="text-xs text-neutral-500 dark:text-neutral-700">
              1 year
            </span>
          </li>
        </ul>
        <ul className="text-sm text-neutral-500 dark:text-neutral-400 ">
          <li>Backend</li>
        </ul>
        <ul className="text-sm ml-10 text-neutral-600 dark:text-neutral-300">
          <li className="mb-4 flex flex-col">
            <p className="text-neutral-800 dark:text-neutral-300">Postgres</p>
            <span className="text-xs text-neutral-500 dark:text-neutral-700">
              1 year
            </span>
          </li>
          <li className="mb-4 flex flex-col">
            <p className="text-neutral-800 dark:text-neutral-300">MySql</p>
            <span className="text-xs text-neutral-500 dark:text-neutral-700">
              1 year
            </span>
          </li>
          <li className="mb-4 flex flex-col">
            <p className="text-neutral-800 dark:text-neutral-300">MongoDB</p>
            <span className="text-xs text-neutral-500 dark:text-neutral-700">
              2 years
            </span>
          </li>
        </ul>
      </div>

      {/*  <TechStack />
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
    </AboutSection> */}
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
