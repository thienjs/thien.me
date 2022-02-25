import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

import classNames from '~/lib/classNames'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-10 right-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center rounded-md bg-zinc-400 bg-opacity-80 p-2 text-gray-800 shadow-sm transition-opacity hover:bg-zinc-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-600'
        )}
      >
        <IoIosArrowUp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}
