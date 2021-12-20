import { Article } from '~/lib/types';
import { ArticleCard } from '~/components/ArticleCard';

type Props = {
  articles: Article[];
};

export function ArticleList({ articles }) {
  return (
    <div className="flex flex-row">
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}
