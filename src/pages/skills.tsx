import { skills } from '~/data'
import { Title, Description } from '~/components/ui/typography'
import { motion } from 'framer-motion'
const title = `Skills`
const description = `my tech skills`

export default function QuotesPage() {
  return (
    <>
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
        className="flex flex-col gap-y-14"
      >
        {skills.map((item) => (
          <li key={item.skill} className="flex flex-col gap-y-2 cursor-default">
            <blockquote className="border-l-4 border-gray-400 py-3 dark:border-gray-600 dark:hover:border-cyan-600 hover:border-cyan-500">
              <p className="px-4  font-serif text-neutral-800 dark:text-neutral-200">
                {item.skill} 
              </p>
            </blockquote>
            <p className="ml-auto  font-serif text-sm text-neutral-700 dark:text-neutral-300">
              - {item.exp}
            </p>

          </li>
        ))}
      </motion.div>
    </>
  )
}
