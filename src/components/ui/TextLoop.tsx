import { useState, useEffect } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
export default function TextLoop() {
  const words = ['COACH', 'DEVELOPER', 'DESIGNER']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)

    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [])
  return (
    // @ts-ignore
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="absolute text-6xl tracking-wide"
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  )
}
