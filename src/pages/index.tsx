
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Layout from '~/components/ui/Layout'
import { useMessage } from '~/lib/message'
import Hero from '~/components/Hero'
import Tweet from '~/components/Tweet'
import { getTweets } from 'lib/twitter'

import Link from 'next/link'
import { convertToArticleList, getPublishedArticles } from '~/lib/notion'
import { GetStaticProps } from 'next'
import { ArticleList } from '~/components/ArticleList'
import NowPlaying from '~/components/music/NowPlaying'
import RepoCard from '~/components/Projects/RepoCard'
import ArrowLink from '~/components/ui/links/ArrowLink'
import { useSession, signIn, signOut } from 'next-auth/react'
import Timeline from 'components/timeline/Timeline'
import Entry from '~/components/guestbook/ContentPopover/Entry'
import Contact from '~/components/contact/Contact'

export type HomePageProps = {
  recentArticles: any
  tweets: any
  repos: any
}
export default function HomePage({
  recentArticles,
  tweets,
  repos,
}: HomePageProps) {
  const { handleMessage } = useMessage()

  return (
    <Layout>
      <Hero />
      <h2 className="text-3xl font-semibold py-4  text-black dark:text-gray-100">
        Recent Posts
      </h2>
      <div className="mb-10">
        <ArticleList articles={recentArticles} />
        <div className="flex justify-end mt-4 mr-2">
          <ArrowLink href="/blog" className="">
            more posts
          </ArrowLink>
        </div>
      </div>
      <h2 className="text-3xl font-semibold py-4  text-black dark:text-gray-100">
        Projects
      </h2>
      <div className="">
        <div className="">
          <div className=" w-full border-0 ">
            {repos.map((repo) => (
              <div key={repo.name} className="border-0">
                <RepoCard {...repo} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end mt-4 mr-2">
          <ArrowLink href="/repo" className="">
            all repos
          </ArrowLink>
        </div>
      </div>
      <Timeline />
      <h2 className="text-3xl font-semibold py-4 mt-8">Recent Tweets</h2>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
      <h2 className="text-3xl mt-8 font-semibold py-4 text-gray-900 dark:text-gray-100 mb-2">
        Music
      </h2>
      <div>
        <NowPlaying />
        <div className="flex justify-end mt-4 mr-2">
          <ArrowLink href="/music" className="">
            top songs
          </ArrowLink>
        </div>

      </div>
      <h2 className='text-3xl mt-8 font-semibold py-4 text-gray-900 dark:text-gray-100 mb-2'>Guestbook</h2>

      <Entry/>
      <div className="flex justify-end mt-4 mr-2">
          <ArrowLink href="/guestbook" className="">
            see what others wrote
          </ArrowLink>
        </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const notiondata = await getPublishedArticles(process.env.NOTION_DATABASE_ID)
  const tweets = await getTweets(['1190125711467655169'])
  const { articles } = convertToArticleList(notiondata)
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  })
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    }
  })
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      {
        user(login: "thienjs") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  name
                  url
                  homepageUrl
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
      }
    `,
  })

  const { user } = data

  const repos = user.pinnedItems.edges.map(({ node: repo }) => ({
    name: repo.name,
    url: repo.url,
    description: repo.description,
    updatedAt: repo.pushedAt,
    stars: repo.stargazerCount,
    forks: repo.forkCount,
    language: repo.primaryLanguage,
    homepageUrl: repo.homepageUrl,
  }))

  return {
    props: {
      recentArticles: articles.slice(0, 3),
      tweets,
      repos,
    },
    revalidate: 120,
  }
}


