import { Content } from "@/components/knowledge-sharing/Content";
import { DocumentsDetail } from "@/components/platform/DocumentsDetail";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import KSPService from "@/services/ksp.service";
import {
  Metadata,
  ResolvingMetadata
} from "next";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const upcomingEafs = await KSPService.upcomingEafs();

  return {
    title: `${upcomingEafs.attributes?.content?.title} | The i-Capital Africa Institute`,
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
