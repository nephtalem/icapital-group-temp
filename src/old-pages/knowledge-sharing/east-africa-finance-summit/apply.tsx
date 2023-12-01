import { Content } from "@/components/knowledge-sharing/Content";
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
  return {
    props: {},
  };
};
