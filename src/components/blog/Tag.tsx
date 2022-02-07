export function Tag({ tag, cb, activeTag }) {
  return (
    <button
      onClick={() => cb()}
      className={`mr-4 px-6 py-1 ${
        activeTag === tag && ' border-b-2 dark:border-cyan-500 text-cyan-500 dark:text-cyan-500 border-cyan-400 '
      } hover:border-b-2  hover:border-cyan-400 dark:hover:border-b-2 dark:hover:border-cyan-500 hover:text-cyan-400 dark:hover:text-cyan-500`}
    >
      <span className="font-medium text-sm uppercase">
        {tag === '' ? 'all' : tag}
      </span>
    </button>
  );
}
