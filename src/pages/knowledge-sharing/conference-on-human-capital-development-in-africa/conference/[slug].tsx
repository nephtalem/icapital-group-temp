import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDetail } from "@/components/platform/SummitDetail";
import { Title } from "@/components/shared/Title";
import { SummitEntity, UpcomingEacmsEntity } from "@/gql/graphql";
import KSPService from "@/services/ksp.service";
import { GetStaticPaths, GetStaticProps } from "next";

const EAFSPage = ({
  summit,
  upcomingEacms,
}: {
  summit: SummitEntity;
  upcomingEacms: UpcomingEacmsEntity;
}) => {
  return (
    <>
      <Title title={`${summit.attributes?.name}`} />
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="ECCDA" />
        <SummitDetail summit={summit} />
      </Content>
    </>
  );
};

export default EAFSPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const summits = await KSPService.summits("ECCDA");

  return {
    paths: summits.map((summit: any) => ({
      params: { slug: summit.attributes?.slug },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const summit = await KSPService.summit(params!.slug!.toString());
  const upcomingEacms = await KSPService.upcomingEacms();

  return {
    props: { summit, upcomingEacms },
    revalidate: 10, // In seconds
  };
};
