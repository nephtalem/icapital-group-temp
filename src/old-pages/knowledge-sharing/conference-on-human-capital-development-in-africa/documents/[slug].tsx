import { Content } from "@/components/knowledge-sharing/Content";
import { DocumentsDetail } from "@/components/platform/DocumentsDetail";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { DocumentEntity, UpcomingChcdaEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticPaths, GetStaticProps } from "next";

const EAFSPage = ({
  document,
  upcomingChcda,
}: {
  document: DocumentEntity;
  upcomingChcda: UpcomingChcdaEntity;
}) => {
  return (
    <>
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
