import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";

const CHCDASPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  redirect(
    `/knowledge-sharing/conference-on-human-capital-development-in-africa/${
      upcomingChcda && upcomingChcda.attributes.enabled
        ? "upcoming"
        : "previous-conferences"
    }`,
  );
};

export default CHCDASPage;
