"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Hero from "@/components/eafs/PreviousSummitDetail/Hero";
import RecapRewind from "@/components/eafs/PreviousSummitDetail/RecapRewind";
import OpeningRemark from "@/components/eafs/PreviousSummitDetail/OpeningRemark";
import OpeningSession from "@/components/eafs/PreviousSummitDetail/OpeningSession";
import SessionOne from "@/components/eafs/PreviousSummitDetail/SessionOne";
import OrganizersPartners from "@/components/eafs/PreviousSummitDetail/OrganizersPartners";
import StrategicPartners from "@/components/eafs/PreviousSummitDetail/StrategicPartners";
import ExploreOtherSummits from "@/components/eafs/PreviousSummitDetail/ExploreOtherSummits";
import Footer from "@/components/Home/Footer";
import { previousSummits } from "@/data/previousSummits";

// We'll import these components as we create them
// import Overview from "@/components/eafs/PreviousSummitDetail/Overview";
// import Agenda from "@/components/eafs/PreviousSummitDetail/Agenda";
// import Speakers from "@/components/eafs/PreviousSummitDetail/Speakers";
// import Gallery from "@/components/eafs/PreviousSummitDetail/Gallery";
// import Testimonials from "@/components/eafs/PreviousSummitDetail/Testimonials";
// import Documents from "@/components/eafs/PreviousSummitDetail/Documents";

const PreviousSummitDetail = () => {
  const params = useParams();
  const summitId = params.id as string;
  const summit = previousSummits[summitId];

  return (
    <main className="min-h-screen bg-white">
      <Hero summitId={summitId} />
      {summit && <RecapRewind summit={summit} />}
      {summit && <OpeningRemark summit={summit} />}
      {summit && <OpeningSession summit={summit} />}
      {summit && <SessionOne summit={summit} />}
      <OrganizersPartners />
      <StrategicPartners />
      <ExploreOtherSummits currentSummitId={summitId} />
      <Footer />
      {/* We'll uncomment these as we create each component */}
      {/* <Overview summitId={summitId} /> */}
      {/* <Agenda summitId={summitId} /> */}
      {/* <Speakers summitId={summitId} /> */}
      {/* <Gallery summitId={summitId} /> */}
      {/* <Testimonials summitId={summitId} /> */}
      {/* <Documents summitId={summitId} /> */}
    </main>
  );
};

export default PreviousSummitDetail;
