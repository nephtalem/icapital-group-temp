import { gql } from "@/utils/gql";

export const CROSS_BORDER_SOLUTIONS = gql`
  query crossBorderSolutions {
    crossBorderSolutions(publicationState: LIVE) {
      data {
        id
        attributes {
          youtubeUrl
          updatedAt
          publishedAt
          description
          createdAt
          CBSPoint {
            description
            id
            title
          }
          callToAction
          CertificationPackage {
            description
            id
            image {
              data {
                id
                attributes {
                  url
                }
              }
            }
            name
          }
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
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
          partners {
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
        }
      }
    }
    exposureLearningPrograms(publicationState: LIVE) {
      data {
        id
        attributes {
          createdAt
          publishedAt
          updatedAt
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          ExposureProgram {
            id
            title
            points {
              id
              content
            }
          }
        }
      }
    }
  }
`;
