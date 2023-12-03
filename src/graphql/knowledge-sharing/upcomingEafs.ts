import { gql } from "@/utils/gql";

export const UPCOMING_EAFS = gql`
  query upcomingEafs {
    upcomingEafs {
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
              level
            }
            sponsorIntro
            title
            youtubeUrl
          }
          exhibitor {
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
          guestOfHonour {
            name
            picture {
              data {
                attributes {
                  url
                }
              }
            }
            position
          }
          introDocument {
            data {
              attributes {
                url
              }
            }
          }
          introVideo
          session {
            moderator {
              name
              picture {
                data {
                  attributes {
                    url
                  }
                }
              }

              position
            }
            speaker {
              name
              picture {
                data {
                  attributes {
                    url
                  }
                }
              }
              document {
                data {
                  attributes {
                    url
                  }
                }
              }
              position
            }
            title
          }
          strategicPartner {
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
        }
      }
    }
  }
`;
