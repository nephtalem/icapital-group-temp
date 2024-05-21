import { gql } from "@/utils/gql";

export const BLOGS = gql`
  query blogs {
    blogs(publicationState: LIVE, sort: "createdAt:desc") {
      meta {
        pagination {
          page
          pageCount
          pageSize
          total
        }
      }
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
