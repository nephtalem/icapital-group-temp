import { gql } from "@apollo/client";

export const ADVISORY_SOLUTIONS = gql`
  query advisorySolutions {
    advisorySolutions(publicationState: LIVE) {
      data {
        id
        attributes {
          callToAction
          description
          createdAt
          publishedAt
          updatedAt
          youtubeUrl
          clients {
            id
            logo {
              data {
                id
                attributes {
                  url
                }
              }
            }
            name
            url
          }
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          solution {
            id
            title
            icon {
              data {
                id
                attributes {
                  url
                }
              }
            }
            SolutionPoint {
              id
              point
            }
          }
        }
      }
    }
  }
`;
