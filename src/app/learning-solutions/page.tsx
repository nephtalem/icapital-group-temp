import { Banner } from "@/components/learning-solutions/Banner";
import { CallToAction } from "@/components/learning-solutions/CallToAction";
import { Intro } from "@/components/learning-solutions/Intro";
import { Content } from "@/components/shared/Content";
import { Partners } from "@/components/shared/Partners/Partners";
import { LearningSolutionsEntity } from "@/gql/graphql";
import LSService from "@/services/ls.service";
import { Metadata } from "next";
import { Departments } from "@/components/learning-solutions/Departments";

export const metadata: Metadata = {
  title: "Learning Solutions | The i-Capital Africa Institute",
};

const LearningSolutionsPage = async () => {
  const ls: LearningSolutionsEntity = await LSService.ls();
  console.log(ls);
  return (
    <Content scrollable={true}>
      <Intro ls={ls} />
      <Banner ls={ls} />
      <Departments ls={ls} />
      <Partners
        title={"Our Clients"}
        partnerIntro={""}
        partner={ls.attributes!.clients!.map((client) => ({
          image: `${client?.logo?.data?.attributes?.url}`,
          to: `${client?.url}`,
        }))}
      />
      <CallToAction ls={ls} />
    </Content>
  );
};

export default LearningSolutionsPage;
