import { NextPage } from 'next'
import { FaLock } from 'react-icons/fa'
import { NextAppPageProps } from '~/types/app'
import Layout from '~/components/ui/Layout'
import { useMessage } from '~/lib/message'
import Projects from '~/components/Projects'
import Skills from '~/components/Skills'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
import Hero from '~/components/Hero'
import Tweet from '~/components/Tweet';
import { getTweets } from 'lib/twitter';

import { convertToArticleList, getPublishedArticles } from '~/lib/notion';
import { GetStaticProps } from 'next';
import { ArticleList } from '~/components/ArticleList';


export type HomePageProps = {
  recentArticles:any,
  tweets:any,
};
export default function HomePage ({recentArticles, tweets}: HomePageProps,)  {
  const { handleMessage } = useMessage()

  return (
    <Layout>
      <Hero />
      <h2 className='text-3xl font-semibold py-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>Recent Posts</h2>
      <div className='mb-10'>
      <ArticleList articles={recentArticles} />
      </div>
      <h2 className='text-3xl font-semibold py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Recent Tweets</h2>
      {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      <Skills/>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.NOTION_DATABASE_ID);
  const tweets = await getTweets([
    '1190125711467655169',
  ]);
  const { articles } = convertToArticleList(data);

  return {
    props: {
      recentArticles: articles.slice(0, 3),
      tweets
    },
    revalidate: 120
  };
};


