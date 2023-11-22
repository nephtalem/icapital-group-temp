import { Departments } from "@/components/advisory-solutions/Departments";
import { Intro } from "@/components/advisory-solutions/Intro";
import { Content } from "@/components/shared/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory Solutions | The i-Capital Africa Institute",
};

const AdvisorySolutionsPage = () => {
  return (
    <>
      <Content scrollable={true}>
        <Intro />
        <Departments />
      </Content>
    </>
  );
};

export default AdvisorySolutionsPage;
