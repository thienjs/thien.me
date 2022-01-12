import { graphql } from '@octokit/graphql'
import Layout from '~/components/ui/Layout'
import type { GetStaticProps } from 'next'
import RepoCard from '~/components/Projects/RepoCard'

const ProjectsPage = ({ repos }) => (
  <Layout>
    <h1 className="mb-3 mt-4 font-bold text-2xl">my github repositories</h1>
    <div className="flex flex-col w-96 content-start">
      {repos.map((repo) => (
        <div key={repo.name} className="">
          <RepoCard {...repo} />
        </div>
      ))}
    </div>

    <p className="">
      <a
        href="https://github.com/thienjs?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        View more on GitHub...
      </a>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // https://docs.github.com/en/graphql/reference/objects#repository
  const { user } = await graphql(
    `
      query ($username: String!, $sort: String, $limit: Int) {
        user(login: $username) {
          repositories(
            first: $limit
            isLocked: false
            isFork: false
            ownerAffiliations: OWNER
            privacy: PUBLIC
            orderBy: { field: $sort, direction: DESC }
          ) {
            edges {
              node {
                name
                url
                description
                pushedAt
                stargazerCount
                forkCount
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    `,
    {
      username: 'thienjs',
      limit: 12,
      sort: 'STARGAZERS',
      headers: {
        authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  )

  const repos = user.repositories.edges.map(({ node: repo }) => ({
    name: repo.name,
    url: repo.url,
    description: repo.description,
    updatedAt: repo.pushedAt,
    stars: repo.stargazerCount,
    forks: repo.forkCount,
    language: repo.primaryLanguage,
  }))

  return {
    props: {
      repos,
    },
    // fetch updated data and update page every 10 minutes (as needed)
    // https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
    revalidate: 600,
  }
}

export default ProjectsPage
