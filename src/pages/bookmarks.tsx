import { bookmarks} from '~/data'
import Link from 'next/link'
import { Layout } from '~/components/ui';
import Title from '~/components/ui/typography/Title';
import { motion } from 'framer-motion';

const title = `Bookmarks`
const description = `useful web tools`



export default function BookmarksPage() {
  return (
    <Layout>
      <Title>{title}</Title>

      <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 1 }}
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
          className="mb-8 font-serif text-sm text-neutral-600 dark:text-neutral-400"
        >
          {description}
        </motion.div>


      <ul className="flex flex-col gap-y-5">
        {bookmarks.map((item) => (
          <li key={item.title} className="flex flex-col items-start">
            <h3 className="pb-3 font-semibold text-neutral-800 dark:text-neutral-200">
              {item.title}
            </h3>

            <ul className="flex list-disc flex-col justify-start gap-y-2 px-5">
              {item.list.map((subItem, index) => (
                <li key={subItem + index.toString()}>
                  <div className="text-sm flex flex-wrap gap-y-2 sm:flex-nowrap text-neutral-700 dark:text-neutral-300">
                    <Link
                      href={subItem.link}
                    >
                      {subItem.title}
                    </Link>

                    {subItem.description && (
                      <>
                        <span className="px-2 text-gray-600 dark:text-gray-400">
                          -
                        </span>
                        <p className="text-gray-600 dark:text-gray-400">
                          {subItem.description}
                        </p>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
