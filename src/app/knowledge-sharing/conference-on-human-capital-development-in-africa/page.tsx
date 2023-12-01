import { Content } from "@/components/knowledge-sharing/Content";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const upcomingChcda = await KSPService.upcomingChcda();

  return {
    title: `${upcomingChcda.attributes?.content?.title} | The i-Capital Africa Institute`,
  };
}

const CHCDASPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  redirect(
    `/knowledge-sharing/conference-on-human-capital-development-in-africa/${
      upcomingChcda && upcomingChcda.attributes.enabled
        ? "upcoming"
        : "previous-conferences"
    }`,
  );
  return (
    <>
      <Content>
        <span />
      </Content>
    </>
  );
};

export default CHCDASPage;
