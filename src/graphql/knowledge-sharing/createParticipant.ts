import { gql } from "@apollo/client";

export const CREATE_PARTICIPANT = gql`
  mutation createParticipant($data: ParticipantInput!) {
    createParticipant(data: $data) {
      data {
        id
      }
    }
  }
`;
