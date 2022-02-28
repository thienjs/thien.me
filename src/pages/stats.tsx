import {
  TotalArticles,
  GithubFollowers,
  Visitors,
  TwitterFollowers,
  GithubStars,
  BlogViews,
  TotalSnippets,
} from '~/components/stats/'
import Title from '~/components/ui/typography/Title'
export default function Stats() {
  return (
    <>
      <Title>Stats </Title>
      <div className="flex flex-col">
        <TotalArticles />
        <BlogViews />
        <TotalSnippets />
        <GithubFollowers />
        <GithubStars />
        <TwitterFollowers />
      </div>
    </>
  )
}
