import { KNOWLEDGE_SHARING } from "@/graphql/knowledge-sharing/knowledgeSharing";
import client from "../utils/apollo.client";
import { UPCOMING_EAFS } from "@/graphql/knowledge-sharing/upcomingEafs";

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
}

export default KSPService;
