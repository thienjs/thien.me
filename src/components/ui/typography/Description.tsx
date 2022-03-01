import { motion } from 'framer-motion'
import { FunctionComponent, ReactChildren } from 'react'

export const Description: FunctionComponent = ({
  children,
}: {
  children: ReactChildren
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2, duration: 0.8 }}
      variants={{
        hidden: {
          opacity: 0.6,
          y: 10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      className="mb-8 font-serif text-sm text-neutral-600 dark:text-neutral-400"
    >
      {children}
    </motion.div>
  )
}

export default Description
