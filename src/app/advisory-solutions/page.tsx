import { Departments } from "@/components/advisory-solutions/Departments";
import { Intro } from "@/components/advisory-solutions/Intro";
import { Content } from "@/components/shared/Content";
import { Metadata } from "next";
import { Partners } from "@/components/shared/Partners/";
import KSPService from "@/services/ksp.service";
import ASService from "@/services/as.service";
import { AdvisorySolutionsEntity } from "@/gql/graphql";
import { Html } from "@/components/shared/Html/index";
import { CallToAction } from "@/components/advisory-solutions/CallToAction";

export const metadata: Metadata = {
  title: "Advisory Solutions | The i-Capital Africa Institute",
};

const AdvisorySolutionsPage = async () => {
  const as: AdvisorySolutionsEntity = await ASService.as();
  console.log(as);
  return (
    <>
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
        <CallToAction as={as} />
      </Content>
    </>
  );
};

export default AdvisorySolutionsPage;
