import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Create HTTP link for server-side requests
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API || "http://localhost:1337/graphql",
});

// Add any necessary headers for server-side requests
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // Add any authentication headers if needed
    },
  };
});

// Create Apollo Client for server-side use
export const serverApolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: true, // Enable SSR mode
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache", // Always fetch fresh data on server
    },
  },
});

// Helper function to execute queries on the server
export async function executeServerQuery<T>(
  query: any,
  variables?: any,
): Promise<T> {
  try {
    console.log(
      "Executing query:",
      query.definitions[0]?.name?.value || "Unknown",
    );
    console.log(
      "GraphQL URI:",
      process.env.NEXT_PUBLIC_API || "http://localhost:1337/graphql",
    );

    const { data } = await serverApolloClient.query({
      query,
      variables,
      fetchPolicy: "no-cache",
    });

    console.log("Query result:", data);
    return data;
  } catch (error) {
    console.error("Server-side GraphQL query error:", error);
    console.error("Error details:", error);
    // Return null instead of throwing to prevent crashes
    return null as T;
  }
}
