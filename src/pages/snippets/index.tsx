import { GetStaticProps} from 'next'
import { getPublishedSnippets, convertToSnippetList } from '~/lib/notion';
import { useState, useEffect } from 'react';
import {Tag} from '~/components/blog/Tag';
import Layout from '~/components/ui/Layout';
import { SnippetList } from '~/components/snippets/SnippetList';
import Title from '~/components/ui/typography/Title';

export default function SnippetsPage({snippets, tags}) {
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const filteredSnippets = snippets
    .sort((a, b) => Number(new Date(b.publishedDate)))
    .filter((post) => {
      return (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.tags.some((el) => el.name === searchValue.toLocaleLowerCase())
      );
    });

  useEffect(() => {
    setSearchValue(selectedTag);
  }, [selectedTag]);



  return (
    <Layout>
      <Title>Snippets</Title>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-sm font-serif">
        collection of useful code for reference
      </p>
      <div className="relative w-full">
        <input
          aria-label="Search snippets"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search snippets"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="py-3 my-1 mb-2 overflow-x-auto border-gray-200 dark:border-gray-600 no-scrollbar">
        <ul className="flex items-center justify-start w-full no-scrollbar">
          {/* Initial tag for all topics */}
          <Tag activeTag={selectedTag} tag="" cb={() => setSelectedTag('')} />
          {tags &&
            tags.map((tag) => (
              <Tag
                activeTag={selectedTag}
                key={tag}
                tag={tag}
                cb={() => setSelectedTag(tag)}
              />
            ))}
        </ul>
      </div>
      <div className="min-h-screen space-y-12 mt-4">
        {!filteredSnippets.length && (
          <div className="w-full mx-auto  p-4">
            <p className="flex items-center justify-center text-2xl">
              No snippets found{' '}
              <span>
                <svg className="ml-3 w-7 h-7" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8.75 4.75H15.25C17.4591 4.75 19.25 6.54086 19.25 8.75V15.25C19.25 17.4591 17.4591 19.25 15.25 19.25H8.75C6.54086 19.25 4.75 17.4591 4.75 15.25V8.75C4.75 6.54086 6.54086 4.75 8.75 4.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.75 15.25C7.75 15.25 9 12.75 12 12.75C15 12.75 16.25 15.25 16.25 15.25"
                  ></path>
                  <circle cx="14" cy="10" r="1" fill="currentColor"></circle>
                  <circle cx="10" cy="10" r="1" fill="currentColor"></circle>
                </svg>
              </span>
            </p>
          </div>
        )}
        <SnippetList snippets={filteredSnippets} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedSnippets(process.env.NOTION_SNIPPETS_DB_ID);
  const { snippets, tags } = convertToSnippetList(data);

  return {
    props: {

      snippets: snippets.slice(0),
      tags
    },
    revalidate: 30
  };
};