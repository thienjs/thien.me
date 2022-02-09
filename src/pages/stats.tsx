import Layout from "~/components/ui/Layout"
import { TotalArticles, GithubFollowers, Visitors, TwitterFollowers, GithubStars, BlogViews } from "~/components/stats/"
import DiscordStatus from "~/components/cards/discord/DiscordStatus"
export default function Stats() {
  return (
    <Layout>
      <div className="text-5xl my-4 font-semibold ">Stats </div>
      <div className="flex flex-col  w-96">
        <TotalArticles />
        <BlogViews/>
        <GithubFollowers />
        <GithubStars />
        <TwitterFollowers />
        <DiscordStatus />
      </div>
    </Layout>
  )
}
