import { Content } from "@/components/knowledge-sharing/Content";
import { Registration } from "@/components/knowledge-sharing/Registration";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";

const EAFSPage = async () => {
  const registrationEAFS = await KSPService.registrationEafs();
  const upcomingEafs = await KSPService.upcomingEafs();
  if (!(upcomingEafs && upcomingEafs.attributes.enabled)) {
    redirect("/knowledge-sharing/east-africa-finance-summit/previous-summits");
  }
  return (
    <>
      <Title title={`Register - ${upcomingEafs.attributes?.content?.title}`} />
      <Content>
        <Registration upcoming={upcomingEafs} registration={registrationEAFS} />
      </Content>
    </>
  );
};

export default EAFSPage;
