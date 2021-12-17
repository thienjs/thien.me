import { useDarkTheme } from "~/lib/hooks/useDarkTheme";
import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const ThemeSwitch = () => {
  const [isDark, mounted, setTheme] = useDarkTheme();
  return (
    <div className="flex items-center w-12 h-12">
      {mounted && (
        <Switch
          checked={isDark}
          title="Theme switch"
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
          className={`${isDark ? 'bg-transparent' : 'bg-transparent'}
          relative inline-flex flex-shrink-0 h-6 w-6 border-transparent  cursor-pointer  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="w-5 h-5 text-zinc-900 dark:text-gray-200 transition-colors ease-in-out duration-200"
          >
            {isDark ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        </Switch>
      )}
    </div>
  )
};

export default ThemeSwitch;