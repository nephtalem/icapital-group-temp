"use client";

import Image from "next/image";
import Tag from "@/ui/Tag";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_FEATURES_SECTION } from "@/graphql/home/home";
import parse from "html-react-parser";
import React from "react";
import ModernLoader from "@/components/ui/ModernLoader";    

function renderDescription(description: any) {
  if (typeof description === "string") {
    return parse(description);
  }
  if (Array.isArray(description)) {
    // Strapi blocks: join all children text
    return description.map((block: any, idx: number) =>
      block && Array.isArray(block.children) ? (
        <p key={idx}>
          {block.children.map((child: any) => child.text).join("")}
        </p>
      ) : null,
    );
  }
  return "";
}

const Features = () => {
  const controls = useAnimation();
  const { data, loading, error } = useQuery(GET_FEATURES_SECTION);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading features section.</div>;

  const featuresSection = data?.home?.features;
  const tagTitle = featuresSection?.tagTitle || "Features";
  const heading = featuresSection?.heading || "What Makes us Unique";
  const features = featuresSection?.features || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const iconVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-full px-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
          >
            <Tag
              title={tagTitle}
              titleColor="text-[#F78019]"
              bgColor="bg-[#F7801926]"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-bold leading-snug text-gray-900 md:text-4xl"
          >
            {heading}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10"
        >
          {features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="group relative rounded-xl bg-white px-6 py-12 shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <motion.div
                variants={iconVariants}
                className="mb-6 flex h-14 w-14 items-center"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                {feature.icon?.url && (
                  <Image
                    src={
                      feature.icon.url.startsWith("http")
                        ? feature.icon.url
                        : (process.env.NEXT_PUBLIC_DATA ||
                            "http://localhost:1337") + feature.icon.url
                    }
                    alt={feature.title}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                )}
              </motion.div>
              <motion.h3
                className="mb-3 text-2xl font-bold text-[#061C3D] transition-colors duration-300 group-hover:text-[#F78019]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.div
                className="mt-2 leading-relaxed text-gray-600"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {renderDescription(feature.description)}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
