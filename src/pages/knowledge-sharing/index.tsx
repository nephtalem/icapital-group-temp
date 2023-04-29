import { Platforms } from "@/components/knowledge-sharing/Platforms";
import { Content } from "@/components/knowledge-sharing/Content";
import { Landing } from "@/components/knowledge-sharing/Landing";
import { Title } from "@/components/shared/Title";

const KnowledgeSharingPage = () => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <Landing />
        <Platforms />
      </Content>
    </>
  );
};

export default KnowledgeSharingPage;
