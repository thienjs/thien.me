import { useEffect, useState } from 'react';
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faBars,
  faLaptop,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { m } from 'framer-motion'

const themes = [
  { name: 'Light' },
  { name: 'Dark' },
  { name: 'Emerald' },
  { name: 'Pink' },
]

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI

  const [visible, setVisible] = useState(false)
  const [hash, setHash] = useState('')
  const [top, setTop] = useState(false)

  const [icon, setIcon] = useState(faSun)
  const [color, setColor] = useState<'yellow' | 'gray' | 'blue'>('yellow')

  const onTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('light')
        setIcon(faMoon)
        setColor('blue')
        break
      case 'dark':
        setTheme('emerald')
        setIcon(faLaptop)
        setColor('gray')
        break
      case 'emerald':
        setTheme('pink')
        setIcon(faSun)
        setColor('yellow')
        break
      default:
        setTheme('pink')
        setIcon(faLaptop)
        setColor('gray')
        break
    }
  }

  useEffect(() => {
    switch (theme) {
      case 'light':
        setIcon(faSun)
        setColor('yellow')
        break
      case 'dark':
        setIcon(faMoon)
        setColor('blue')
        break
      case 'system':
        setIcon(faLaptop)
        setColor('gray')
        break
      default:
        setIcon(faSun)
        setColor('yellow')
        break
    }
  }, [theme])

  return (
    <div className="p-8 flex justify-between items-center font-bold text-xl bg-th-background-secondary text-th-primary-dark">
      <span>
        The current theme is: <strong>{theme}</strong>
      </span>
      <div>
        <label htmlFor="theme-select" className="sr-only mr-2">
          Choose theme:
        </label>
        <select
          name="theme"
          id="theme-select"
          className="bg-white text-gray-800 border-gray-800 border py-1 px-3"
          onChange={(e) => setTheme(e.currentTarget.value)}
          value={theme}
        >
          <option value="">Select Theme</option>
          {themes.map((t) => (
            <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <m.button
        aria-label="Change Theme"
        whileHover={{ scale: 1.1 }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={onTheme}
        className="block fixed bottom-0 left-0 mx-10 lg:mx-20 my-10 z-50 text-white w-10 h-10 bg-purple-600 rounded-l-full rounded-t-full focus:outline-none"
      >
        <FontAwesomeIcon
          icon={icon}
          className={classnames('text-bold', {
            'text-yellow-400': color === 'yellow',
            'text-gray-400': color === 'gray',
            'text-blue-400': color === 'blue',
          })}
        />
      </m.button>
    </div>
  )
}

export default ThemeChanger;