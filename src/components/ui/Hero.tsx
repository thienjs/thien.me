import Image from 'next/image'
import profile from '../../public/notion-me.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useThemeContext } from '~/hooks/useTheme';
import TypewriterEffect from '../Typewriter'
import TextScrambler from './TextScrambler'

export default function Hero() {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <div>
      <div className="flex min-h-screen flex-col justify-center pb-[25vh] lg:mt-6 lg:px-4">
        <div>
          <div
            className=" mb-2 text-4xl font-bold lg:text-4xl"
            style={{
              backgroundColor: systemTheme.background.primary,
              color: systemTheme.text.title,
            }}
          >
            <p className="mt-20 pt-20 text-8xl tracking-wide">
              <TypewriterEffect string={`THIEN`} />
            </p>
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3, duration: 0.8 }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            className="mb-2 font-mono text-lg"
            style={{ color: systemTheme.text.accent }}
          >
            (tee-en)
          </motion.div>
        </div>

        <div
          className="text-md mt-8   "
          style={{ color: systemTheme.text.secondary }}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
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
            className="text-md mb-4 tracking-normal  "
          >
            <p>Hello! You've discovered my little slice of the internet.</p>
          </motion.div>

          <div className="mt-8  flex flex-row gap-x-2 gap-y-4 ">
            <Link
              href="mailto:hi@thien.me"
              className="rounded-md bg-yellow-600 bg-opacity-60 py-1 px-4 font-mono text-yellow-100"
            >
              <TextScrambler>email</TextScrambler>
            </Link>

            <Link
              href="https://github.com/thienjs"
              className="rounded-md bg-violet-900 bg-opacity-60 py-1 px-4 font-mono text-violet-100"
            >
              <TextScrambler>github</TextScrambler>
            </Link>

            <Link
              href="https://linkedin.com/in/thienio"
              className="rounded-md bg-blue-600 bg-opacity-60 py-1 px-4 font-mono text-blue-100"
            >
              <TextScrambler>linkedin</TextScrambler>
            </Link>

            <Link
              href="https://discordapp.com//users/thien.io"
              className="rounded-md bg-cyan-800 bg-opacity-60 py-1 px-4 font-mono text-cyan-100"
            >
              <TextScrambler>discord</TextScrambler>
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-10 hidden flex-shrink-0 lg:mt-12">
        <Image
          src="https://github.com/thienjs.png"
          alt="Profile"
          priority={true}
          className="rounded-full border border-white"
          width={150}
          height={150}
        />
      </div>
    </div>
  )
}
