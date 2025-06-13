"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import Tag from "@/ui/Tag";
import { useQuery } from "@apollo/client";
import { GET_HOME_PORTFOLIO_SECTION } from "@/graphql/home/home";
import ModernLoader from "@/components/ui/ModernLoader";

// Helper to get full Strapi media URL
const getStrapiMedia = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_DATA || "http://localhost:1337"}${url}`;
};

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const { data, loading, error } = useQuery(GET_HOME_PORTFOLIO_SECTION);

  if (loading) {
    return <ModernLoader />;
  }

  if (error) {
    return (
      <section className="bg-gray-50 px-6 py-16 text-center">
        <div className="text-red-500">Error loading portfolio section</div>
      </section>
    );
  }

  const section = data?.home?.PortfolioSection;
  const portfolios = section?.portfolios || [];

  return (
    <section className="bg-gray-50 px-6 py-16 text-center">
      <div>
        <Tag
          title={section?.sectionTitle || "Portfolio"}
          titleColor="text-[#F78019]"
          bgColor="bg-[#F7801926]"
        />
        <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
          {section?.sectionHeading || "What We Have Achieved So Far"}
        </h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-10 grid max-w-[1320px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 "
        >
          {portfolios
            .slice(0, showAll ? portfolios.length : 3)
            .map((item: any) => (
              <motion.div
                key={item.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={`/portfolios/${item.slug}`} passHref>
                  <div className="group mx-auto max-w-[480px] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="flex min-h-[260px] items-center justify-center bg-[rgba(247,128,25,0.1)] p-12">
                      <Image
                        src={getStrapiMedia(item.cardImage?.url)}
                        alt={item.title}
                        width={340}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col p-8">
                      <h3 className="text-left text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="mt-6 inline-block self-end text-orange-500">
                        View Project →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </motion.div>

        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
          >
            {showAll ? (
              <>
                <span>See Less</span>
                <FaChevronUp />
              </>
            ) : (
              <>
                <span>See More</span>
                <FaChevronDown />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
