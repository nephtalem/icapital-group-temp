import { Content } from "@/components/shared/Content";
import { Title } from "@/components/shared/Title";
import { Banner } from "@/components/who-we-are/Banner/index";
import { Intro } from "@/components/who-we-are/Intro";
import { MissionVisionValue } from "@/components/who-we-are/MissionVisionValue";
import { Socials } from "@/components/who-we-are/Socials";
import { WordAnimation } from "@/components/who-we-are/WordAnimation";
import { Work } from "@/components/who-we-are/Work";

const WhoWeArePage = () => {
  return (
    <>
      <Title title={"Who We Are"} />
      <Content scrollable={true}>
        <Banner />
        <Intro />
        <MissionVisionValue />
        <WordAnimation />
        <Work />
        <Socials />
      </Content>
    </>
  );
};

export default WhoWeArePage;
