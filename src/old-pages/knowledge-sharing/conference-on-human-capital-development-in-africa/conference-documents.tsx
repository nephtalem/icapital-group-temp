import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import { Title } from "@/components/shared/Title";
import {
  DocumentEntity,
  UpcomingChcdaEntity
} from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const SummitDocumentsEAFSPage = ({
  upcomingChcda,
  documents,
}: {
  upcomingChcda: UpcomingChcdaEntity;
  documents: DocumentEntity[];
}) => {
  return (
    <>
      <Title title={"Conference Documents"} />
      <Content>
        <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
        <SummitDocuments documents={documents} />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  const documents = await KSPService.documents("ECCDA");

  return {
    props: {
      upcomingChcda,
      documents,
    },
    revalidate: 10, // In seconds
  };
};
