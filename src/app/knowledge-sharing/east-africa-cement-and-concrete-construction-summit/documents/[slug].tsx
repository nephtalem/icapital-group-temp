import { Content } from "@/components/knowledge-sharing/Content";
import { DocumentsDetail } from "@/components/platform/DocumentsDetail";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Title } from "@/components/shared/Title";
import {
  DocumentEntity,
  UpcomingEacmsEntity
} from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticPaths, GetStaticProps } from "next";

const EAFSPage = ({
  document,
  upcomingEacms,
}: {
  document: DocumentEntity;
  upcomingEacms: UpcomingEacmsEntity;
}) => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
        <DocumentsDetail document={document} />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await KSPService.documents("EACMS");

  return {
    paths: documents.map((document: any) => ({
      params: { slug: document.attributes?.slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const document = await KSPService.document(params!.slug!.toString());
  const upcomingEacms = await KSPService.upcomingEacms();

  return {
    props: { document, upcomingEacms },
    revalidate: 10, // In seconds
  };
};
