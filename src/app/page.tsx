import { Home } from "@/components/home/Home/Home";
import HomeService from "@/services/home.service";
import { Metadata } from "next";
import KSPService from "@/services/ksp.service";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Home | The i-Capital Africa Institute",
};
const HomePage = async () => {
  const home = await HomeService.home();
  const upcomingEafs = await KSPService.upcomingEafs();

  return <Home home={home} upcoming={upcomingEafs} />;
};

export default HomePage;
