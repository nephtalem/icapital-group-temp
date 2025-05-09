"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import summitBanner from "@/assets/eafs/Explore-previous-summits/summit-banner.png";

const SummitHighlight = () => {
  return (
    <section id="content" className="font-urbanist py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-start gap-16 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold tracking-wide text-[#1A365D]">
              7<sup className="text-lg">th</sup> Summit
            </h2>

            <p className="mt-6 text-base font-light leading-relaxed text-[#4A5568]">
              Lorem ipsum finribo faucibus dignissim congue posuere cursus. Sit
              viverra mi elementum lectus, euismod massa dapwt faucibus. Aliquam
              amet viverra adipiscing semper praesent tempus brem a dui. Eros
              mauris tortor in ipsum mager et adipiscing et egestas. Dictumst
              odio suspendisse feugiat idui nunc dapibus. Pulvinar mil tristique
              mi et. Risus sed et et sed imperdiet odio ornare et.
            </p>

            <Link href="/eafs/previous-summit/7">
              <div className="mt-8 inline-flex items-center rounded-full border border-[#F78019] px-6 py-3 font-medium text-[#F78019] transition-all hover:bg-[#F78019] hover:text-white">
                View details{" "}
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={summitBanner}
                alt="7th East Africa Finance Summit"
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                width={540}
                height={360}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummitHighlight;
