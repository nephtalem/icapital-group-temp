"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_SECTORS_SECTION } from "@/graphql/home/home";
import Tag from "@/ui/Tag";
import ModernLoader from "@/components/ui/ModernLoader";

// Helper to get full Strapi media URL
const getStrapiMedia = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_DATA }${url}`;
};

// Define types for our data
interface ImageData {
  url: string;
  width: number;
  height: number;
}

interface Card {
  title: string;
  description: string;
  link: string;
  originalWebsiteBgColor: string;
  isGradient: boolean;
  image: ImageData;
  logo: ImageData;
}

interface SectorsData {
  tagTitle: string;
  heading: string;
  description: string;
  cards: Card[];
}

const Sectors = () => {
  const pathname = usePathname();
  const { data, loading, error } = useQuery(GET_SECTORS_SECTION);

  // Helper function to determine if a color is dark based on its hex value
  const isColorDark = (hexColor: string): boolean => {
    if (hexColor?.includes("gradient")) {
      return true;
    }
    const hex = hexColor?.replace("#", "");
    const r = parseInt(hex?.substring(0, 2), 16);
    const g = parseInt(hex?.substring(2, 4), 16);
    const b = parseInt(hex?.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  };

  const getElementColor = (card: Card): string => {
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

  if (loading) {
    return <ModernLoader />;
  }

  if (error) {
    return (
      <section className="bg-[#F8F8F8] px-6 py-16 md:px-12">
        <div className="text-center text-red-500">
          Error loading sectors section
        </div>
      </section>
    );
  }

  const sectorsData = data?.home?.SectorsSection as SectorsData;

  if (!sectorsData) {
    return (
      <section className="bg-[#F8F8F8] px-6 py-16 md:px-12">
        <div className="text-center text-red-500">
          No sectors data available
        </div>
      </section>
    );
  }

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
            title={sectorsData.tagTitle}
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
          {sectorsData.heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs text-gray-600 md:text-base"
        >
          {sectorsData.description}
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
        {sectorsData.cards.map((card: Card, index: number) => (
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
                src={getStrapiMedia(card.image.url)}
                alt={card.title}
                fill
                className="rounded-t-2xl object-cover transition-all duration-500"
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
                      src={getStrapiMedia(card.logo.url)}
                      alt={`${card.title} Logo`}
                      fill
                      className="object-contain"
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
