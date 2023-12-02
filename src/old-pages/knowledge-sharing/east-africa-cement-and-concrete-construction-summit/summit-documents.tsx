import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments/SummitDocuments";
import { DocumentEntity, UpcomingEacmsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const SummitDocumentsEAFSPage = ({
  upcomingEacms,
  documents,
}: {
  upcomingEacms: UpcomingEacmsEntity;
  documents: DocumentEntity[];
}) => {
  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
        <SummitDocuments documents={documents} />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  const documents = await KSPService.documents("EACMS");

  return {
    props: {
      upcomingEacms,
      documents,
    },
    revalidate: 10, // In seconds
  };
};
