import Image from 'next/image'
import profile from '../../public/notion-me.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col min-h-screen justify-center lg:mt-12 lg:px-4 pb-[25vh]">
        <div className=''>
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
            className=" text-xl font-bold text-gray-900 dark:text-neutral-200 lg:text-4xl tracking-wider"
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
            className="mb-2 text-sm text-gray-500 dark:text-neutral-400"
          >
            (tee-en)
          </motion.div>
        </div>
        <div className="text-md mt-8 font-serif text-gray-800 dark:text-neutral-400  ">
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
            Hello! You've discovered my little slice of the internet. 
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
            Get to know {' '}
            <Link href="/about">
              <a className="relative before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-cyan-500 before:opacity-50 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100">
                <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                  me
                </span>
              </a>
            </Link>{' '}
            and what I'm doing{' '}
            <Link href="/now">
              <a className="relative before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-cyan-500 before:opacity-50 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100">
                <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                  now
                </span>
              </a>
            </Link>
            .
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
            If you want to chat, email me at{' '}
            <a
              href="mailto:hi@thien.me"
              className="relative before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-cyan-500 before:opacity-50 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100"
            >
              <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                hi@thien.me
              </span>
            </a>
            .
          </motion.div>
          <p className=""></p>
        </div>
      </div>
      <div className="mb-10 hidden  flex-shrink-0 lg:mt-12">
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
