import { ParticipantInput, SponsorExhibitorInput } from "@/gql/graphql";
import { APPLY_EAFS } from "@/graphql/knowledge-sharing/applyEafs";
import { CREATE_PARTICIPANT } from "@/graphql/knowledge-sharing/createParticipant";
import { CREATE_SPONSOR_EXHIBITOR } from "@/graphql/knowledge-sharing/createSponsorExhibitor";
import { DOCUMENTS } from "@/graphql/knowledge-sharing/documents";
import { KNOWLEDGE_SHARING } from "@/graphql/knowledge-sharing/knowledgeSharing";
import { REGISTRATION_EAFS } from "@/graphql/knowledge-sharing/registrationEafs";
import { SUMMITS } from "@/graphql/knowledge-sharing/summits";
import { UPCOMING_CHCDA } from "@/graphql/knowledge-sharing/upcomingChcda";
import { UPCOMING_EACMS } from "@/graphql/knowledge-sharing/upcomingEacms";
import { UPCOMING_EAFS } from "@/graphql/knowledge-sharing/upcomingEafs";
import apolloClient from "@/utils/apollo.client";
import { client } from "@/utils/client";

class KSPService {
  static ksp = async () => {
    try {
      const kspResult = await client({
        query: KNOWLEDGE_SHARING,
        variables: {},
      });
      return kspResult.data.knowledgeSharing.data;
    } catch (e) {}
  };

  static upcomingEafs = async () => {
    try {
      const upcomingEafsResult = await client({
        query: UPCOMING_EAFS,
        variables: {},
      });
      return upcomingEafsResult.data.upcomingEafs.data;
    } catch (e) {}
  };

  static registrationEafs = async () => {
    try {
      const registrationEafsResult = await client({
        query: REGISTRATION_EAFS,
        variables: {},
      });
      return registrationEafsResult.data.registrationEafs.data;
    } catch (e) {}
  };

  static applyEafs = async () => {
    try {
      const applyEafsResult = await client({
        query: APPLY_EAFS,
        variables: {},
      });
      console.log(applyEafsResult);
      return applyEafsResult.data.applyEafs.data;
    } catch (e) {}
  };

  static upcomingEacms = async () => {
    try {
      const upcomingEafsResult = await client({
        query: UPCOMING_EACMS,
        variables: {},
      });
      return upcomingEafsResult.data.upcomingEacms.data;
    } catch (e) {}
  };

  static upcomingChcda = async () => {
    try {
      const upcomingEafsResult = await client({
        query: UPCOMING_CHCDA,
        variables: {},
      });
      return upcomingEafsResult.data.upcomingChcda.data;
    } catch (e) {}
  };

  static summits = async (type: string) => {
    try {
      const summitsResult = await client({
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
      const summitsResult = await client({
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
      const documentsResult = await client({
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
      const documentsResult = await client({
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
      const documentsResult = await apolloClient.mutate({
        mutation: CREATE_PARTICIPANT,
        variables: {
          data,
        },
      });
      return documentsResult.data.createParticipant;
    } catch (e) {}
  };
  static createSponsorExhibitor = async (data: SponsorExhibitorInput) => {
    try {
      const documentsResult = await apolloClient.mutate({
        mutation: CREATE_SPONSOR_EXHIBITOR,
        variables: {
          data,
        },
      });
      return documentsResult.data.createSponsorExhibitor;
    } catch (e) {}
  };
}

export default KSPService;
