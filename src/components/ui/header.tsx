import { cn } from '~/lib/utils'
import { motion } from 'framer-motion'
import * as React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { useThemeContext } from '~/hooks/useTheme'
const Header = () => {
  const { systemTheme } = useThemeContext()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => document.removeEventListener('scroll', changeBackground)
  }, [])

  return (
    <motion.header
      className={cn(
        'bg-background/80 fixed inset-x-0  z-40 mx-auto flex h-[60px]  items-center border-b-4 px-8   transition-colors duration-200 ',
        isScrolled && 'bg-background/80'
      )}
      style={{
        backgroundColor: systemTheme.background.primary,
        borderColor: systemTheme.text.title,
      }}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Nav />
    </motion.header>
  )
}

export default Header