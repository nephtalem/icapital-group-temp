import { Content } from "@/components/knowledge-sharing/Content";
import { DocumentsDetail } from "@/components/platform/DocumentsDetail";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Title } from "@/components/shared/Title";
import { DocumentEntity, UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticPaths, GetStaticProps } from "next";

const EAFSPage = ({
  document,
  upcomingEafs,
}: {
  document: DocumentEntity;
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <PlatformHeader upcoming={upcomingEafs} type="EAFS" />
        <DocumentsDetail document={document} />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await KSPService.documents("EAFS");

  return {
    paths: documents.map((document: any) => ({
      params: { slug: document.attributes?.slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const document = await KSPService.document(params!.slug!.toString());
  const upcomingEafs = await KSPService.upcomingEafs();

  console.log("upcomingEafs", upcomingEafs);
  return {
    props: { document, upcomingEafs },
    revalidate: 10, // In seconds
  };
};
