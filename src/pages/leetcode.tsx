import { graphql } from '@octokit/graphql'
import Layout from '~/components/ui/Layout'
import type { GetStaticProps } from 'next'


const LeetCodePage = ({ codes }) => (
  <Layout>
    <p>placeholder</p>
  </Layout>
)

{
  /*
export const getStaticProps: GetStaticProps = async () => {
  // https://docs.github.com/en/graphql/reference/objects#codesitory
  const { user } = await graphql(
    `
      {
        matchedUser(username: "thienjs") {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `
  )

  const codes = user.matchedUser.submitStats.acSubmissionNum.map(
    ({ node: code }) => ({
      difficulty: code.difficulty,
      count: code.count,
      submissions: code.sumbimissions,
    })
  )

  return {
    props: {
      codes,
    },
    // fetch updated data and update page every 10 minutes (as needed)
    // https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    revalidate: 600,
  }
}

*/
}

export default LeetCodePage
