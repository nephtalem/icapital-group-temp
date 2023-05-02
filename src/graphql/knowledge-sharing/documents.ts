import { gql } from "@apollo/client";

export const DOCUMENTS = gql`
  query documents($filters: DocumentFiltersInput!) {
    documents(filters: $filters) {
      data {
        attributes {
          category {
            name
            file {
              name
              content {
                data {
                  attributes {
                    ext
                    url
                  }
                }
              }
            }
          }
          name
          date
          background {
            data {
              attributes {
                url
              }
            }
          }
          slug
          status
          type
        }
      }
    }
  }
`;
