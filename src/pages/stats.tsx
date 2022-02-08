import Layout from "~/components/ui/Layout"
import { TotalArticles, GithubFollowers, Visitors, TwitterFollowers, GithubStars } from "~/components/stats/"
import DiscordStatus from "~/components/cards/discord/DiscordStatus"
export default function Stats() {
  return (
    <Layout>
      <div className="flex flex-col  w-96">
        <TotalArticles />
        <GithubFollowers />
        <GithubStars />
        <TwitterFollowers />
        <Visitors />
        <DiscordStatus />
      </div>
    </Layout>
  )
}
