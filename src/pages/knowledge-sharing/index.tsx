import { Platforms } from "@/components/knowledge-sharing/Platforms";
import { Content } from "@/components/knowledge-sharing/Content";
import { Landing } from "@/components/knowledge-sharing/Landing";
import { Title } from "@/components/shared/Title";
import { GetStaticProps } from "next";
import KSPService from "@/services/ksp.service";
import { KnowledgeSharingEntity } from "@/gql/graphql";

const KnowledgeSharingPage = ({
  knowledgeSharing,
  upcomingEafs,
}: {
  knowledgeSharing: KnowledgeSharingEntity;
  upcomingEafs: boolean;
}) => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content scrollable={false} upcomingEafs={upcomingEafs}>
        <Landing knowledgeSharing={knowledgeSharing} />
        <Platforms knowledgeSharing={knowledgeSharing} />
      </Content>
    </>
  );
};

export default KnowledgeSharingPage;

export const getStaticProps: GetStaticProps = async () => {
  const knowledgeSharing = await KSPService.ksp();
  const upcomingEafs = await KSPService.upcomingEafs();

  return {
    props: {
      knowledgeSharing,
      upcomingEafs: upcomingEafs && upcomingEafs.attributes.enabled,
    },
    revalidate: 10, // In seconds
  };
};
