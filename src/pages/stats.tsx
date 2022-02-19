import Layout from "~/components/ui/Layout"
import { TotalArticles, GithubFollowers, Visitors, TwitterFollowers, GithubStars, BlogViews, TotalSnippets } from "~/components/stats/"
import DiscordStatus from "~/components/cards/discord/DiscordStatus"
import Title from '~/components/ui/typography/Title'
export default function Stats() {
  return (
    <Layout>
      <Title>Stats </Title>
      <div className="flex flex-col  w-96">
        <TotalArticles />
        <BlogViews/>
        <TotalSnippets/>
        <GithubFollowers />
        <GithubStars />
        <TwitterFollowers />
        <DiscordStatus />
      </div>
    </Layout>
  )
}
