"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const RegistrationCTA = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={titleVariants}
            className="mb-6 text-3xl font-bold text-[#0A244E] md:text-4xl"
          >
            Registration for The 9<sup>th</sup> East African Finance Summit is
            <br />
            Now Open!
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="mb-8 text-center text-gray-700"
          >
            Secure your spot for the upcoming East African Finance Summit on
            <br />
            May 15th 2025 at Skylight Hotel
          </motion.p>

          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            className="flex justify-center"
          >
            <Link
              href="/eafs/registration"
              className="rounded-full bg-[#F78019] px-8 py-3 font-medium text-white transition-all hover:bg-[#e67511] hover:shadow-md"
            >
              Register Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
