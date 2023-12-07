import { WHO_WE_ARE } from "@/graphql/who-we-are/whoWeAre";
import { client } from "@/utils/client";

class WhoService {
  static who = async () => {
    try {
      const whoResult = await client({
        query: WHO_WE_ARE,
        variables: {},
      });
      console.log(whoResult);
      return whoResult.data.whoWeAre.data;
    } catch (e) {}
  };
}

export default WhoService;
