import { NextPage } from 'next'
import { FaLock } from 'react-icons/fa'
import { NextAppPageProps } from '~/types/app'
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
import Projects from '~/components/Projects'
import Skills from '~/components/Skills'
import Testimonials from '~/components/Testimonials'
import Contact from '~/components/Contact'
import Hero from '~/components/Hero'
import Tweet from '~/components/Tweet'
import { getTweets } from 'lib/twitter'
import SkillsTable from '~/components/SkillsTable'
import Link from 'next/link'
import { convertToArticleList, getPublishedArticles } from '~/lib/notion'
import { GetStaticProps } from 'next'
import { ArticleList } from '~/components/ArticleList'
import NowPlaying from '~/components/music/NowPlaying'
import Tracks from '~/components/Tracks'
import DiscordStatus from '~/components/DiscordStatus'

export type HomePageProps = {
  recentArticles: any
  tweets: any
  pinnedItems: any
}
export default function HomePage({
  recentArticles,
  tweets,
  pinnedItems,
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
      </div>
      <h2 className="text-3xl font-semibold py-4  text-black dark:text-gray-100">
        Projects
      </h2>
      <div className="flex items-center justify-start w-full  no-scrollbar">
        <div className="flex overflow-x-auto w-full scroll-hidden no-scrollbar">
          {pinnedItems.map((item) => {
            return (
              <div className="border-b-2 border-cyan-600 px-14 py-6 mx-10 shadow-sm shadow-gray-500/20 bg-zinc-100 dark:bg-zinc-700 bg-opcaity-80">
                <Link href={item.url}>
                  <a>{item.name}</a>
                </Link>
                <p>stars {item.stargazerCount}</p>
              </div>
            )
          })}
        </div>
      </div>

      <h2 className="text-3xl font-semibold py-4 mt-8">Recent Tweets</h2>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
      <h2 className="text-3xl mt-8 font-semibold py-4 text-gray-900 dark:text-gray-100 mb-2">
        Music
      </h2>
      <NowPlaying />
      <Tracks />
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
                  description
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
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node)
  return {
    props: {
      recentArticles: articles.slice(0, 3),
      tweets,
      pinnedItems,
    },
    revalidate: 120,
  }
}


