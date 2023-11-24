import { Content } from "@/components/knowledge-sharing/Content";
import { Registration } from "@/components/knowledge-sharing/Registration";
import KSPService from "@/services/ksp.service";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata
): Promise<Metadata> {
  const upcomingEafs = await KSPService.upcomingEafs();

  return {
    title: `${`Register - ${upcomingEafs.attributes?.content?.title}`} | The i-Capital Africa Institute`,
  };
}

const EAFSPage = async () => {
  const registrationEAFS = await KSPService.registrationEafs();
  const upcomingEafs = await KSPService.upcomingEafs();
  if (!(upcomingEafs && upcomingEafs.attributes.enabled)) {
    redirect("/knowledge-sharing/east-africa-finance-summit/previous-summits");
  }
  return (
    <Content>
      <Registration upcoming={upcomingEafs} registration={registrationEAFS} />
    </Content>
  );
};

export default EAFSPage;
