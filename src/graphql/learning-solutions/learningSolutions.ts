import { gql } from "@apollo/client";

export const LEARNING_SOLUTIONS = gql`
  query LearningSolutions{
    learningSolutions(publicationState: LIVE) {
      data {
        id
        attributes {
          youtubeUrl
          updatedAt
          publishedAt
          LSBanner {
            callToAction
            callToActionLink
            id
            image {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          callToAction
          clients {
            id
            name
            url
            logo {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          createdAt
          description
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          solution {
            icon {
              data {
                id
                attributes {
                  url
                }
              }
            }
            id
            title
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
