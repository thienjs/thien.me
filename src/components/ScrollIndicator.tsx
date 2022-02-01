import { useEffect, useState } from 'react'
export default function ScrollIndicator({ children }) {
  const [scroll, setScroll] = useState(0)

  const onScrollProgress = () => {
    const html = document.documentElement
    const scrollPx = html.scrollTop
    const winHeightPx = html.scrollHeight - html.clientHeight
    const scrolled: any = `${(scrollPx / winHeightPx) * 100}%`

    setScroll(scrolled)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScrollProgress)

    return () => {
      window.removeEventListener('scroll', onScrollProgress)
    }
  }, [])

  const inlineStyle = {
    height: '2px',

    width: scroll,
  }

  return (
    <>
      <div className="top-0 left-0 w-screen fixed z-40 ">
        <div
          style={inlineStyle}
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        />
      </div>
      {children}
    </>
  )
}
