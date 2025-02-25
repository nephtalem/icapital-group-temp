import { Intro } from "@/components/cross-border-solutions/Intro";
import { Content } from "@/components/shared/Content";
import { Partners } from "@/components/shared/Partners/Partners";
import {
  CrossBorderSolutionsEntity,
  ExposureLearningProgramsEntity,
} from "@/gql/graphql";
import CBSService from "@/services/cbs.service";
import { Metadata } from "next";
import { Services } from "@/components/cross-border-solutions/services/Services";
import { Programs } from "@/components/cross-border-solutions/exposure-learning/Programs";
import { CallToAction } from "@/components/shared/CallToAction";

export const metadata: Metadata = {
  title: "Cross Border Solutions | The i-Capital Africa Institute",
};
export type PageData = {
  cbs: CrossBorderSolutionsEntity;
  programs: ExposureLearningProgramsEntity;
};
const CrossBorderSolutionsPage = async () => {
  const data: PageData = await CBSService.cbs();
  return (
    <Content scrollable={true} noFooter>
      <Intro cbs={data.cbs} />
      <Services cbs={data.cbs} />
      <Programs programs={data.programs} />
      <Partners
        title={"Our Partners"}
        partnerIntro={""}
        partner={data.cbs.attributes!.clients!.map((client) => ({
          image: `${client?.logo?.data?.attributes?.url}`,
          to: `${client?.url}`,
        }))}
      />
      <Partners
        title={"Our Clients"}
        partnerIntro={""}
        partner={data.cbs.attributes!.clients!.map((client) => ({
          image: `${client?.logo?.data?.attributes?.url}`,
          to: `${client?.url}`,
        }))}
      />
      <CallToAction callToAction={data.cbs.attributes?.callToAction ?? ""} />
    </Content>
  );
};

export default CrossBorderSolutionsPage;
