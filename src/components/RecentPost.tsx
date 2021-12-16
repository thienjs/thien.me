import { convertToArticleList, getPublishedArticles } from '~/lib/notion';
import { GetStaticProps } from 'next';
import { ArticleList } from '~/components/ArticleList';

export default function RecentPost({ recentArticles }) {
    return (
        <div>
            <ArticleList articles={recentArticles} />
        </div>
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
  