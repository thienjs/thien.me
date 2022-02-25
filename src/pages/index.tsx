import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql,
} from '@apollo/client'
import { getCurrentlyReading, getReviews } from '../lib/goodreads'
import { setContext } from '@apollo/client/link/context'
import Layout from '~/components/ui/Layout'
import { useMessage } from '~/lib/message'
import Hero from '~/components/ui/Hero'
import { AboutSection } from '../components/about/AboutSection'
import Tweet from '~/components/cards/Tweet'
import { getTweets } from 'lib/twitter'
import classNames from '~/lib/classNames'
import Link from 'next/link'
import {
  convertToArticleList,
  getPublishedArticles,
  getFeaturedArticles,
} from '~/lib/notion'
import { GetStaticProps } from 'next'
import { ArticleList } from '~/components/blog/ArticleList'
import NowPlaying from '~/components/music/NowPlaying'
import { AboutListElement } from '../components/about/AboutListElement'
import RepoCard from '~/components/cards/Projects/RepoCard'
import ArrowLink from '~/components/ui/links/ArrowLink'
import { useSession, signIn, signOut } from 'next-auth/react'
import Timeline from 'components/timeline/Timeline'
import Entry from '~/components/guestbook/ContentPopover/Entry'
import { Tab } from '@headlessui/react'
import Contact from '~/components/contact/Contact'
import React, { useState } from 'react'
import TopTracks from '~/components/music/TopTracks'
import { ArticleCard } from '~/components/blog/ArticleCard'
import { NowReading } from '~/components/hobby/NowReading'
import { FaStar } from 'react-icons/fa'
import DiscordStatus from '~/components/cards/discord/DiscordStatus'
import Title from '~/components/ui/typography/Title'

export type HomePageProps = {
  recentArticles: any
  tabArticles: any
  tabTwoArticles: any
  tweets: any
  repos: any
  reviews: Awaited<ReturnType<typeof getReviews>>
  currentlyReading: Awaited<ReturnType<typeof getReviews>>
}
export default function HomePage({
  recentArticles,
  tweets,
  tabArticles,
  tabTwoArticles,
  repos,
  reviews,
  currentlyReading,
}: HomePageProps) {
  const { handleMessage } = useMessage()
  const reviewList = reviews.map((r) => (
    <AboutListElement
      key={r.url}
      title={r.title}
      subtitle={r.author}
      url={r.url}
      leftPanel={
        <div className="text-subtitle flex items-center text-xs font-bold leading-6">
          {r.rating} <FaStar className="ml-1 text-yellow-500" />
        </div>
      }
    />
  ))
  const currentlyReadingList = currentlyReading.map((r) => (
    <NowReading key={r.url} title={r.title} subtitle={r.author} url={r.url} />
  ))
  return (
    <Layout>
      <Hero />
      <div className="mt-6 mb-20"></div>
      <Title>Blog</Title>
      <Tab.Group>
        <Tab.List className="mb-3 flex space-x-1   p-1  py-2">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 text-gray-700 dark:text-gray-200',
                'focus:outline-none',
                selected
                  ? ' border-b border-neutral-400  font-medium dark:border-neutral-700 dark:text-gray-100'
                  : 'text-neutral-500 hover:text-neutral-700  dark:text-neutral-600 dark:hover:text-neutral-400'
              )
            }
          >
            Recent
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 text-gray-700 dark:text-gray-200',
                'focus:outline-none',
                selected
                  ? ' border-b border-neutral-400  font-medium dark:border-neutral-700 dark:text-gray-100'
                  : 'text-neutral-500 hover:text-neutral-700  dark:text-neutral-600 dark:hover:text-neutral-400'
              )
            }
          >
            Featured
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 text-gray-700 dark:text-gray-200',
                'focus:outline-none',
                selected
                  ? ' border-b border-neutral-400  font-medium dark:border-neutral-700 dark:text-gray-100'
                  : 'text-neutral-500 hover:text-neutral-700  dark:text-neutral-600 dark:hover:text-neutral-400'
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
        <div className="mt-4 mr-2 flex justify-end">
          <ArrowLink href="/blog" className="mb-12">
            more posts
          </ArrowLink>
        </div>
      </Tab.Group>
      <Title>Projects</Title>
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
        <div className="mt-4 mr-2 mb-12 flex justify-end">
          <ArrowLink href="/repo" className="">
            all repos
          </ArrowLink>
        </div>
      </div>

      <Title>Hobbies</Title>
      <Tab.Group>
        <Tab.List className="mb-3 flex space-x-1  p-1  py-2">
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 text-gray-700 dark:text-gray-200',
                'focus:outline-none',
                selected
                  ? ' border-b border-neutral-400  font-medium dark:border-neutral-700 dark:text-gray-100'
                  : 'text-neutral-500 hover:text-neutral-700  dark:text-neutral-600 dark:hover:text-neutral-400'
              )
            }
          >
            Music
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full py-2.5 text-sm leading-5 text-gray-700 dark:text-gray-200',
                'focus:outline-none',
                selected
                  ? ' border-b border-neutral-400  font-medium dark:border-neutral-700 dark:text-gray-100'
                  : 'text-neutral-500 hover:text-neutral-700  dark:text-neutral-600 dark:hover:text-neutral-400'
              )
            }
          >
            Books
          </Tab>
        </Tab.List>
        <Tab.Panels className="mb-14">
          <Tab.Panel>
            <div className="mt-6">
              <NowPlaying />
              <TopTracks />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>{currentlyReadingList}</div>

            <AboutSection id="books" title="" subtitle="">
              <div className="">
                <ul>{reviewList.slice(0, 10)}</ul>
              </div>
            </AboutSection>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Title>Status</Title>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}

      <div className="my-8"></div>

      <Title>Guestbook</Title>

      <Entry />
      <div className="mt-4 mr-2 flex justify-end">
        <ArrowLink href="/guestbook" className="">
          see what others wrote
        </ArrowLink>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const reviews = await getReviews({ limit: 10 })
  const currentlyReading = await getCurrentlyReading({ limit: 2 })
  const notiondata = await getPublishedArticles(process.env.NOTION_DATABASE_ID)

  const tweets = await getTweets(['1494760832651210754'])
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
      reviews,
      currentlyReading,
    },
    revalidate: 120,
  }
}
