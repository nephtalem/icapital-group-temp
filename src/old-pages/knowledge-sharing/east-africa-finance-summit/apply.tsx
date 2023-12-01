import { Home } from "@/components/home/Home/Home";
import { Content } from "@/components/knowledge-sharing/Content";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
