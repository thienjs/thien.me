import { bookmarks } from '~/data'
import Link from 'next/link'
import { Title, Description } from '~/components/ui/typography'
import { motion } from 'framer-motion'

const title = `Bookmarks`
const description = `useful web tools`

export default function BookmarksPage() {
  return (
    <div className=''>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 0.9 }}
        variants={{
          hidden: {
            opacity: 0.5,
            y: 10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className="flex flex-col gap-y-5"
      >
        {bookmarks.map((item) => (
          <li key={item.title} className="flex flex-col items-start ">
            <h3 className="text-sm pb-2 font-semibold text-neutral-800 dark:text-neutral-200 mb-3 border-b border-neutral-300 dark:border-neutral-700 w-full">
              {item.title}
            </h3>

            <div className="justify-baseline ml-5 flex flex-col gap-y-4 mb-10">
              {item.list.map((subItem, index) => (
                <div key={subItem + index.toString()}>
                  <div className="flex flex-wrap gap-y-2 text-sm text-neutral-700 dark:text-neutral-300 sm:flex-nowrap ">
                    <Link href={subItem.link}>
                      <div className="cursor-pointer font-semibold underline decoration-dashed decoration-1 underline-offset-1 hover:decoration-wavy">
                        {subItem.title}
                      </div>
                    </Link>

                    {subItem.description && (
                      <div className="flex  ">
                        <span className="px-2 text-gray-600 dark:text-gray-400">
                          -
                        </span>
                        <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400 ">
                          {subItem.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </motion.div>
    </div>
  )
}
