import { useThemeContext } from '~/hooks/useTheme'

export function Tag({ tag, cb, activeTag }) {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <button
        style={{ color: systemTheme.text.secondary, backgroundColor: systemTheme.text.accent }}
      onClick={() => cb()}
      className={` px-2 m-0.5 rounded-md  ${
        activeTag === tag &&
        ' font-semibold  underline decoration-cyan-400 underline-offset-2 opacity-100 '
      } rounded-md  hover:bg-zinc-300  dark:text-neutral-400 opacity-70`}
    >
      <span className="text-xs">{tag === '' ? 'all' : tag}</span>
    </button>
  )
}
