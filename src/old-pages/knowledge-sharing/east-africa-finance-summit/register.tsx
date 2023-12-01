import { Content } from "@/components/knowledge-sharing/Content";
import { Registration } from "@/components/knowledge-sharing/Registration";
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
