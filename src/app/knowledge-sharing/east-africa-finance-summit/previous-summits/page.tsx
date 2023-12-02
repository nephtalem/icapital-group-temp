import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits/PreviousSummits";
import KSPService from "@/services/ksp.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Previous Summits | The i-Capital Africa Institute",
};

const PreviousSummitsEAFSPage = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  const summits = await KSPService.summits("EAFS");
  return (
    <Content>
      <PlatformHeader type={"EAFS"} upcoming={upcomingEafs} />
      <PreviousSummits summits={summits} />
    </Content>
  );
};

export default PreviousSummitsEAFSPage;
