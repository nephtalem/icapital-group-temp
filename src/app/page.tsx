import { Home } from "@/components/home/Home";
import { Title } from "@/components/shared/Title";
import { HomeEntity } from "@/gql/graphql";
import HomeService from "@/services/home.service";
import { GetStaticProps } from "next";

export const revalidate = 10;

const HomePage = async () => {
  const home = await HomeService.home();

  return (
    <>
      {/* <Title title={"Home"} /> */}
      <Home home={home} />
    </>
  );
};

export default HomePage;
