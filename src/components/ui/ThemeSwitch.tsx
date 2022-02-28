import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/outline'
import useHasMounted from '~/lib/hooks/useHasMounted'

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const hasMounted = useHasMounted()

  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system')

  const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')

  return (
    <button
      className="flex h-8 w-8 p-2 mx-1 cursor-pointer items-center justify-center rounded-md bg-zinc-300 ring-neutral-400 transition duration-200 ease-in-out hover:ring-2 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-800 "
      type="button"
      aria-label={`switch to ${isDarkTheme ? 'light' : 'dark'} mode`}
      onClick={toggleTheme}
    >
      {hasMounted && (
        <>
          {isDarkTheme ? (
            <SunIcon className="h-4 w-4" />
          ) : (
            <MoonIcon className="h-4 w-4" />
          )}
        </>
      )}
    </button>
  )
}
