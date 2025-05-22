"use client";

import { motion } from "framer-motion";

const Subscribe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="border-t-2 border-blue-400 bg-[#1F3758] px-6 py-12 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row"
      >
        {/* Left Content */}
        <motion.h2
          variants={itemVariants}
          className="max-w-lg text-2xl font-bold text-white md:text-3xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="text-orange-400"
          >
            Get Updated
          </motion.span>{" "}
          with Our News & Announcements!
        </motion.h2>

        {/* Right Content */}
        <motion.div
          variants={itemVariants}
          className="mt-4 w-full max-w-md md:mt-0"
        >
          <motion.p
            variants={itemVariants}
            className="mb-2 text-sm text-gray-200 md:text-base"
          >
            Subscribe to our newsletter!
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="flex overflow-hidden rounded-full bg-white shadow-md"
          >
            <motion.input
              variants={inputVariants}
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 text-gray-700 focus:outline-none"
            />
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-orange-500 px-6 py-2 font-semibold text-white shadow-md transition hover:bg-orange-600"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
