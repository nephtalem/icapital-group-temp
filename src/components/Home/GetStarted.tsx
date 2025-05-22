"use client";

import React from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="bg-white px-6 py-16 text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mx-auto max-w-4xl"
      >
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-[#061C3D] md:text-4xl"
        >
          Empower Your Business—Transform, Innovate, and Lead Today!
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base"
        >
          Join us in shaping the future of business excellence.
        </motion.p>

        {/* Services List */}
        <motion.div
          variants={containerVariants}
          className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-600 md:text-base"
        >
          {[
            "Business Consulting",
            "HR & Workforce Development",
            "Digital Transformation",
            "Capital Market Solutions",
          ].map((service, index) => (
            <motion.span
              key={service}
              custom={index}
              variants={serviceVariants}
              className="flex items-center gap-2 border-gray-500 px-2 last:border-r-0 sm:border-r-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 + index * 0.1,
                }}
                className="text-orange-500"
              >
                ◆
              </motion.span>
              {service}
            </motion.span>
          ))}
        </motion.div>

        {/* Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto mt-6 flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
        >
          Get Started
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default GetStarted;
