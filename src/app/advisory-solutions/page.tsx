import { CallToAction } from "@/components/shared/CallToAction";
import { Departments } from "@/components/advisory-solutions/Departments/Departments";
import { Intro } from "@/components/advisory-solutions/Intro";
import { Content } from "@/components/shared/Content";
import { Partners } from "@/components/shared/Partners/Partners";
import { AdvisorySolutionsEntity } from "@/gql/graphql";
import ASService from "@/services/as.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory Solutions | The i-Capital Africa Institute",
};

const AdvisorySolutionsPage = async () => {
  const as: AdvisorySolutionsEntity = await ASService.as();
  console.log(as);
  return (
    <Content scrollable={true}>
      <Intro as={as} />
      <Departments as={as} />
      <Partners
        title={"Our Clients"}
        partnerIntro={""}
        partner={as.attributes!.clients!.map((client) => ({
          image: `${client?.logo?.data?.attributes?.url}`,
          to: `${client?.url}`,
        }))}
      />
      <CallToAction callToAction={as.attributes?.callToAction??""} />
    </Content>
  );
};

export default AdvisorySolutionsPage;
