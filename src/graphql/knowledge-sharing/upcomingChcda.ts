import { gql } from "@apollo/client";

export const UPCOMING_CHCDA = gql`
  query upcomingChcda {
    upcomingChcda {
      data {
        attributes {
          enabled
          content {
            background {
              data {
                attributes {
                  url
                }
              }
            }
            banner {
              data {
                attributes {
                  url
                }
              }
            }
            description
            intro
            logo {
              data {
                attributes {
                  url
                }
              }
            }
            menuTitle
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
            title
            youtubeUrl
          }
        }
      }
    }
  }
`;
