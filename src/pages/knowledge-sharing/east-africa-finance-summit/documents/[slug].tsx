import { Content } from "@/components/knowledge-sharing/Content";
import { DocumentsDetail } from "@/components/platform/DocumentsDetail";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Title } from "@/components/shared/Title";

const EAFSPage = () => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content upcomingEafs={false}>
        <PlatformHeader />
        <DocumentsDetail />
      </Content>
    </>
  );
};

export default EAFSPage;
