import { Metadata } from "next";
import "../styles/globals.css";
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
import PortfolioDetail from "./portfolios/[slug]/page";
import ProjectPage from "./portfolios/[slug]/page";
import ScrollSpyWrapper from "@/components/ScrollSpyWrapper";

export const revalidate = 10;

export const metadata: Metadata = {
  title: "The i-Capital Africa Institute",
};

const sectionIds = [
  "sectors",
  "about",
  "features",
  "journey",
  "portfolio",
  "contact",
];

const HomePage = () => {
  return (
    <ScrollSpyWrapper sectionIds={sectionIds}>
      <div>
        <Hero />
        <Slider />
        <div id="sectors">
          <Sectors />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="features">
          <Features />
        </div>
        <UpcomingEvents />
        <div id="journey">
          <Journey />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <Subscribe />
        <Testimonials />
        <div id="contact">
          <GetInTouch />
        </div>
        <GetStarted />
        <Footer />
      </div>
    </ScrollSpyWrapper>
  );
};

export default HomePage;
