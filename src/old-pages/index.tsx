import { Home } from "@/components/home/Home/Home";
import { HomeEntity } from "@/gql/graphql";
import HomeService from "@/services/home.service";
import { GetStaticProps } from "next";

const HomePage = ({ home }: { home: HomeEntity }) => {
  return (
    <>
      <Home home={home} />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const home = await HomeService.home();
  console.log(home);
  return {
    props: {
      home
    },
    revalidate: 10, // In seconds
  };
};
