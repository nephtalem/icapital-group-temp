import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";

const SummitDocumentsEAFSPage = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  const documents = await KSPService.documents("EAFS");

  return (
    <>
      <Title title={"Summit Documents"} />
      <Content>
        <PlatformHeader upcoming={upcomingEafs} type="EAFS" />
        <SummitDocuments documents={documents} />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;
