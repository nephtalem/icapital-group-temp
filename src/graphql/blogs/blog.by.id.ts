import { gql } from "@/utils/gql";

export const BLOG_BY_ID = gql`
  query blogById($blogId: ID) {
    blog(id: $blogId) {
      data {
        id
        attributes {
          hits
        }
      }
    }
  }
`;
