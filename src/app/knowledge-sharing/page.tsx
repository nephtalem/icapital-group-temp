import { Content } from "@/components/knowledge-sharing/Content";
import { Landing } from "@/components/knowledge-sharing/Landing";
import { Platforms } from "@/components/knowledge-sharing/Platforms";
import KSPService from "@/services/ksp.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Sharing | The i-Capital Africa Institute",
};
export const revalidate = 10;

const KnowledgeSharingPage = async () => {
  const knowledgeSharing = await KSPService.ksp();

  return (
    <>
      <Content scrollable={false}>
        <Landing knowledgeSharing={knowledgeSharing} />
        <Platforms knowledgeSharing={knowledgeSharing} />
      </Content>
    </>
  );
};

export default KnowledgeSharingPage;
