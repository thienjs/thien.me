import Layout from '~/components/ui/Layout'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { LinkIcon } from '@heroicons/react/outline'

export default function ReposPage({ pinnedItems }) {
  return (
  <Layout>
    <div className="">
      {pinnedItems.map((item) => {
        return (

          <div className='border border-cyan-600 p-2 mb-2'>

            <Link href={item.url}>
              <a>{item.name}</a>
            </Link>
              <p>stars {item.stargazerCount}</p>
          </div>
          )
      })}
    </div>
  </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
                  stargazerCount
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
      pinnedItems,
    },
  }
}
