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
        "Bearer 0f1c863cb1570726f7747d56e83b77605fd1ab2712b2039d27b3434e1fde4abae241e984df4c856f28676c0d146385ce88b59a2ad679b3205057990746c05c8ecddb4ab93a02ace0253b33dad60532e2471a73ec8db6e1d89ef8d70a97b760cb54b3dd92910190e7a54eba5e275e7f5c9d9c1e0c4e53d8643de7a4a5b3f7fe03",
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

const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
  ssrMode: true,
  queryDeduplication: false,
});

export default apolloClient;
