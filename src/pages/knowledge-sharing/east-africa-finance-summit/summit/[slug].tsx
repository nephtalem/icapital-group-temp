import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDetail } from "@/components/platform/SummitDetail";
import { Title } from "@/components/shared/Title";
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
    !!(upcomingEafs && upcomingEafs?.attributes?.enabled)
  );

  return (
    <>
      <Title title={`${summit.attributes?.name}`} />
      <Content
        upcomingEafs={!!(upcomingEafs && upcomingEafs?.attributes?.enabled)}
      >
        <PlatformHeader upcomingEafs={upcomingEafs} />
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
  const upcomingEafs = await KSPService.upcomingEafs();

  console.log("upcomingEafs", upcomingEafs);
  return {
    props: { summit, upcomingEafs },
    revalidate: 10, // In seconds
  };
};
