import { useEffect, useState } from 'react'
const [top, setTop] = useState(false)
const [hash, setHash] = useState('')
import { m } from 'framer-motion'
import classnames from 'classnames'

import type { FC } from 'react'

export const TopButton: FC = () => {
  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        setTop(true)
      else setTop(false)
    }
  }, [])

  useEffect(() => {
    setHash(window.location.hash ? window.location.hash : '#')
  })

  const onUp = () => {
    window.location.href = '#'
  }

  return (
    <>
      <m.button
        aria-label="Go Up"
        whileHover={{ scale: 1.1 }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={onUp}
        className={classnames(
          'fixed',
          'bottom-0',
          'right-0',
          'mx-10',
          'lg:mx-20',
          'my-10',
          'z-50',
          'text-white',
          'w-10',
          'h-10',
          'bg-purple-600',
          'rounded-l-full',
          'rounded-t-full',
          'focus:outline-none',
          {
            block: top,
            hidden: !top,
          }
        )}
      >
        up
      </m.button>
    </>
  )
}

