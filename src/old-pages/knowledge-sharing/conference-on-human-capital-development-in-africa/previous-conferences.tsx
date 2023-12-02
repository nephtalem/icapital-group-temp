import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits/PreviousSummits";
import { SummitEntity, UpcomingChcdaEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const PreviousSummitsEAFSPage = ({
  upcomingChcda,
  summits,
}: {
  upcomingChcda: UpcomingChcdaEntity;
  summits: SummitEntity[];
}) => {
  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
        <PreviousSummits summits={summits} />
      </Content>
    </>
  );
};

export default PreviousSummitsEAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  const summits = await KSPService.summits("ECCDA");
  return {
    props: {
      upcomingChcda,
      summits,
    },
    revalidate: 10, // In seconds
  };
};
