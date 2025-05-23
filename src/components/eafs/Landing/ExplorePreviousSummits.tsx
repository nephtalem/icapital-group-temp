"use client";

import Image from "next/image";
import Link from "next/link";
import ExploreBanner from "@/assets/eafs/Explore-previous-summits/explore-previous-summits-banner.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ExplorePreviousSummits = () => {
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

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
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
    <section className="bg-[#F78019] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]"
          >
            <Image
              src={ExploreBanner}
              alt="East Africa Finance Summit Previous Events"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div variants={contentVariants} className="text-white">
            <motion.h2
              variants={titleVariants}
              className="mb-6 text-3xl font-bold md:text-4xl"
            >
              The East Africa Finance Summit (EAFS) is a premier annual event
            </motion.h2>
            <motion.div variants={textVariants} className="space-y-4">
              <p>
                Convening financial sector leaders, policymakers, and innovators
                from across East Africa. Hosted in Addis Ababa, the summit
                fosters dialogue on emerging trends, policy reforms, and
                investment opportunities, aiming to enhance regional financial
                integration and collaboration.
              </p>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              className="mt-8"
            >
              <Link
                href="/eafs/previous-summit"
                className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#F78019] md:min-w-[200px] lg:text-base"
              >
                Explore Previous Summits
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExplorePreviousSummits;
