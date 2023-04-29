import { Collaboration } from "@/components/knowledge-sharing/Collaboration";
import { Content } from "@/components/knowledge-sharing/Content";
import { Landing } from "@/components/knowledge-sharing/Landing";
import { Title } from "@/components/shared/Title";

const KnowledgeSharingPage = () => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <Landing />
        <Collaboration />
      </Content>
    </>
  );
};

export default KnowledgeSharingPage;
