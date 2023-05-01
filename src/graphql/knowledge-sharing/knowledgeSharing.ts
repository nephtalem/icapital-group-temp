import { gql } from "@apollo/client";

export const KNOWLEDGE_SHARING = gql`
  query knowledgeSharing {
    knowledgeSharing {
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
