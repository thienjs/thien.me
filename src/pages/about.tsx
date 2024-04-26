import Image from 'next/image'

import { AboutListElement } from '../components/about/AboutListElement'
import { getCurrentlyReading, getReviews } from '../lib/goodreads'
import { FaBook, FaBookOpen, FaMusic, FaStar } from 'react-icons/fa'
import TopTracks from '~/components/music/TopTracks'
import { GetStaticProps } from 'next'
import UnstyledLink from '~/components/ui/links/UnstyledLink'
import NowPlaying from '~/components/music/NowPlaying'
import TechStack from '~/components/about/TechStack'
import Link from 'next/link'
import { Title, H2, Description  } from '~/components/ui/typography'
import { motion } from 'framer-motion'
import { useThemeContext } from '~/hooks/useTheme';
export type AboutProps = {
  reviews: Awaited<ReturnType<typeof getReviews>>
  currentlyReading: Awaited<ReturnType<typeof getReviews>>
}

const AboutPage = ({ reviews, currentlyReading }) => {
  const { systemTheme, setTheme } = useThemeContext();
  const reviewList = reviews.map((r) => (
    <AboutListElement
      key={r.url}
      title={r.title}
      subtitle={r.author}
      url={r.url}
      leftPanel={
        <div className="text-subtitle flex items-center text-xs font-bold leading-6">
          {r.rating} <FaStar className="ml-1 text-yellow-500" />
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
  const title = `About`
  const description = ``
  return (
    <>


      <div className="mb-5 mt-40 pt-20  flex text-left ">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 1.6 }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
            },
          }}
          className="mt-4 mr-4 ml-2 h-16 w-16 "
        >
          <Image
            src="https://github.com/thienjs.png"
            alt="Profile"
            priority={false}
            className="rounded-md"
            width={80}
            height={80}
          />
        </motion.div>
        <div className="ml-2 mt-4">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 1.2 }}
            variants={{
              hidden: {
                opacity: 0.25,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="text-lg font-semibold "
            style={{ color: systemTheme.text.title }}
          >
            Thien Tran
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 1.2 }}
            variants={{
              hidden: {
                opacity: 0.25,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="text-sm "
            style={{ color: systemTheme.text.secondary }}
          >
            Designer, Developer, Dreamer
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 1.2 }}
            variants={{
              hidden: {
                opacity: 0.25,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="text-sm "
            style={{ color: systemTheme.text.accent }}
          >
            hi@thien.me
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7, duration: 1.2 }}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className=" mb-12 rounded-lg  p-5 font-serif "
        style={{ backgroundColor: systemTheme.background.secondary }}
      >
        <p className=" mb-2 " style={{ color: systemTheme.text.secondary }}>
          Hello world! I'm a self-driven freelance developer and designer,
          passionately crafting unique and user-friendly experiences.
        </p>

        <p className="mb-2 " style={{ color: systemTheme.text.secondary }}>
          Beyond the pixels, you'll find me coaching on the tennis and
          pickleball courts. I thrive on the joy of learning, always seeking new challenges
          to fuel my creative appetite.
        </p>
      </motion.div>

      <H2>Contact</H2>
      <div className="mt-6 grid max-w-full grid-cols-2">
        <ul
          className="space-y-6 text-sm "
          style={{ color: systemTheme.text.primary }}
        >
          <li>Email</li>
          <li>Github</li>
          <li>Linkedin</li>
          <li>Discord</li>
          <li>Insta/Threads</li>
          <li>Telegram</li>
        </ul>
        <ul
          className="space-y-6 text-sm "
          style={{ color: systemTheme.text.primary }}
        >
          <li>
            <a href="mailto:hi@thien.me" className="hover:text-cyan-500">
              hi@thien.me
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thienjs"
              className="hover:text-cyan-500"
            >
              @thienjs
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/thienio"
              className="hover:text-cyan-500"
            >
              @thienio
            </a>
          </li>
          <li>
            <a
              href="https://discordapp.com//users/thien.io"
              className="hover:text-cyan-500"
            >
              @thien.io
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/thien.io"
              className="hover:text-cyan-500"
            >
              @thien.io
            </a>
          </li>
          <li>
            <a href="https://t.me/thienio" className="hover:text-cyan-500">
              @thienio
            </a>
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
    </>
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
