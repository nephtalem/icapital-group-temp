import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDetail } from "@/components/platform/SummitDetail";
import { SummitEntity, UpcomingEafsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticPaths, GetStaticProps } from "next";

const EAFSPage = ({
  summit,
  upcomingEafs,
}: {
  summit: SummitEntity;
  upcomingEafs: UpcomingEafsEntity;
}) => {
  console.log(
    "upcomingEafs",
    upcomingEafs,
    !!(upcomingEafs && upcomingEafs?.attributes?.enabled),
  );

  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingEafs} type="EAFS" />
        <SummitDetail summit={summit} />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const summits = await KSPService.summits("EAFS");

  return {
    paths: summits.map((summit: any) => ({
      params: { slug: summit.attributes?.slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const summit = await KSPService.summit(params!.slug!.toString());
  console.log("summit", summit);

  const upcomingEafs = await KSPService.upcomingEafs();

  return {
    props: { summit, upcomingEafs },
    revalidate: 10, // In seconds
  };
};
