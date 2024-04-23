import { gql } from "@/utils/gql";

export const APPLY_EAFS = gql`
  query applyEafs {
    applyEafs {
      data {
        attributes {
          createdAt
          description
          logo {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          message
          title
        }
      }
    }
  }
`;
