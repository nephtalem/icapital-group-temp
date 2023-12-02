import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDetail } from "@/components/platform/SummitDetail/SummitDetail";
import KSPService from "@/services/ksp.service";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const upcomingEacms = await KSPService.upcomingEacms();

  return {
    title: `${upcomingEacms.attributes?.content?.title} | The i-Capital Africa Institute`,
  };
}

const EAFSPage = async ({ params }: { params: { slug: string } }) => {
  const summit = await KSPService.summit(params!.slug);
  const upcomingEacms = await KSPService.upcomingEacms();

  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="ECCDA" />
        <SummitDetail summit={summit} />
      </Content>
    </>
  );
};

export default EAFSPage;
