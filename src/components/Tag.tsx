export function Tag({ tag, cb, activeTag }) {
  return (
    <button
      onClick={() => cb()}
      className={`mr-4 px-6 py-1 ${
        activeTag === tag && ' border-b-2 dark:border-teal-400 text-cyan-500 dark:text-teal-400 border-cyan-400 '
      } hover:border-b-2  hover:border-cyan-400 dark:hover:border-b-2 dark:hover:border-teal-400 hover:text-cyan-400 dark:hover:text-teal-400`}
    >
      <span className="font-medium text-sm uppercase">
        {tag === '' ? 'all' : tag}
      </span>
    </button>
  );
}
