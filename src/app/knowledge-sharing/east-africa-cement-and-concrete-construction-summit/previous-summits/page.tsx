import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits/PreviousSummits";
import KSPService from "@/services/ksp.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Previous Summits | The i-Capital Africa Institute",
};

const PreviousSummitsEAFSPage = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  const summits = await KSPService.summits("EACMS");
  return (
    <Content>
      <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
      <PreviousSummits summits={summits} />
    </Content>
  );
};

export default PreviousSummitsEAFSPage;
