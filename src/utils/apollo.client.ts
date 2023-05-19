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
        "Bearer a3dded575632da2dbb1ef2c636e73617c21598a2d61c088df71baaf31cd1faf5fcd3ef665345ec8d1b9ba49eea9a559d43c08b025f098ff33e68413fbeff392f3cfc78ba51c3e08a6f969f0ef939a4e0564f68fdec72c482880dde5dbaa7f8987f3ed01d204505b65d2741a6f3341d8479d18bbf38f5b1cc7bf3a7bb4c3a0e93",
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
