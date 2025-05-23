"use client";

import Image from "next/image";
import NetworkingIcon from "@/assets/eafs/why-to-attend/blockchain-04.png";
import InsightsIcon from "@/assets/eafs/why-to-attend/idea-01.png";
import CollaborationIcon from "@/assets/eafs/why-to-attend/agreement-02.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhyAttend = () => {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
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

  const reasons = [
    {
      icon: NetworkingIcon,
      title: "Networking",
      description:
        "Connect with over 500 industry leaders, policymakers, and innovators.",
    },
    {
      icon: InsightsIcon,
      title: "Insights",
      description:
        "Gain knowledge on financial sector reforms, fintech advancements, and investment opportunities.",
    },
    {
      icon: CollaborationIcon,
      title: "Collaboration",
      description:
        "Engage in discussions aimed at fostering regional financial integration and partnerships.",
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
          Why to Attend?
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col items-start rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className="mb-5 flex h-16 w-16 items-center justify-center text-[#F78019]"
              >
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={64}
                  height={64}
                  className="object-contain"
                  priority={index === 1}
                />
              </motion.div>
              <h3 className="mb-3 text-xl font-bold text-[#0A244E]">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAttend;
