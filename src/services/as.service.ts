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
import { ADVISORY_SOLUTIONS } from "@/graphql/advisory-solutions/advisorySolutions";

class ASService {
  static as = async () => {
    try {
      const asResult = await client.query({
        query: ADVISORY_SOLUTIONS,
        variables: {},
      });
      return asResult.data.advisorySolutions.data;
    } catch (e) {}
  };
}

export default ASService;
