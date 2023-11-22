import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import { Title } from "@/components/shared/Title";
import { DocumentEntity, UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const SummitDocumentsEAFSPage = ({
  upcomingEafs,
  documents,
}: {
  upcomingEafs: UpcomingEafsEntity;
  documents: DocumentEntity[];
}) => {
  return (
    <>
      <Title title={"Summit Documents"} />
      <Content>
        <PlatformHeader upcoming={upcomingEafs} type="EAFS" />
        <SummitDocuments documents={documents} />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  const documents = await KSPService.documents("EAFS");

  return {
    props: {
      upcomingEafs,
      documents,
    },
    revalidate: 10, // In seconds
  };
};
