
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
import classNames from '~/lib/classNames'
import Link from 'next/link'
import {
  convertToArticleList,
  getPublishedArticles,
  getFeaturedArticles,
} from '~/lib/notion'
import { GetStaticProps } from 'next'
import { ArticleList } from '~/components/ArticleList'
import NowPlaying from '~/components/music/NowPlaying'
import RepoCard from '~/components/Projects/RepoCard'
import ArrowLink from '~/components/ui/links/ArrowLink'
import { useSession, signIn, signOut } from 'next-auth/react'
import Timeline from 'components/timeline/Timeline'
import Entry from '~/components/guestbook/ContentPopover/Entry'
import { Tab } from '@headlessui/react'
import Contact from '~/components/contact/Contact'
import { useState } from 'react'
import { ArticleCard } from '~/components/ArticleCard'

export type HomePageProps = {
  recentArticles: any
  tabArticles: any
  tabTwoArticles: any
  tweets: any
  repos: any
}
export default function HomePage({
  recentArticles,
  tweets,
  tabArticles,
  tabTwoArticles,
  repos,
}: HomePageProps) {
  const { handleMessage } = useMessage()

  return (
    <Layout>
      <Hero />
      <h2 className="text-3xl font-semibold py-4  text-black dark:text-gray-100">
        Blog
      </h2>
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-zinc-300 dark:bg-zinc-700 rounded-md">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 dark:text-gray-200 rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white dark:bg-zinc-900 dark:text-gray-100'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Recent
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 dark:text-gray-200 rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white dark:bg-zinc-900 dark:text-gray-100'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Featured
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 font-medium text-gray-700 dark:text-gray-200 rounded-lg',
                'focus:outline-none',
                selected
                  ? 'bg-white dark:bg-zinc-900 dark:text-gray-100'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Popular
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ArticleList articles={recentArticles} />
          </Tab.Panel>
          <Tab.Panel>
            <ArticleList articles={tabArticles} />
          </Tab.Panel>
          <Tab.Panel>
            <ArticleList articles={tabTwoArticles} />
          </Tab.Panel>
        </Tab.Panels>
        <div className="flex justify-end mt-4 mr-2">
          <ArrowLink href="/blog" className="">
            more posts
          </ArrowLink>
        </div>
      </Tab.Group>
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
      <h2 className="text-3xl mt-8 font-semibold py-4 text-gray-900 dark:text-gray-100 mb-2">
        Guestbook
      </h2>

      <Entry />
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
      tabArticles: articles.slice(3, 6),
      tabTwoArticles: articles.slice(6, 9),
      tweets,
      repos,
    },
    revalidate: 120,
  }
}


