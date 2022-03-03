import { ReactChildren, FunctionComponent } from 'react'
import { motion } from 'framer-motion'

export const H2: FunctionComponent = ({
  children,
}: {
  children: ReactChildren
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1, duration: 0.9 }}
      variants={{
        hidden: {
          opacity: 0.6,
          y: 5,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      className="text-sm pb-2 font-semibold text-neutral-800 dark:text-neutral-200 mb-3 border-b border-neutral-300 dark:border-neutral-700 w-full"
    >
      {children}
    </motion.div>
  )
}

export default H2
