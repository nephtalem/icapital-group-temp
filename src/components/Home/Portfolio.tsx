"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PortfolioImg1 from "@/assets/portfolio-img-1.png";
import PortfolioImg2 from "@/assets/portfolio-img-2.png";
import PortfolioImg3 from "@/assets/portfolio-img-3.png";
import PortfolioImg4 from "@/assets/portfolio-img-4.png";
import PortfolioImg5 from "@/assets/portfolio-img-5.png";
import PortfolioImg6 from "@/assets/portfolio-img-6.png";
import Link from "next/link";
import Tag from "@/ui/Tag";

const portfolioItems = [
  { id: 1, title: "Digital Literacy Assessment", image: PortfolioImg1 },
  {
    id: 2,
    title: "Job Description Job Evaluation and Competency Assessment",
    image: PortfolioImg2,
  },
  {
    id: 3,
    title: "Organizational Transformation",
    image: PortfolioImg3,
  },
  {
    id: 4,
    title: "Strategy and Organizational Transformation",
    image: PortfolioImg4,
  },
  {
    id: 5,
    title: "Structured on-the-job Training Implementation",
    image: PortfolioImg5,
  },
  {
    id: 6,
    title: "Organizational Training Need Assessment",
    image: PortfolioImg6,
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-gray-50 px-6 py-16 text-center">
      <Tag
        title="Portfolio"
        titleColor="text-[#F78019]"
        bgColor="bg-[#F7801926]"
      />
      <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
        What We Have Achieved So Far
      </h2>

      <div className="mx-auto mt-10 grid max-w-[1320px] grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems
          .slice(0, showAll ? portfolioItems.length : 3)
          .map((item) => {
            const slug = item.title.toLowerCase().replace(/\s+/g, "-"); // Generate URL-friendly slug

            return (
              <AnimatePresence key={item.id}>
                <Link href={`/portfolios/${slug}`} passHref>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="duration-400 cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all   hover:scale-105 hover:shadow-xl"
                    style={{ height: "400px" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full object-cover transition-all duration-500"
                    />
                    <div className="p-5 flex flex-col ">
                      <h3 className="text-left text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="mt-6 inline-block text-orange-500 self-end">
                        View Project →
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </AnimatePresence>
            );
          })}
      </div>

      <div className="mt-8 flex justify-center">
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all  duration-500 hover:bg-orange-600"
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
    </section>
  );
};

export default Portfolio;
