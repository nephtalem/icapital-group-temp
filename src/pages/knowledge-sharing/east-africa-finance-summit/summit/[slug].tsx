import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDetail } from "@/components/platform/SummitDetail";
import { Title } from "@/components/shared/Title";

const EAFSPage = () => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content upcomingEafs={false}>
        <PlatformHeader />
        <SummitDetail />
      </Content>
    </>
  );
};

export default EAFSPage;
