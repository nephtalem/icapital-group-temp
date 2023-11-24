import { Content } from "@/components/knowledge-sharing/Content";
import { DocumentsDetail } from "@/components/platform/DocumentsDetail";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import {
  GetStaticPaths,
  GetStaticProps,
  Metadata,
  ResolvingMetadata,
} from "next";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const upcomingChcda = await KSPService.upcomingChcda();

  return {
    title: `${upcomingChcda.attributes?.content?.title} | The i-Capital Africa Institute`,
  };
}

const EAFSPage = async ({ params }: { params: { slug: string } }) => {
  const document = await KSPService.document(params!.slug!.toString());
  const upcomingChcda = await KSPService.upcomingChcda();

  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
        <DocumentsDetail document={document} />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await KSPService.documents("ECCDA");

  return {
    paths: documents.map((document: any) => ({
      params: { slug: document.attributes?.slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const document = await KSPService.document(params!.slug!.toString());
  const upcomingChcda = await KSPService.upcomingChcda();

  return {
    props: { document, upcomingChcda },
    revalidate: 10, // In seconds
  };
};
