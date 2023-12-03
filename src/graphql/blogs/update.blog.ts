import { gql } from "@apollo/client";

export const UPDATE_BLOG = gql`
  mutation updateBlog($updateBlogId: ID!, $data: BlogInput!) {
    updateBlog(id: $updateBlogId, data: $data) {
      data {
        id
      }
    }
  }
`;
