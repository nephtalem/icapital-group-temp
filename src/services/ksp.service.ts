import { KNOWLEDGE_SHARING } from "@/graphql/knowledge-sharing/knowledgeSharing";
import client from "../utils/apollo.client";
import { UPCOMING_EAFS } from "@/graphql/knowledge-sharing/upcomingEafs";
import { SUMMITS } from "@/graphql/knowledge-sharing/summits";
import { DOCUMENTS } from "@/graphql/knowledge-sharing/documents";
import { UPCOMING_EACMS } from "@/graphql/knowledge-sharing/upcomingEacms";
import { UPCOMING_CHCDA } from "@/graphql/knowledge-sharing/upcomingChcda";
import { REGISTRATION_EAFS } from "@/graphql/knowledge-sharing/registrationEafs";
import { ParticipantInput } from "@/gql/graphql";
import { CREATE_PARTICIPANT } from "@/graphql/knowledge-sharing/createParticipant";

class KSPService {
  static ksp = async () => {
    try {
      const kspResult = await client.query({
        query: KNOWLEDGE_SHARING,
        variables: {},
      });
      return kspResult.data.knowledgeSharing.data;
    } catch (e) {}
  };

  static upcomingEafs = async () => {
    try {
      const upcomingEafsResult = await client.query({
        query: UPCOMING_EAFS,
        variables: {},
      });
      return upcomingEafsResult.data.upcomingEafs.data;
    } catch (e) {}
  };

  static registrationEafs = async () => {
    try {
      const registrationEafsResult = await client.query({
        query: REGISTRATION_EAFS,
        variables: {},
      });
      return registrationEafsResult.data.registrationEafs.data;
    } catch (e) {}
  };

  static upcomingEacms = async () => {
    try {
      const upcomingEafsResult = await client.query({
        query: UPCOMING_EACMS,
        variables: {},
      });
      return upcomingEafsResult.data.upcomingEacms.data;
    } catch (e) {}
  };

  static upcomingChcda = async () => {
    try {
      const upcomingEafsResult = await client.query({
        query: UPCOMING_CHCDA,
        variables: {},
      });
      return upcomingEafsResult.data.upcomingChcda.data;
    } catch (e) {}
  };

  static summits = async (type: string) => {
    try {
      const summitsResult = await client.query({
        query: SUMMITS,
        variables: {
          filters: {
            type: {
              eq: type,
            },
          },
        },
      });
      return summitsResult.data.summits.data;
    } catch (e) {}
  };
  static summit = async (slug: string) => {
    try {
      const summitsResult = await client.query({
        query: SUMMITS,
        variables: {
          filters: {
            slug: {
              eq: slug,
            },
          },
        },
      });
      return summitsResult.data.summits.data.shift();
    } catch (e) {}
  };

  static documents = async (type: string) => {
    try {
      const documentsResult = await client.query({
        query: DOCUMENTS,
        variables: {
          filters: {
            type: {
              eq: type,
            },
          },
        },
      });
      return documentsResult.data.documents.data;
    } catch (e) {}
  };
  static document = async (slug: string) => {
    try {
      const documentsResult = await client.query({
        query: DOCUMENTS,
        variables: {
          filters: {
            slug: {
              eq: slug,
            },
          },
        },
      });
      return documentsResult.data.documents.data.shift();
    } catch (e) {}
  };

  static createParticipant = async (data: ParticipantInput) => {
    try {
      const documentsResult = await client.query({
        query: CREATE_PARTICIPANT,
        variables: {
          data,
        },
      });
      return documentsResult.data.createParticipant;
    } catch (e) {}
  };
}

export default KSPService;
