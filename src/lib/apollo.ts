import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client'

const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache(),
})
