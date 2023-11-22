import { Content } from "@/components/knowledge-sharing/Content";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const CHCDASPage = () => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <span />
      </Content>
    </>
  );
};

export default CHCDASPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  return {
    redirect: {
      destination: `/knowledge-sharing/conference-on-human-capital-development-in-africa/${
        upcomingChcda && upcomingChcda.attributes.enabled
          ? "upcoming"
          : "previous-conferences"
      }`,
      permanent: false,
    },
  };
};
