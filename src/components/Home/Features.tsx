"use client";

import Image from "next/image";
import Icon1 from "@/assets/feature-icon-1.png";
import Icon2 from "@/assets/features-icon-2.png";
import Icon3 from "@/assets/features-icon-3.png";
import Icon4 from "@/assets/features-icon-4.png";
import Tag from "@/ui/Tag";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Features = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const features = [
    {
      icon: <Image src={Icon1} alt="Feature 1 Icon" width={60} height={60} />,
      title: "We Imagine",
      description:
        "Shaping the future with visionary ideas that redefine possibilities.",
    },
    {
      icon: <Image src={Icon2} alt="Feature 2 Icon" width={60} height={60} />,
      title: "We Develop",
      description:
        "Building innovative solutions that drive sustainable progress.",
    },
    {
      icon: <Image src={Icon4} alt="Feature 3 Icon" width={60} height={60} />,
      title: "We Deliver",
      description:
        "Executing with excellence to create meaningful, long-term impact.",
    },
    {
      icon: <Image src={Icon3} alt="Feature 3 Icon" width={60} height={60} />,
      title: "We Impact",
      description:
        "Empowering organizations to lead, adapt, and thrive in a dynamic world.",
    },
  ];

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
              title="Features"
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
            What Makes us Unique
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
          {features.map((feature, index) => (
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
                className="mb-6 flex"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                className="mb-3 text-2xl font-bold text-[#061C3D] transition-colors duration-300 group-hover:text-[#F78019]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="leading-relaxed text-gray-600"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
