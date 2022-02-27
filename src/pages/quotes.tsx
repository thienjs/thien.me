import { quotes } from '~/data'
import { Layout } from '~/components/ui'
import Title from '~/components/ui/typography/Title'
import { motion } from 'framer-motion'
const title = `Quotes`
const description = `some of my favorite quotes`

export default function QuotesPage() {
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
        className="flex flex-col gap-y-10 pb-20"
      >
        {quotes.map((item) => (
          <li key={item.quote} className="flex flex-col gap-y-4">
            <blockquote className="border-l-4 border-gray-400 py-3 dark:border-gray-600">
              <p className="px-4  font-serif text-neutral-800 dark:text-neutral-200">
                {item.quote}
              </p>
            </blockquote>

            <p className="ml-72 font-serif text-sm text-neutral-700 dark:text-neutral-300">
              - {item.author}
            </p>
          </li>
        ))}
      </motion.div>
    </Layout>
  )
}
