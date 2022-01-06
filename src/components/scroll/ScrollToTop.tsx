import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'

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
          'inline-flex items-center p-3 rounded-sm shadow-sm text-white bg-gray-800 bg-opacity-80 transition-opacity hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
        )}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}
