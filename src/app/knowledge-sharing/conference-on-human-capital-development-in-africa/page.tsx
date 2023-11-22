import { Content } from "@/components/knowledge-sharing/Content";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";

const CHCDASPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  redirect(
    `/knowledge-sharing/conference-on-human-capital-development-in-africa/${
      upcomingChcda && upcomingChcda.attributes.enabled
        ? "upcoming"
        : "previous-conferences"
    }`
  );
  return (
    <>
      <Title title={"Knowledge Sharing"} />
      <Content>
        <span />
      </Content>
    </>
  );
};

export default CHCDASPage;
