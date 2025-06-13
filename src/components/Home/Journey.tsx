"use client";

import Image from "next/image";
import JourneyImg from "@/assets/journey-img.jpeg";
import Step1 from "@/assets/step1.png";
import Step2 from "@/assets/step2.png";
import Step3 from "@/assets/step3.png";
import Step4 from "@/assets/step4.png";
import Tag from "@/ui/Tag";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_JOURNEY_SECTION } from "@/graphql/home/home";
import ModernLoader from "@/components/ui/ModernLoader";

const staticIcons = [Step1, Step2, Step3, Step4];

const Journey = () => {
  const controls = useAnimation();
  const { data, loading, error } = useQuery(GET_JOURNEY_SECTION);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading journey section.</div>;
  if (!data?.home?.journeySection) return null;

  const journey = data.home.journeySection;
  const tagTitle = journey.tagTitle || "Our Journey";
  const heading = journey.heading || "Moving Through Years with Success";
  const image = journey.image?.url
    ? journey.image.url.startsWith("http")
      ? journey.image.url
      : (process.env.NEXT_PUBLIC_DATA || "http://localhost:1337") +
        journey.image.url
    : JourneyImg;
  const milestones = journey.milestones || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="flex flex-col items-center px-6 py-16">
      {/* Header */}
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
          className="mt-4 text-center text-3xl font-bold text-gray-900"
        >
          {heading}
        </motion.h2>
      </motion.div>

      {/* Content Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-12 flex w-full max-w-5xl flex-col gap-16 md:max-w-7xl md:flex-row-reverse md:gap-32"
      >
        {/* Timeline */}
        <motion.div
          variants={itemVariants}
          className="relative flex h-[450px] w-full flex-col justify-between pl-6 md:h-[600px] md:w-1/2 md:pl-10"
        >
          <motion.div
            variants={lineVariants}
            className="absolute left-[14px] top-0 h-full border-l-2 border-orange-300 md:left-[30px]"
            style={{ transformOrigin: "top" }}
          />
          {milestones.map((milestone: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-start"
            >
              {/* Circle with Icon (static) */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className={`absolute -left-5 flex h-7 w-7 items-center justify-center rounded-full border-4 border-orange-300 bg-white`}
                style={{ marginLeft: index * -2 }}
              >
                <Image
                  src={staticIcons[index % staticIcons.length]}
                  alt={milestone.year}
                  width={18}
                  height={18}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
                className={`ml-14 text-gray-700 ${index === milestones.length - 1 ? "ml-16" : ""}`}
              >
                <motion.h3
                  className="text-xl font-bold text-[#191919]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {milestone.year}
                </motion.h3>
                <motion.p
                  className="mt-3 max-w-[320px] text-sm"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  {milestone.text}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          className="flex w-full justify-center md:w-1/2 md:justify-end"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="relative h-[375px] w-full overflow-hidden rounded-tl-[100px] md:h-[650px] md:w-[100%]"
          >
            <Image
              src={image}
              alt="Team Working"
              layout="fill"
              objectFit="cover"
              className="w-full transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Journey;
