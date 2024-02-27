import { ReactChildren, FunctionComponent } from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '~/hooks/useTheme';

export const H2: FunctionComponent = ({
  children,
}: {
  children: ReactChildren
}) => {
  const { systemTheme, setTheme } = useThemeContext();
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
      className="text-sm pb-2 font-semibold  mb-3 border-b  w-full"             style={{ color: systemTheme.text.primary, borderColor: systemTheme.text.secondary }}
    >
      {children}
    </motion.div>
  )
}

export default H2
