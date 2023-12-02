import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits/PreviousSummits";
import KSPService from "@/services/ksp.service";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const upcomingChcda = await KSPService.upcomingChcda();

  return {
    title: `${`Register - ${upcomingChcda.attributes?.content?.title}`} | The i-Capital Africa Institute`,
  };
}

const PreviousSummitsEAFSPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  const summits = await KSPService.summits("ECCDA");
  return (
    <Content>
      <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
      <PreviousSummits summits={summits} />
    </Content>
  );
};

export default PreviousSummitsEAFSPage;
