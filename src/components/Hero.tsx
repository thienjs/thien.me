import Image from "next/image"
import profile from '../../public/notion-me.png'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Hero() {
  return (
    <div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
              },
            }}
          >
            <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white mt-6">
              Thien Tran
            </h1>
          </motion.div>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 ">
              Hello! I am a self taught web developer currently focused on
              typescript, nextjs, and tailwind. Most of my work is open source
              and publicly available on{' '}
              <Link href="https://github.com/thienjs">
                <a className="underline decoration-2 hover:decoration-wavy decoration-cyan-500">
                  Github
                </a>
              </Link>
              .
            </p>
            <p className="mb-4">
              Take a look at my {''}
              <Link href="/blog">
                <a className="underline decoration-2 hover:decoration-wavy decoration-cyan-500">
                  blog
                </a>
              </Link>
              ,{' '}
              <Link href="/snippets">
                <a className="underline decoration-2 hover:decoration-wavy decoration-cyan-500">
                  snippets
                </a>
              </Link>
              , and tailwind animation{' '}
              <Link href="/animation">
                <a className="underline decoration-2 hover:decoration-wavy decoration-cyan-500">
                  library
                </a>
              </Link>
              .
            </p>
            <p className="mb-4">
              I'm currently intrested in a junior developer position. If you're
              a recruiter, please take a look at my{' '}
              <Link href="/projects">
                <a className="underline decoration-2 hover:decoration-wavy decoration-cyan-500">
                  projects
                </a>
              </Link>{' '}
              and certificates. Feel free to{' '}
              <Link href="/contact">
                <a className="underline decoration-2 hover:decoration-wavy decoration-cyan-500">
                  contact
                </a>
              </Link>{' '}
              me.{' '}
            </p>

            <p>
              Thanks for visiting! If you like what you see, please sign the{' '}
              <Link href="/guestbook">
                <a className="underline decoration-2 hover:decoration-wavy decoration-cyan-500">
                  Guestbook
                </a>
              </Link>
              . I would greatly appreciate your feedback.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12  mb-10 hidden">
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
      <p></p>
    </div>
  )
}
