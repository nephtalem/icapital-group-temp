import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const upcomingChcda = await KSPService.upcomingChcda();

  return {
    title: `${upcomingChcda.attributes?.content?.title} | The i-Capital Africa Institute`,
  };
}

const UpcomingECCDAPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  if (!(upcomingChcda && upcomingChcda.attributes.enabled)) {
    redirect(
      "/knowledge-sharing/conference-on-human-capital-development-in-africa/previous-summits"
    );
  }
  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
        {/* <Upcoming
          upcoming={upcomingChcda}
          base={
            "/knowledge-sharing/conference-on-human-capital-development-in-africa"
          }
        /> */}
      </Content>
    </>
  );
};

export default UpcomingECCDAPage;
