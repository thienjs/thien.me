import { ReactChildren, FunctionComponent } from 'react'
import { motion } from 'framer-motion'

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
      className="mb-8 text-sm text-neutral-800 dark:text-gray-300 font-serif"
    >
      {children}
    </motion.div>
  )
}

export default Description
