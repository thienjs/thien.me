import Layout from "~/components/ui/Layout"
import { TotalArticles, GithubFollowers, Visitors, TwitterFollowers } from "~/components/stats/"
export default function Stats() {
  return (
    <Layout>
      <div className="flex flex-col justify-between">

      <TotalArticles/>
      <GithubFollowers/>
      <TwitterFollowers/>
      <Visitors/>
      </div>
    </Layout>
  )
}
