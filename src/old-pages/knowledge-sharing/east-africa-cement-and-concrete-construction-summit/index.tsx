import { Content } from "@/components/knowledge-sharing/Content";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const EACMSPage = () => {
  return (
    <>
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
