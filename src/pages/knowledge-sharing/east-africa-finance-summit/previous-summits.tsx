import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits";
import { Title } from "@/components/shared/Title";
import { SummitEntity, UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const PreviousSummitsEAFSPage = ({
  upcomingEafs,
  summits,
}: {
  upcomingEafs: UpcomingEafsEntity;
  summits: SummitEntity[];
}) => {
  return (
    <>
      <Title title={"Previous Summits"} />
      <Content
        upcomingEafs={!!(upcomingEafs && upcomingEafs?.attributes?.enabled)}
      >
        <PlatformHeader upcomingEafs={upcomingEafs} />
        <PreviousSummits summits={summits} />
      </Content>
    </>
  );
};

export default PreviousSummitsEAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  const summits = await KSPService.summits("EAFS");
  return {
    props: {
      upcomingEafs,
      summits,
    },
    revalidate: 10, // In seconds
  };
};
