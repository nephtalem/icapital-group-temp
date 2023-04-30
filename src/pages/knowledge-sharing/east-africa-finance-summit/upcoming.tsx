import { Home } from "@/components/home/Home";
import { Content } from "@/components/knowledge-sharing/Content";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Upcoming } from "@/components/platform/Upcoming";
import { Title } from "@/components/shared/Title";

const UpcomingEAFSPage = () => {
  return (
    <>
      <Title title={"THE 6TH ANNUAL EAST AFRICA FINANCE SUMMIT"} />
      <Content>
        <PlatformHeader />
        <Upcoming />
      </Content>
    </>
  );
};

export default UpcomingEAFSPage;
