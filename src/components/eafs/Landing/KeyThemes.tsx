"use client";

import Image from "next/image";
import FinanceIcon from "@/assets/eafs/Key-themes/Finance.png";
import FintechIcon from "@/assets/eafs/Key-themes/Fintech.png";
import InsuranceIcon from "@/assets/eafs/Key-themes/Insurance.png";
import RegionalIcon from "@/assets/eafs/Key-themes/Regional.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ThemeCardProps {
  icon: any;
  title: string;
  description: string;
  iconBgColor: string;
  index: number;
}

const ThemeCard = ({
  icon,
  title,
  description,
  iconBgColor,
  index,
}: ThemeCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="flex flex-col items-start rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md"
    >
      <div className="mb-5 flex items-center">
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className={`flex h-16 w-16 items-center justify-center rounded-lg ${iconBgColor} mr-4`}
        >
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="object-contain"
          />
        </motion.div>
        <h3 className="text-xl font-bold text-[#0A244E]">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

const KeyThemes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const themes = [
    {
      icon: FinanceIcon,
      title: "Financial Sector Reform & Capital Markets",
      description:
        "Insights into Ethiopia's economic reforms, financial sector liberalization, and the establishment of a national capital market.",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: FintechIcon,
      title: "Fintech & Digital Transformation",
      description:
        "The impact of fintech, mobile money, and digital platforms in expanding financial access and driving innovation across the region.",
      iconBgColor: "bg-green-100",
    },
    {
      icon: InsuranceIcon,
      title: "Insurance & Risk Management",
      description:
        "Advancing insurance with data-driven pricing, insurtech solutions, and the development of independent regulatory frameworks.",
      iconBgColor: "bg-orange-100",
    },
    {
      icon: RegionalIcon,
      title: "Regional Integration & Investment",
      description:
        "Strategies for harmonizing financial systems, enhancing cross-border investments, and fostering regional economic collaboration.",
      iconBgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
        >
          Key Themes
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {themes.map((theme, index) => (
            <ThemeCard key={index} {...theme} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyThemes;
