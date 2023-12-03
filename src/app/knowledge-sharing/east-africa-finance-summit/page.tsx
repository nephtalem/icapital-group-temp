import KSPService from "@/services/ksp.service";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Knowledge Sharing | The i-Capital Africa Institute",
};

const EAFSPage = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  redirect(
    `/knowledge-sharing/east-africa-finance-summit/${
      upcomingEafs && upcomingEafs.attributes.enabled
        ? "upcoming"
        : "previous-summits"
    }`
  );
};

export default EAFSPage;
