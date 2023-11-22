import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";

const UpcomingEACMSPage = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  if (!(upcomingEacms && upcomingEacms.attributes.enabled)) {
    redirect(
      "/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/previous-summits"
    );
  }
  return (
    <>
      <Title title={`${upcomingEacms.attributes?.content?.title}`} />
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
        {/* <Upcoming
          upcoming={upcomingEacms}
          base={"/knowledge-sharing/east-africa-cement-and-concrete-construction-summit"}
        /> */}
      </Content>
    </>
  );
};

export default UpcomingEACMSPage;
