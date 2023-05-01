import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Upcoming } from "@/components/platform/Upcoming";
import { Title } from "@/components/shared/Title";
import { UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const UpcomingEAFSPage = ({
  upcomingEafs,
}: {
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <>
      <Title title={`${upcomingEafs.attributes?.content?.title}`} />
      <Content upcomingEafs={!!upcomingEafs}>
        <PlatformHeader upcomingEafs={upcomingEafs} />
        <Upcoming upcomingEafs={upcomingEafs} />
      </Content>
    </>
  );
};

export default UpcomingEAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  console.log("upcomingEafs", upcomingEafs);
  if (upcomingEafs && upcomingEafs.attributes.enabled) {
    return {
      props: {
        upcomingEafs,
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
