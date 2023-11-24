import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { SummitDocuments } from "@/components/platform/SummitDocuments";
import KSPService from "@/services/ksp.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Documents | The i-Capital Africa Institute",
};

const SummitDocumentsEAFSPage = async () => {
  const upcomingChcda = await KSPService.upcomingChcda();
  const documents = await KSPService.documents("ECCDA");

  return (
    <>
      <Content>
        <PlatformHeader upcoming={upcomingChcda} type="ECCDA" />
        <SummitDocuments documents={documents} />
      </Content>
    </>
  );
};

export default SummitDocumentsEAFSPage;
