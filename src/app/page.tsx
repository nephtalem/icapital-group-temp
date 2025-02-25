import { Metadata } from "next";

import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider";
import Sectors from "@/components/Home/Sectors";
import AboutUs from "@/components/Home/AboutUs";
import Features from "@/components/Home/Features";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import Journey from "@/components/Home/Journey";
import Portfolio from "@/components/Home/Portfolio";
import Subscribe from "@/components/Home/Subscribe";
import Testimonials from "@/components/Home/Testimonials";
import GetInTouch from "@/components/Home/GetInTouch";
import GetStarted from "@/components/Home/GetStarted";
import Footer from "@/components/Home/Footer";
import PortfolioDetail from "./[slug]/page";
import ProjectPage from "./[slug]/page";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "Home | The i-Capital Africa Institute",
};
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <Sectors />
      <AboutUs />
      <Features />
      <UpcomingEvents />
      <Journey />
      <Portfolio />
      <Subscribe />
      <Testimonials />
      <GetInTouch />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomePage;
