import { Article } from '~/lib/types';
import { ArticleCard } from '~/components/ArticleCard';

type Props = {
  articles: Article[];
};

export function ArticleList({ articles }) {
  return (
    <div className="sm:grid-cols-2 grid grid-cols-1 ">
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  )
}
