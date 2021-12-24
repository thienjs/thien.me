import { GetStaticProps} from 'next'
import { getPublishedSnippets, convertToSnippetList } from '~/lib/notion';
import { useState, useEffect } from 'react';
import {Tag} from '~/components/Tag';
import Layout from '~/components/ui/Layout';
import { SnippetList } from '~/components/SnippetList';

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
      <h1 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-pink-500 mb-4'>Snippets</h1>
      <p>collection of useful code for reference</p>
      <div className="py-3 my-8 overflow-x-auto border-b border-gray-200 dark:border-gray-600 no-scrollbar">
      <ul className="flex items-center justify-start w-full">
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
    <div className="min-h-screen space-y-12">
        {!filteredSnippets.length && (
          <div className="w-full mx-auto rounded-lg bg-[#F8FAFC] dark:bg-midnight p-4">
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