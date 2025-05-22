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

const milestones = [
  {
    year: "2011",
    image: Step1,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar eu tellus.",
    size: "h-5 w-5",
    iconSize: 12,
  },
  {
    year: "2016",
    image: Step2,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar eu tellus viverra velit.",
    size: "h-6 w-6",
    iconSize: 16,
  },
  {
    year: "2022",
    image: Step3,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar eu tellus viverra velit.",
    size: "h-7 w-7",
    iconSize: 18,
  },
  {
    year: "2025 & Counting",
    image: Step4,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar eu tellus viverra velit.",
    size: "h-8 w-8",
    iconSize: 20,
    highlight: true,
  },
];

const Journey = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

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
            title="Our Journey"
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
          Moving Through Years with Success
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
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-start"
            >
              {/* Circle with Icon */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className={`absolute -left-5 flex items-center justify-center rounded-full bg-white ${milestone.size} border-4 border-orange-300`}
                style={{ marginLeft: index * -2 }}
              >
                <Image
                  src={milestone.image}
                  alt={milestone.year}
                  width={milestone.iconSize}
                  height={milestone.iconSize}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
                className={`ml-14 text-gray-700 ${index === 3 ? "ml-16" : ""}`}
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
              src={JourneyImg}
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
