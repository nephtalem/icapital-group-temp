import { Departments } from "@/components/advisory-solutions/Departments";
import { Intro } from "@/components/advisory-solutions/Intro";
import { Content } from "@/components/shared/Content";
import { Title } from "@/components/shared/Title";

const AdvisorySolutionsPage = () => {
  return (
    <>
      <Title title={"Advisory Solutions"} />
      <Content scrollable={true}>
        <Intro />
        <Departments />
      </Content>
    </>
  );
};

export default AdvisorySolutionsPage;
