import Image from "next/image"
import profile from '../../public/notion-me.png'
import { motion } from "framer-motion"
import Link from 'next/link'
import RiseButton from './common/button/RiseButton'

export default function Hero() {
  return (
    <div>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, duration: 1 }}
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
              className="text-xl font-semibold text-gray-900 lg:text-4xl dark:text-neutral-200 mt-40"
            >
              Thien Tran
            </motion.div>
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
              className="text-gray-500 dark:text-neutral-400 text-sm mb-2"
            >
              (tee-en)
            </motion.div>
          </div>
          <div className="mt-8 text-gray-800 dark:text-neutral-400 text-sm">
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.8 }}
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
              className="mb-4 "
            >
              Hello! I am a self taught web developer currently focused on
              typescript, nextjs, and tailwind. Most of my work is open source
              and publicly available on{' '}
              <Link href="https://github.com/thienjs">
                <a className="relative before:absolute before:bg-cyan-500 before:opacity-50 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
                  <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                    github
                  </span>
                </a>
              </Link>
              .
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.8 }}
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
              className="mb-4 "
            >
              Get to know what I'm all{' '}
              <Link href="/about">
                <a className="relative before:absolute before:bg-cyan-500 before:opacity-50 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
                  <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                    about
                  </span>
                </a>
              </Link>
             {' '} or what I'm doing{' '}
              <Link href="/now">
                <a className="relative before:absolute before:bg-cyan-500 before:opacity-50 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
                  <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                    now
                  </span>
                </a>
              </Link>.
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6, duration: 0.7 }}
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
            >
              I'm open for work or just a chat. Email me at{' '}
              <a
                href="mailto:hi@thien.me"
                className="relative before:absolute before:bg-cyan-500 before:opacity-50 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500"
              >
                <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                  hi@thien.me
                </span>
              </a>
              .
            </motion.div>
            <p className="mb-40"></p>
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
