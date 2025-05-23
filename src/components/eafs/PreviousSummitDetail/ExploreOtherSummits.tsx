"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PreviousSummit, previousSummits } from "@/data/previousSummits";

interface ExploreOtherSummitsProps {
  currentSummitId: string;
}

const getOrdinalTitle = (title: string) => {
  const match = title.match(/^(\d+)(st|nd|rd|th) (.+)$/);
  if (match) {
    return (
      <>
        <span className="font-bold">
          The <sup>{match[1] + match[2]}</sup> {match[3]}
        </span>
      </>
    );
  }
  return <span className="font-bold">{title}</span>;
};

const ExploreOtherSummits = ({ currentSummitId }: ExploreOtherSummitsProps) => {
  const otherSummits = Object.values(previousSummits).filter(
    (s) => s.id !== currentSummitId,
  );

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-12 text-center text-2xl font-bold text-[#253E5E] md:text-3xl">
          Explore Other Summits
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherSummits.map((summit, i) => (
            <motion.div
              key={summit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-xl bg-white p-8 shadow-sm transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="mb-3 text-xl text-[#253E5E]">
                {getOrdinalTitle(summit.title)}
              </div>
              <div className="mb-8 line-clamp-4 text-base text-gray-600 md:text-lg">
                {summit.description}
              </div>
              <Link
                href={`/eafs/previous-summit/${summit.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#F78019] px-6 py-2 font-semibold text-[#F78019] transition-all hover:bg-[#F78019]/10 hover:shadow-md"
              >
                Summit details <span className="text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOtherSummits;
