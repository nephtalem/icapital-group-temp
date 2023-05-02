import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import { Title } from "@/components/shared/Title";
import { UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const SummitDocumentsEAFSPage = ({
  upcomingEafs,
}: {
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <>
      <Title title={"THE 6TH ANNUAL EAST AFRICA FINANCE SUMMIT"} />
      <Content
        upcomingEafs={!!(upcomingEafs && upcomingEafs?.attributes?.enabled)}
      >
        <PlatformHeader upcomingEafs={upcomingEafs} />
        <SummitDocuments />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  return {
    props: {
      upcomingEafs,
    },
    revalidate: 10, // In seconds
  };
};
