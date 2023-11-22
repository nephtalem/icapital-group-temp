import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits";
import { Title } from "@/components/shared/Title";
import {
  SummitEntity,
  UpcomingEacmsEntity
} from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticProps } from "next";

const PreviousSummitsEAFSPage = ({
  upcomingEacms,
  summits,
}: {
  upcomingEacms: UpcomingEacmsEntity;
  summits: SummitEntity[];
}) => {
  return (
    <>
      <Title title={"Previous Summits"} />
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
        <PreviousSummits summits={summits} />
      </Content>
    </>
  );
};

export default PreviousSummitsEAFSPage;

export const getStaticProps: GetStaticProps = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  const summits = await KSPService.summits("EACMS");
  return {
    props: {
      upcomingEacms,
      summits,
    },
    revalidate: 10, // In seconds
  };
};
