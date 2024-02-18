import { cn } from '~/lib/utils'
import { motion } from 'framer-motion'
import * as React from 'react'
import Link from 'next/link'
import Nav from './Nav'
const Header = () => {
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
        'fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-2xl items-center rounded-2xl bg-background/30 px-8  saturate-100 backdrop-blur-[10px] transition-colors duration-200',
        isScrolled && 'bg-background/80'
      )}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
    >

      <Nav />

    </motion.header>
  )
}

export default Header