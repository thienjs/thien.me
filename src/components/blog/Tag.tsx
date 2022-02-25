export function Tag({ tag, cb, activeTag }) {
  return (
    <button
      onClick={() => cb()}
      className={`mx-1 px-2 py-0.5 ${
        activeTag === tag &&
        ' font-semibold text-neutral-800 underline decoration-cyan-400 underline-offset-2 dark:text-neutral-100 '
      } rounded-md text-neutral-600 hover:bg-zinc-300 hover:text-gray-600 dark:text-neutral-400`}
    >
      <span className="text-xs">{tag === '' ? 'all' : tag}</span>
    </button>
  )
}
