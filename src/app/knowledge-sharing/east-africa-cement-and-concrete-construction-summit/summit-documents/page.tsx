import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import { Title } from "@/components/shared/Title";
import KSPService from "@/services/ksp.service";

const SummitDocumentsEAFSPage = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  const documents = await KSPService.documents("EACMS");

  return (
    <>
      <Title title={"Summit Documents"} />
      <Content>
        <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
        <SummitDocuments documents={documents} />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;
