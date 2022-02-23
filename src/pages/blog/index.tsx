import { GetStaticProps} from 'next'
import { getPublishedArticles, convertToArticleList } from '~/lib/notion';
import { useState, useEffect } from 'react';
import {Tag} from '~/components/blog/Tag';
import Layout from '~/components/ui/Layout';
import { ArticleList } from '~/components/blog/ArticleList';
import Title from '~/components/ui/typography/Title';
import { motion } from 'framer-motion';

export default function Blog({articles, tags}) {
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [searchValue, setSearchValue] = useState('');
  
    const filteredArticles = articles
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
        <Title>Blog</Title>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: {
              opacity: .5,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }} className="text-neutral-600 dark:text-neutral-400 mb-8 text-sm font-serif">
          This is where I write about programming, tech, life, and everything in
          between.
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 1 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }} className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="text-sm block px-4 py-2 w-full text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-cyan-500 focus:border-blue-500 dark:bg-zinc-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-4 h-4 text-gray-400 right-3 top-3 dark:text-gray-300"
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
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 1 }}
          variants={{
            hidden: {
              opacity: .1,
              y: 40,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }} className=" flex items-center justify-start w-full   no-scrollbar">
          <ul className=" rounded-md bg-zinc-100 py-2 dark:bg-zinc-800 mt-4">
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
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }} className="mt-4">
          {!filteredArticles.length && (
            <div className="">
              <p className="">
                No articles found{' '}
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
          <ArticleList articles={filteredArticles} />
        </motion.div>
      </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getPublishedArticles(process.env.NOTION_DATABASE_ID);
    const { articles, tags } = convertToArticleList(data);
  
    const featuredArticle = articles[0];
  
    return {
      props: {
        featuredArticle,
        articles: articles.slice(0),
        tags
      },
      revalidate: 30
    };
  };

  