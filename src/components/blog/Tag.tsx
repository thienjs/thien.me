export function Tag({ tag, cb, activeTag }) {
  return (
    <button
      onClick={() => cb()}
      className={`px-2 py-0.5 mx-1 ${
        activeTag === tag &&
        ' underline font-semibold underline-offset-2 dark:text-neutral-100 text-neutral-800 decoration-cyan-400 '
      } hover:text-gray-600 dark:text-neutral-400 text-neutral-600 hover:bg-zinc-300 rounded-md`}
    >
      <span className="text-xs">{tag === '' ? 'all' : tag}</span>
    </button>
  )
}
