"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Card1Img from "@/assets/card1.png";
import Card2Img from "@/assets/card2.png";
import Card3Img from "@/assets/card3.png";
import Card4Img from "@/assets/card4.png";
import Card5Img from "@/assets/card5.png";
import Card6Img from "@/assets/card6.png";
import Tag from "@/ui/Tag";
import { FiExternalLink } from "react-icons/fi";
import FrontierTechLogo from "@/assets/logos/frontier-logo.png";
import IcapitalInstituteLogo from "@/assets/logos/icapital-institute-logo.png";
import InvestifyLogo from "@/assets/logos/investify-logo.png";
import LeadLifeDesignLabLogo from "@/assets/logos/LEAD-Logo.png";
import IcapitalInvestmentLogo from "@/assets/logos/iip-green-logo.png";
import EAFSLogo from "@/assets/logos/EAFS-Logo.png";
import ExcelerateLogo from "@/assets/logos/excelerate.png";

const cards = [
  {
    image: Card1Img,
    title: "Training & Consulting Solutions",
    description:
      "We provide expert-led training programs and consulting services designed to empower professionals and businesses with the skills needed to navigate today's dynamic market.",
    link: "https://i-capital-institute.vercel.app/",
    website: "icapital.institute",
    logo: IcapitalInstituteLogo,
    originalWebsiteBgColor: "linear-gradient(to right, #253E5E, #19A2F7)",
    isGradient: true,
  },
  {
    image: Card2Img,
    title: "Icapital Investment Partners",
    description:
      "Offering investment advisory, financial planning, and capital market insights to help businesses and individuals make informed investment decisions.",
    link: "https://i-capital-investment-partners.vercel.app/",
    website: "investify.et",
    logo: IcapitalInvestmentLogo,
    originalWebsiteBgColor: "#06302F",
    isGradient: true,
  },
  {
    image: Card3Img,
    title: "Life Design Lab",
    description:
      "A unique program focused on personal and career growth, helping individuals design a fulfilling life through mentorship, coaching, and structured planning.",
    link: "https://lead-life-design-lab.vercel.app/",
    website: "leadlifedesignlab.com",
    logo: LeadLifeDesignLabLogo,
    originalWebsiteBgColor: "#1D82FF",
  },
  {
    image: Card4Img,
    title: "Software Development Solutions",
    description:
      "Building innovative software solutions tailored to your business needs, from web and mobile applications to enterprise-grade platforms.",
    link: "https://frontiertech.org/",
    website: "frontiertech.org",
    logo: FrontierTechLogo,
    originalWebsiteBgColor: "#00B152",
  },
  {
    image: Card5Img,
    title: "East Africa Finance Summit",
    description:
      "A premier event that brings together industry leaders, policymakers, and experts to discuss financial trends, investment opportunities, and economic growth in East Africa.",
    link: "/eafs",
    website: "eafs.africa",
    logo: EAFSLogo,
    originalWebsiteBgColor: "linear-gradient(to right, #253E5E, #F78019)",
    isGradient: true,
  },
  {
    image: Card6Img,
    title: "International Programs",
    description:
      "Facilitating global exchange programs, professional development opportunities, and cross-border partnerships to foster innovation and collaboration.",
    // link: "https://i-capital-investment-partners.vercel.app/",
    link: "https://excelerate-nine.vercel.app/",
    website: "icapital.excelerate",
    logo: ExcelerateLogo,
    originalWebsiteBgColor: "#044569",
  },
];

const Sectors = () => {
  const pathname = usePathname();

  // Helper function to determine if a color is dark based on its hex value
  const isColorDark = (hexColor: string): boolean => {
    if (hexColor.includes("gradient")) {
      return true;
    }
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  const getElementColor = (card: any): string => {
    if (card.isGradient) {
      if (card.originalWebsiteBgColor.includes("#F78019")) {
        return "#F78019";
      }
      return "#19A2F7";
    }
    return card.originalWebsiteBgColor;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
      rotateX: 10,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section key={pathname} className="bg-[#F8F8F8] px-6 py-16 md:px-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
        >
          <Tag
            title="Group Sectors"
            titleColor="text-[#F78019]"
            bgColor="bg-[#F7801926]"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="my-4 text-xl font-bold text-gray-900 md:my-6 md:text-[40px]"
        >
          Creating Impact Through Diverse Sectors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs text-gray-600 md:text-base"
        >
          Empowering businesses, individuals, and communities with innovative
          solutions that drive growth, development, and success.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {cards.map((card, index) => (
          <motion.div
            key={`sector-card-${index}`}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            onClick={() => {
              if ([1, 2, 3, 5].includes(index)) {
                window.open(card.link, "_blank");
              } else {
                window.location.href = card.link;
              }
            }}
          >
            {/* Image Section */}
            <motion.div
              className="relative h-60 w-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl transition-all duration-500"
              />
            </motion.div>

            {/* Title & Arrow */}
            <div className="flex items-center justify-between p-6">
              <h3 className="block w-fit text-xl font-semibold text-gray-900">
                {card.title.split(" ").slice(0, -1).join(" ")}
                <br />
                {card.title.split(" ").slice(-1)}
              </h3>
              <motion.span
                className="text-2xl text-orange-500"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </div>

            {/* Hover Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex cursor-pointer flex-col justify-between p-6"
              style={{
                background: card.originalWebsiteBgColor,
              }}
            >
              <div>
                <motion.div
                  className="mb-4 flex items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded bg-white p-1 transition-all duration-500 group-hover:scale-110">
                    <Image
                      src={card.logo}
                      alt={`${card.title} Logo`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <h2
                    className="text-3xl font-semibold"
                    style={{
                      color: isColorDark(card.originalWebsiteBgColor)
                        ? "white"
                        : "black",
                    }}
                  >
                    {card.title}
                  </h2>
                </motion.div>
                <p
                  className="leading-relaxed"
                  style={{
                    color: isColorDark(card.originalWebsiteBgColor)
                      ? "rgba(255, 255, 255, 0.8)"
                      : "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {card.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-end">
                <motion.div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <span
                    className="text-xl font-medium"
                    style={{ color: getElementColor(card) }}
                  >
                    →
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Sectors;
