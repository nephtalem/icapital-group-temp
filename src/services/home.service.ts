import { HOME } from "@/graphql/home/home";
import { client } from "@/utils/client";

class HomeService {
  static home = async () => {
    try {
      const homeResult = await client({
        query: HOME,
        variables: {},
      });
      return homeResult.data.home.data;
    } catch (e) {}
  };
}

export default HomeService;
