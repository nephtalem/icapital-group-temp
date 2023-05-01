import { Content } from "@/components/knowledge-sharing/Content";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const EAFSPage = () => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <span />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  if (upcomingEafs && upcomingEafs.attributes.enabled) {
    return {
      redirect: {
        destination: "/knowledge-sharing/east-africa-finance-summit/upcoming",
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination:
          "/knowledge-sharing/east-africa-finance-summit/previous-summits",
        permanent: false,
      },
    };
  }
};
