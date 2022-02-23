import { ReactChildren, FunctionComponent } from 'react'
import { motion } from 'framer-motion'

const Title: FunctionComponent = ({
  children,
}: {
  children: ReactChildren
}) => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.1, duration: .9 }}
    variants={{
      hidden: {
        opacity: .6,
        y: 5,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }} className="text-md font-semibold text-gray-800 dark:text-gray-300 mt-20 mb-10">
      {children}
    </motion.div>
  )
}

export default Title
