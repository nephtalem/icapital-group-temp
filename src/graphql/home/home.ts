import { gql } from "@/utils/gql";

export const HOME = gql`
  query home {
    home {
      data {
        attributes {
          createdAt
          menu
          publishedAt
          slides {
            background {
              data {
                attributes {
                  url
                }
              }
            }
            cta
            ctaLink
            description
            title
            id
          }
          slogan
        }
      }
    }
  }
`;
