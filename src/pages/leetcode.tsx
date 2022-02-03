import { graphql } from '@octokit/graphql'
import Layout from '~/components/ui/Layout'
import type { GetStaticProps } from 'next'


const LeetCodePage = ({ codes }) => (
  <Layout>
    <h1 className="mb-3 mt-4 font-bold text-2xl">my github codesitories</h1>
    <div className="flex flex-col w-96 content-start">
      {codes.map((code) => (
        <div key={code.name} className="">
          <div>{code.count}</div>
          <>{code.diffuculty}</>
        </div>
      ))}
    </div>

    <p className="text-sm p-2 rounded-md px-4 border-gray-500 bg-gray-200 dark:bg-gray-700 w-max">
      <a
        href="https://github.com/thienjs?tab=codesitories"
        target="_blank"
        rel="noopener noreferrer"
      >
        check out my github
      </a>
    </p>
  </Layout>
)

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

export default LeetCodePage
