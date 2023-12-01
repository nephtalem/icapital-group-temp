import { Home } from "@/components/home/Home/Home";
import HomeService from "@/services/home.service";
import { Metadata } from "next";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Home | The i-Capital Africa Institute",
};
const HomePage = async () => {
  const home = await HomeService.home();

  return <Home home={home} />;
};

export default HomePage;
