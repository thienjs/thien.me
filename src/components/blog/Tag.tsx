import { useThemeContext } from '~/hooks/useTheme'

export function Tag({ tag, cb, activeTag }) {
  const { systemTheme, setTheme } = useThemeContext()
  return (
    <button
      style={{
        color: systemTheme.background.primary,
        backgroundColor: systemTheme.text.accent2,
        borderColor: systemTheme.text.secondary,
      }}
      onClick={() => cb()}
      className={` m-0.5 rounded-md px-2  ${
        activeTag === tag &&
        ' font-semibold  underline decoration-cyan-400 underline-offset-2  '
      } rounded-md    `}
    >
      <span className="text-xs">{tag === '' ? 'all' : tag}</span>
    </button>
  )
}
