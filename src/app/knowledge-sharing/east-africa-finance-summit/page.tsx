import { Content } from "@/components/knowledge-sharing/Content";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";

const EAFSPage = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  redirect(
    `/knowledge-sharing/east-africa-finance-summit/${
      upcomingEafs && upcomingEafs.attributes.enabled
        ? "upcoming"
        : "previous-summits"
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

export default EAFSPage;
