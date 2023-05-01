import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import { Title } from "@/components/shared/Title";

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
