import { ReactChildren, FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '~/hooks/useTheme'

export const Description: FunctionComponent = ({
  children,
}: {
  children: ReactChildren
}) => {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <motion.div
      style={{ color: systemTheme.text.primary }}
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
      className="mb-8 font-mono"
    >
      {children}
    </motion.div>
  )
}

export default Description
