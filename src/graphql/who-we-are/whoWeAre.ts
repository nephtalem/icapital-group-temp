import { gql } from "@/utils/gql";

export const WHO_WE_ARE = gql`
  query whoWeAre {
    whoWeAre(publicationState: LIVE) {
      data {
        id
        attributes {
          ClientCounter {
            id
            name
            value
          }
          Intro {
            description
            fullName
            id
            position
            title
            image {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          VisionMissionValue {
            id
            title
            description
            icon {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          WordAnimation {
            title
            id
            WordAnimationItem {
              id
              title
              words
            }
          }
          banner {
            data {
              id
              attributes {
                url
              }
            }
          }
          clientCounterTitle
          createdAt
          publishedAt
          updatedAt
          visionMissionValueBackground {
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
