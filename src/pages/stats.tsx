import Layout from "~/components/ui/Layout"
import { TotalArticles, GithubFollowers, Visitors, TwitterFollowers, GithubStars } from "~/components/stats/"
export default function Stats() {
  return (
    <Layout>
      <div className="flex flex-col justify-between">

      <TotalArticles/>
      <GithubFollowers/>
      <GithubStars/>
      <TwitterFollowers/>
      <Visitors/>
      </div>
    </Layout>
  )
}
