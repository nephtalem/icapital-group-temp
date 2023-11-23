import { LEARNING_SOLUTIONS } from "@/graphql/learning-solutions/learningSolutions";
import client from "../utils/apollo.client";

class LSService {
  static ls = async () => {
    try {
      const asResult = await client.query({
        query: LEARNING_SOLUTIONS,
        variables: {},
      });
      return asResult.data.learningSolutions.data;
    } catch (e) {}
  };
}

export default LSService;
