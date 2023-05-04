import { gql } from "@apollo/client";

export const REGISTRATION_EAFS = gql`
  query registrationEafs {
    registrationEafs {
      data {
        attributes {
          createdAt
          description
          logo {
            data {
              attributes {
                url
              }
            }
          }
          name
          points {
            content
          }
          pricing {
            price
            size
          }
          title
        }
      }
    }
  }
`;
