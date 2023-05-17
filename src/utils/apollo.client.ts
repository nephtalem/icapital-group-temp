import {
  ApolloClient,
  DefaultOptions,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API ?? "",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization:
        "Bearer 3493dfcecf72779e1dfeb8fa81fa3b8e4a18b5d96e4d87caf616254cb54f13319011bab6a58ee5a284e1f2fcccba973210ea5b1b3c147186dff27050fc44d9c18454dfebfc5e6ac7c14b9692d385bf0c29f38e8f4d0dd478b2d1c75bbd85cd7096679d6c89c40c34e8685c61e6b96d7e07ad83dd1f3bf5b6b7bc50d21b941d2e",
    },
  };
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: process.env.NEXT_PUBLIC_SOCKET ?? "",
        })
      )
    : authLink.concat(httpLink);

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const link = authLink.concat(httpLink);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  ssrMode: true,
  queryDeduplication: false,
});

export default client;
