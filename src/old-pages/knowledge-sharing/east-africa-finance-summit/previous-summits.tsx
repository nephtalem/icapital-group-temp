import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits/PreviousSummits";
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
      <Content>
        <PlatformHeader type={"EAFS"} upcoming={upcomingEafs} />
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
