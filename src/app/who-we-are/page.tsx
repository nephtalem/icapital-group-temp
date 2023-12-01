import { Content } from "@/components/shared/Content";
import { Banner } from "@/components/who-we-are/Banner";
import { Intro } from "@/components/who-we-are/Intro";
import { MissionVisionValue } from "@/components/who-we-are/MissionVisionValue";
import { Socials } from "@/components/who-we-are/Socials/Socials";
import { WordAnimation } from "@/components/who-we-are/WordAnimation";
import { Work } from "@/components/who-we-are/Work/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | The i-Capital Africa Institute",
};

const WhoWeArePage = () => {
  return (
    <Content scrollable={true} noFooter>
      <Banner />
      <Intro />
      <MissionVisionValue />
      <WordAnimation />
      <Work />
      <Socials />
    </Content>
  );
};

export default WhoWeArePage;
