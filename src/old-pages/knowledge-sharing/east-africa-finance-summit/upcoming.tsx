import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Upcoming } from "@/components/platform/Upcoming";
import { Title } from "@/components/shared/Title";
import { UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetServerSideProps } from "next";

const UpcomingEAFSPage = ({
  upcomingEafs,
}: {
  upcomingEafs: UpcomingEafsEntity;
}) => {
  return (
    <>
      <Title title={`${upcomingEafs.attributes?.content?.title}`} />
      <Content>
        <PlatformHeader upcoming={upcomingEafs} type={"EAFS"} />
        <Upcoming upcoming={upcomingEafs} base={"/knowledge-sharing/east-africa-finance-summit"} />
      </Content>
    </>
  );
};

export default UpcomingEAFSPage;

export const getServerSideProps: GetServerSideProps = async () => {
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
