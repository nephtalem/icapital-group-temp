import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Upcoming } from "@/components/platform/Upcoming";
import KSPService from "@/services/ksp.service";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const upcomingEacms = await KSPService.upcomingEacms();

  return {
    title: `${upcomingEacms.attributes?.content?.title} | The i-Capital Africa Institute`,
  };
}

const UpcomingEACMSPage = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  if (!(upcomingEacms && upcomingEacms.attributes.enabled)) {
    redirect(
      "/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/previous-summits"
    );
  }
  return (
    <Content>
      <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
      <Upcoming
        upcoming={upcomingEacms}
        base={
          "/knowledge-sharing/east-africa-cement-and-concrete-construction-summit"
        }
      />
    </Content>
  );
};

export default UpcomingEACMSPage;
