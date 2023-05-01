import { KNOWLEDGE_SHARING } from "@/graphql/knowledge-sharing/knowledgeSharing";
import client from "../utils/apollo.client";

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
}

export default KSPService;
