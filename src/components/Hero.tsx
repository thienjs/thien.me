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
            <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
              Hello.
              <p className="text-2xl">My name is Thien.</p>
            </h1>
          </motion.div>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 pb-6">
              I am a self taught web developer. I am currently focused on
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
              This site is my personal home on the web. It's my way of
              experiement with new open source techs and learn through building.
              If you like what you see, please sign the{' '}
              <Link href="/guestbook">
                <a className="underline decoration-2 hover:decoration-wavy decoration-cyan-500">
                  Guestbook
                </a>
              </Link>
              . I would greatly appreciate your feedback.
            </p>
            <p>
              When I'm not coding, I'm prob walking my dog, Loki. Some of my
              favorite hobbies are tennis, longboarding, guitar, watch
              collecting.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10 ">
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
