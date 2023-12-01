import { Content } from "@/components/knowledge-sharing/Content";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const EAFSPage = () => {
  return (
    <>
      <Content>
        <span />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  return {
    redirect: {
      destination: `/knowledge-sharing/east-africa-finance-summit/${
        upcomingEafs && upcomingEafs.attributes.enabled
          ? "upcoming"
          : "previous-summits"
      }`,
      permanent: false,
    },
  };
};
