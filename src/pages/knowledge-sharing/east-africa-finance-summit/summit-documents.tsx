import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const SummitDocumentsEAFSPage = () => {
  return (
    <>
      <Title title={"THE 6TH ANNUAL EAST AFRICA FINANCE SUMMIT"} />
      <Content upcomingEafs={false}>
        <PlatformHeader />
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
