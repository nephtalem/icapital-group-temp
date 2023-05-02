import { KNOWLEDGE_SHARING } from "@/graphql/knowledge-sharing/knowledgeSharing";
import client from "../utils/apollo.client";
import { UPCOMING_EAFS } from "@/graphql/knowledge-sharing/upcomingEafs";
import { SUMMITS } from "@/graphql/knowledge-sharing/summits";
import { DOCUMENTS } from "@/graphql/knowledge-sharing/documents";

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
}

export default KSPService;
