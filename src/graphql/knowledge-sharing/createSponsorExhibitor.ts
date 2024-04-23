import { gql } from "@apollo/client";

export const CREATE_SPONSOR_EXHIBITOR = gql`
  mutation createSponsorExhibitor($data: SponsorExhibitorInput!) {
    createSponsorExhibitor(data: $data) {
      data {
        id
      }
    }
  }
`;
