import { ADVISORY_SOLUTIONS } from "@/graphql/advisory-solutions/advisorySolutions";
import client from "../utils/apollo.client";

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
