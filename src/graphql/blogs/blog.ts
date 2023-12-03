import { gql } from "@/utils/gql";

export const BLOG = gql`
  query blog($filters: BlogFiltersInput) {
    blogs(filters: $filters, publicationState: LIVE) {
      data {
        id
        attributes {
          content
          description
          slug
          tags
          title
          hits
          updatedAt
          publishedAt
          author {
            data {
              id
              attributes {
                name
                email
                createdAt
                position
                publishedAt
                updatedAt
              }
            }
          }
          createdAt
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
