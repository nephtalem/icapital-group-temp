import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments/SummitDocuments";
import KSPService from "@/services/ksp.service";

const SummitDocumentsEAFSPage = async () => {
  const upcomingEafs = await KSPService.upcomingEafs();
  const documents = await KSPService.documents("EAFS");

  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingEafs} type="EAFS" />
        <SummitDocuments documents={documents} />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;
