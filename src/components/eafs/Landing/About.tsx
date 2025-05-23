"use client";

import Image from "next/image";
import Link from "next/link";
import AboutBanner from "@/assets/eafs/about-banner.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
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
        delay: 0.6,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div
          ref={ref}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              custom={0}
              variants={textVariants}
              className="mb-6 text-3xl font-bold text-[#253E5E] md:text-4xl"
            >
              About EAFS
            </motion.h2>
            <div className="space-y-4 text-gray-700">
              <motion.p custom={1} variants={textVariants}>
                A multilateral dialogue shaping the future of finance by uniting
                industry experts, policymakers, and government officials. The
                summit features engaging panels, presentations, and case studies
                packed with actionable insights, best practices, and industry
                knowledge.
              </motion.p>
              <motion.p custom={2} variants={textVariants}>
                With 400+ participants, it offers rich opportunities for
                networking and collaboration with key stakeholders from East
                Africa and beyond. EAFS also enables unparalleled business
                matching, investment partnerships, and growth opportunities in
                the finance sector.
              </motion.p>
            </div>
            <motion.div className="mt-8" variants={buttonVariants}>
              <Link
                href="/eafs/previous-summit"
                className="inline-block min-w-[200px] rounded-full bg-[#F78019] px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-orange-600 lg:text-base"
              >
                Explore Previous Summits
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg md:h-[500px]">
              <Image
                src={AboutBanner}
                alt="East Africa Finance Summit"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
