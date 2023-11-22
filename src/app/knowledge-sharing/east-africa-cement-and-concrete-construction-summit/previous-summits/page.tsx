import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";

const PreviousSummitsEAFSPage = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  const summits = await KSPService.summits("EACMS");
  return (
    <>
      <Title title={"Previous Summits"} />
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
        <PreviousSummits summits={summits} />
      </Content>
    </>
  );
};

export default PreviousSummitsEAFSPage;
