import Image from "next/image"
import profile from '../../public/notion-me.png'
import { motion } from "framer-motion"

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
            <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white">
              Hey there, I'm Thien 
              <p className="wave"> 👋</p>
            </h1>
          </motion.div>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 pb-6">
              Full Stack Web Devloper | Site underconstruction.
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
