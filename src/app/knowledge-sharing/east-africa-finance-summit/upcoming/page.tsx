import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Upcoming } from "@/components/platform/Upcoming/Upcoming";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const upcomingEafs = await KSPService.upcomingEafs();

  return {
    title: `${upcomingEafs.attributes?.content?.title} | The i-Capital Africa Institute`,
  };
}
const UpcomingEAFSPage = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  console.log("upcomingEafs", upcomingEafs);
  if (!(upcomingEafs && upcomingEafs.attributes.enabled)) {
    redirect("/knowledge-sharing/east-africa-finance-summit/previous-summits");
  }
  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingEafs} type={"EAFS"} />
        <Upcoming
          upcoming={upcomingEafs}
          base={"/knowledge-sharing/east-africa-finance-summit"}
        />
      </Content>
    </>
  );
};

export default UpcomingEAFSPage;
