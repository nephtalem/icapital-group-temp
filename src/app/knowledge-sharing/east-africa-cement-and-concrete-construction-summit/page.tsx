import { Content } from "@/components/knowledge-sharing/Content";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";
import { redirect } from "next/navigation";

const EACMSPage = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  redirect(
    `/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/${
      upcomingEacms && upcomingEacms.attributes.enabled
        ? "upcoming"
        : "previous-summits"
    }`
  );
};

export default EACMSPage;
