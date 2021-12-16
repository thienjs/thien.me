export function Tag({ tag, cb, activeTag }) {
  return (
    <button
      onClick={() => cb()}
      className={`mr-4 rounded-md px-6 py-1 ${
        activeTag === tag && 'border-2 border-teal-500 text-teal-500'
      } hover:border-2  hover:border-gray-300 `}
    >
      <span className="font-medium text-sm uppercase">
        {tag === '' ? 'all' : tag}
      </span>
    </button>
  );
}
