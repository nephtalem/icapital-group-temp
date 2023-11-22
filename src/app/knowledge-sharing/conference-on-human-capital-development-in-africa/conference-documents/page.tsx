import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";

const SummitDocumentsEAFSPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  const documents = await KSPService.documents("ECCDA");

  return (
    <>
      <Title title={"Conference Documents"} />
      <Content>
        <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
        <SummitDocuments documents={documents} />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;
