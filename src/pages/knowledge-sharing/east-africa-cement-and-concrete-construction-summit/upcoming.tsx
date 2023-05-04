import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Upcoming } from "@/components/platform/Upcoming";
import { Title } from "@/components/shared/Title";
import { UpcomingEacmsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const UpcomingEACMSPage = ({
  upcomingEacms,
}: {
  upcomingEacms: UpcomingEacmsEntity;
}) => {
  return (
    <>
      <Title title={`${upcomingEacms.attributes?.content?.title}`} />
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
        <Upcoming
          upcoming={upcomingEacms}
          base={"/knowledge-sharing/east-africa-cement-and-concrete-construction-summit"}
        />
      </Content>
    </>
  );
};

export default UpcomingEACMSPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  if (upcomingEacms && upcomingEacms.attributes.enabled) {
    return {
      props: {
        upcomingEacms,
      },
    };
  } else {
    return {
      redirect: {
        destination:
          "/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/previous-summits",
        permanent: false,
      },
    };
  }
};
