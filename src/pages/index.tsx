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

import { convertToArticleList, getPublishedArticles } from '~/lib/notion';
import { GetStaticProps } from 'next';
import { ArticleList } from '~/components/ArticleList';

export type HomePageProps = {
  recentArticles:any,
};
export default function HomePage ({recentArticles}: HomePageProps)  {
  const { handleMessage } = useMessage()

  return (
    <Layout>
      <Hero />
      <h2 className='text-3xl font-semibold py-4 '>Recent Posts</h2>
      <ArticleList articles={recentArticles} />
      <Projects/>
      <Skills/>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const data = await getPublishedArticles(process.env.NOTION_DATABASE_ID);
  const { articles } = convertToArticleList(data);

  return {
    props: {
      recentArticles: articles.slice(0, 3)
    },
    revalidate: 120
  };
};
