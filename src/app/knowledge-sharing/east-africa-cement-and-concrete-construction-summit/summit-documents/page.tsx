import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments/SummitDocuments";
import KSPService from "@/services/ksp.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Summit Documents | The i-Capital Africa Institute",
};

const SummitDocumentsEAFSPage = async () => {
  const upcomingEacms = await KSPService.upcomingEacms();
  const documents = await KSPService.documents("EACMS");

  return (
    <Content>
      <PlatformHeader upcoming={upcomingEacms} type="EACMS" />
      <SummitDocuments documents={documents} />
    </Content>
  );
};

export default SummitDocumentsEAFSPage;
