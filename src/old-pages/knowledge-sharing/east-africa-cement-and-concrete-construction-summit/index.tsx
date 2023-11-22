import { Content } from "@/components/knowledge-sharing/Content";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const EACMSPage = () => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <span />
      </Content>
    </>
  );
};

export default EACMSPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  return {
    redirect: {
      destination: `/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/${
        upcomingEacms && upcomingEacms.attributes.enabled
          ? "upcoming"
          : "previous-summits"
      }`,
      permanent: false,
    },
  };
};
