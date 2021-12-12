import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { IconContext } from 'react-icons';
import { FaSearch } from 'react-icons/fa';

import NextLink from './NextLink';
import { IPost } from '../types/post';

type Results = Pick<IPost, 'slug' | 'title'>;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Search: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);

  const router = useRouter();
  const locale = router.locale;

  const { data } = useSWR(`/api/search?q=${query}&locale=${locale}`, fetcher);
  const results = data?.results;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  const handleFocus = () => setActive(true);

  const handleClickInside = () => setActive(false);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-700 space-x-2 px-3 py-2">
        <IconContext.Provider
          value={{
            color: 'gray',
          }}
        >
          <FaSearch />
        </IconContext.Provider>

        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-gray-100 dark:bg-gray-700 text-sm dark:text-gray-100 focus:outline-none"
          onChange={handleChange}
          onFocus={handleFocus}
          value={query}
        />
      </div>

      {active && results && results.length > 0 && (
        <ul className="fixed max-h-screen/2 overflow-y-auto mt-1 mr-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg z-10">
          {results.map(({ slug, title }: Results) => (
            <li
              key={slug}
              className="px-4 py-2 text-sm dark:text-gray-100 leading-5 text-left cursor-pointer hover:bg-gray-100 dark:hover:bg-green-500"
            >
              <NextLink href={`/posts/${slug}`} onClick={handleClickInside}>
                {title}
              </NextLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
