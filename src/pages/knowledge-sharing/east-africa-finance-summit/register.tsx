import { Content } from "@/components/knowledge-sharing/Content";
import { Registration } from "@/components/knowledge-sharing/Registration";
import { Title } from "@/components/shared/Title";
import { RegistrationEafsEntity, UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const EAFSPage = ({
  registrationEAFS,
  upcomingEafs,
}: {
  registrationEAFS: RegistrationEafsEntity;
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <>
      <Title title={`Register - ${upcomingEafs.attributes?.content?.title}`} />
      <Content>
        <Registration upcoming={upcomingEafs} registration={registrationEAFS} />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const registrationEAFS = await KSPService.registrationEafs();
  const upcomingEafs = await KSPService.upcomingEafs();
  if (!(upcomingEafs && upcomingEafs.attributes.enabled)) {
    return {
      redirect: {
        destination:
          "/knowledge-sharing/east-africa-finance-summit/previous-summits",
        permanent: false,
      },
    };
  }
  return {
    props: {
      registrationEAFS,
      upcomingEafs,
    },
  };
};
