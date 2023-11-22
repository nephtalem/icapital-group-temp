import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";

const PreviousSummitsEAFSPage = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  const summits = await KSPService.summits("EAFS");
  return (
    <>
      <Title title={"Previous Summits"} />
      <Content>
        <PlatformHeader type={"EAFS"} upcoming={upcomingEafs} />
        <PreviousSummits summits={summits} />
      </Content>
    </>
  );
};

export default PreviousSummitsEAFSPage;
