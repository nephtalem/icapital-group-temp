import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { PreviousSummits } from "@/components/platform/PreviousSummits";
import { Title } from "@/components/shared/Title";

const PreviousSummitsEAFSPage = () => {
  return (
    <>
      <Title title={"Previous Summits"} />
      <Content>
        <PlatformHeader />
        <PreviousSummits />
      </Content>
    </>
  );
};

export default PreviousSummitsEAFSPage;
