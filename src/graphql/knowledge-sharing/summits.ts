import { gql } from "@apollo/client";

export const SUMMITS = gql`
  query summits($filters: SummitFiltersInput!) {
    summits(filters: $filters) {
      data {
        attributes {
          date
          slug
          background {
            data {
              attributes {
                url
              }
            }
          }
          intro {
            fullDescription
            shortDescription
            title
            youtubeUrl
          }
          name
          openingRemark {
            name
            picture {
              data {
                attributes {
                  url
                }
              }
            }
            position
            remark
            speechFile {
              data {
                attributes {
                  url
                }
              }
            }
            youtubeUrl
          }
          slogan
          status
          session {
            description
            sessionVideo {
              description
              title
              youtubeUrl
            }
            title
          }
          organizer {
            logo {
              data {
                attributes {
                  url
                }
              }
            }
            name
            url
          }
          organizerIntro
          sponsor {
            logo {
              data {
                attributes {
                  url
                }
              }
            }
            name
            url
          }
          sponsorIntro
        }
      }
    }
  }
`;
