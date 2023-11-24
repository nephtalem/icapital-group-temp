import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDetail } from "@/components/platform/SummitDetail";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: {};
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const summit = await KSPService.summit(params!.slug!.toString());

  return {
    title: `${summit.attributes?.name} | The i-Capital Africa Institute`,
  };
}

const EAFSPage = async ({ params }: { params: { slug: string } }) => {
  const summit = await KSPService.summit(params!.slug!.toString());
  const upcomingEacms = await KSPService.upcomingEacms();

  return (
    <>
      <Title title={`${summit.attributes?.name}`} />
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
        <SummitDetail summit={summit} />
      </Content>
    </>
  );
};

export default EAFSPage;
