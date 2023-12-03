import { PageData } from "@/app/cross-border-solutions/page";
import { CROSS_BORDER_SOLUTIONS } from "@/graphql/cross-border-solutions/crossBorderSolutions";
import { client } from "@/utils/client";

class CBSService {
  static cbs = async (): Promise<PageData> => {
    try {
      const cbsResult = await client({
        query: CROSS_BORDER_SOLUTIONS,
        variables: {},
      });
      return {
        cbs: cbsResult.data.crossBorderSolutions.data!,
        programs: cbsResult.data.exposureLearningPrograms.data!,
      };
    } catch (e) {}
    return { cbs: {}, programs: {} };
  };
}

export default CBSService;
