import {
  TotalArticles,
  GithubFollowers,
  Visitors,
  TwitterFollowers,
  GithubStars,
  BlogViews,
  TotalSnippets,
} from '~/components/stats/'
import { Title } from '~/components/ui/typography'
export default function DashboardPage() {
  return (
    <>
      <Title>Dashboard </Title>
      <div className="flex flex-col">
        <TotalArticles />
        <BlogViews />
        <TotalSnippets />
        <GithubFollowers />
        <GithubStars />
      </div>
    </>
  )
}
