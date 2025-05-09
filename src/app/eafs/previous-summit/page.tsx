import Hero from "@/components/eafs/PreviousSummit/Hero";
import SummitHighlight from "@/components/eafs/PreviousSummit/SummitHighlight";
import SixthSummit from "@/components/eafs/PreviousSummit/SixthSummit";
import FifthSummit from "@/components/eafs/PreviousSummit/FifthSummit";
import FourthSummit from "@/components/eafs/PreviousSummit/FourthSummit";
import ThirdSummit from "@/components/eafs/PreviousSummit/ThirdSummit";
import SecondSummit from "@/components/eafs/PreviousSummit/SecondSummit";
import FirstSummit from "@/components/eafs/PreviousSummit/FirstSummit";
import UpcomingEvents from "@/components/Home/UpcomingEvents";
import OrganizersPartners from "@/components/eafs/Landing/OrganizersPartners";
import RegistrationCTA from "@/components/eafs/Landing/RegistrationCTA";
import Footer from "@/components/Home/Footer";

export const metadata = {
  title: "Previous Summits | East Africa Finance Summit",
  description:
    "Explore highlights from past East Africa Finance Summits where thought leaders, innovators, and changemakers came together to shape the region's financial future.",
};

export default function PreviousSummitPage() {
  return (
    <main className="bg-white">
      <Hero />
      <SummitHighlight />
      <SixthSummit />
      <FifthSummit />
      <FourthSummit />
      <ThirdSummit />
      <SecondSummit />
      <FirstSummit />
      <UpcomingEvents />
      <OrganizersPartners />
      <RegistrationCTA />
      <Footer />
    </main>
  );
}
