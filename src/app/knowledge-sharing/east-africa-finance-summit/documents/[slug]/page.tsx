import { Content } from "@/components/knowledge-sharing/Content";
import { DocumentsDetail } from "@/components/platform/DocumentsDetail/DocumentsDetail";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import KSPService from "@/services/ksp.service";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const document = await KSPService.document(params!.slug!.toString());

  return {
    title: `${document?.attributes?.name} | The i-Capital Africa Institute`,
  };
}

const EAFSPage = async ({ params }: { params: { slug: string } }) => {
  const document = await KSPService.document(params!.slug!.toString());
  const upcomingEafs = await KSPService.upcomingEafs();

  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingEafs} type="EAFS" />
        <DocumentsDetail document={document} />
      </Content>
    </>
  );
};

export default EAFSPage;
