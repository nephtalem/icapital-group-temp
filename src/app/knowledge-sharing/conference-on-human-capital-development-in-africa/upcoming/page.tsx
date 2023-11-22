import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";

const UpcomingECCDAPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  if (!(upcomingChcda && upcomingChcda.attributes.enabled)) {
    redirect(
      "/knowledge-sharing/conference-on-human-capital-development-in-africa/previous-summits"
    );
  }
  return (
    <>
      <Title title={`${upcomingChcda.attributes?.content?.title}`} />
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
