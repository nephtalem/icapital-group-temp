import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Upcoming } from "@/components/platform/Upcoming";
import { Title } from "@/components/shared/Title";
import { UpcomingChcdaEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const UpcomingECCDAPage = ({
  upcomingChcda,
}: {
  upcomingChcda: UpcomingChcdaEntity;
}) => {
  return (
    <>
      <Title title={`${upcomingChcda.attributes?.content?.title}`} />
      <Content>
        <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
        <Upcoming
          upcoming={upcomingChcda}
          base={
            "/knowledge-sharing/conference-on-human-capital-development-in-africa"
          }
        />
      </Content>
    </>
  );
};

export default UpcomingECCDAPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  if (upcomingChcda && upcomingChcda.attributes.enabled) {
    return {
      props: {
        upcomingChcda,
      },
    };
  } else {
    return {
      redirect: {
        destination:
          "/knowledge-sharing/conference-on-human-capital-development-in-africa/previous-summits",
        permanent: false,
      },
    };
  }
};
