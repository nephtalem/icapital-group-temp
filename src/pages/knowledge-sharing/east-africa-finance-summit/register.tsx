import { Home } from "@/components/home/Home";
import { Content } from "@/components/knowledge-sharing/Content";
import { Registration } from "@/components/knowledge-sharing/Registration";
import { Title } from "@/components/shared/Title";
import { RegistrationEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const EAFSPage = ({
  registrationEAFS,
}: {
  registrationEAFS: RegistrationEafsEntity;
}) => {
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <Registration registration={registrationEAFS} />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const registrationEAFS = await KSPService.registrationEafs();
  return {
    props: {
      registrationEAFS,
    },
  };
};
