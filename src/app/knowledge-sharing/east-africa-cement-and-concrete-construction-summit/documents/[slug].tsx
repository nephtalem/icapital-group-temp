import { Content } from "@/components/knowledge-sharing/Content";
import { DocumentsDetail } from "@/components/platform/DocumentsDetail/DocumentsDetail";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
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
  const document = await KSPService.document(params!.slug!);
  const upcomingEacms = await KSPService.upcomingEacms();

  return (
    <Content>
      <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
      <DocumentsDetail document={document} />
    </Content>
  );
};

export default EAFSPage;
