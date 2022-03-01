import { ArticleCard } from '~/components/blog/ArticleCard'
import { Article } from '~/lib/types'

type Props = {
  articles: Article[]
}

export function ArticleList({ articles }) {
  return (
    <div className="">
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  )
}
