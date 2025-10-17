import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClientEafs = new ApolloClient({
  uri: "http://localhost:1337/graphql", // Local Strapi
  cache: new InMemoryCache(),
});

export default apolloClientEafs;
