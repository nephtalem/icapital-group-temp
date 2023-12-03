import { gql } from "@/utils/gql";

export const KNOWLEDGE_SHARING = gql`
  query knowledgeSharing {
    knowledgeSharing(publicationState: LIVE) {
      data {
        attributes {
          intro
          quote
          quoteAuthor
          platform {
            banner {
              data {
                attributes {
                  url
                }
              }
            }
            description
            enableApplication
            enableRegistration
            themeColor
            title
          }
        }
      }
    }
  }
`;
