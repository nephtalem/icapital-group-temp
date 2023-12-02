import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits/PreviousSummits";
import KSPService from "@/services/ksp.service";

const PreviousSummitsEAFSPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  const summits = await KSPService.summits("ECCDA");
  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
        <PreviousSummits summits={summits} />
      </Content>
    </>
  );
};

export default PreviousSummitsEAFSPage;
