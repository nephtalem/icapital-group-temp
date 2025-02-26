import { Content } from "@/components/shared/Content";
import { Banner } from "@/components/who-we-are/Banner";
import { Intro } from "@/components/who-we-are/Intro";
import { MissionVisionValue } from "@/components/who-we-are/MissionVisionValue";
import { WordAnimation } from "@/components/who-we-are/WordAnimation";
import { Work } from "@/components/who-we-are/Work/Work";
import { WhoWeAreEntity } from "@/gql/graphql";
import WhoService from "@/services/who.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | The i-Capital Africa Institute",
};

const WhoWeArePage = async () => {
  const who: WhoWeAreEntity = await WhoService.who();

  return (
    <Content scrollable={true}>
      <Banner who={who} />
      <Intro who={who} />
      <MissionVisionValue who={who} />
      <WordAnimation who={who} />
      <Work who={who} />
    </Content>
  );
};

export default WhoWeArePage;
