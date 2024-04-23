import { Apply } from "@/components/knowledge-sharing/Apply/Apply";
import { Content } from "@/components/knowledge-sharing/Content";
import KSPService from "@/services/ksp.service";
import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const upcomingEafs = await KSPService.upcomingEafs();

  return {
    title: `${`Apply - ${upcomingEafs.attributes?.content?.title}`} | The i-Capital Africa Institute`,
  };
}

const ApplyEAFSPage = async () => {
  const applyEafs = await KSPService.applyEafs();
  console.log(applyEafs);
  const upcomingEafs = await KSPService.upcomingEafs();
  if (!(upcomingEafs && upcomingEafs.attributes.enabled)) {
    redirect("/knowledge-sharing/east-africa-finance-summit/previous-summits");
  }
  return (
    <>
      <Content>
        <Apply apply={applyEafs} upcoming={upcomingEafs} />
      </Content>
    </>
  );
};

export default ApplyEAFSPage;
