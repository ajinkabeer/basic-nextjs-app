import {
  InMemoryCache,
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "/api/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

function initializeApollo() {
  apolloClient = apolloClient ?? createApolloClient();
  return apolloClient;
}

//useApollo will initialize apollo, and it will either take the existing version or create a new version.inline
//when creating a new version, it returns an instance of the new client that has an http link and a cache
//so it can keep track of the queries it has run and don't have to refetch them it already has them
export function useApollo() {
  return initializeApollo();
}
