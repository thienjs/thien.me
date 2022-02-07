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
            <h3 className="text-gray-500 dark:text-gray-400 text-md">
              (tee-en)
            </h3>
          </motion.div>
          <div className="mt-6 text-gray-800 dark:text-gray-200 text-xl">
            <p className="mb-4 ">
              Hello! I am web developer currently focused on typescript, nextjs,
              and tailwind. Most of my work is open source and publicly
              available on{' '}
              <Link href="https://github.com/thienjs">
                <a className="relative before:absolute before:bg-cyan-500 before:opacity-70 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
                  <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                    github
                  </span>
                </a>
              </Link>
              .
            </p>
            <p>
              I'd appreciate a{' '}
              <Link href="/guestbook">
                <a className="relative before:absolute before:bg-cyan-600 before:opacity-70 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500">
                  <span className="relative hover:text-gray-800 hover:dark:text-gray-200">
                    guestbook
                  </span>
                </a>
              </Link>{' '}
              entry to livin up the site. Thanks.
            </p>
            <p className="mb-4"></p>
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
