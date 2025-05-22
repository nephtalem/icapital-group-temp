"use client";
import AboutUsImg from "@/assets/about-us.png";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Tag from "@/ui/Tag";
import { motion, useAnimation } from "framer-motion";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
    controls.start("visible");
  }, [controls]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

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

  const buttonVariants = {
    initial: {
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      boxShadow:
        "0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)",
      transition: {
        duration: 0.1,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-[#253E5E] px-6 py-16 md:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="container mx-auto flex flex-col gap-12 md:flex-row"
      >
        {/* Image Section */}
        <motion.div variants={itemVariants} className="w-full md:w-1/2">
          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
            className="relative h-[400px] w-full overflow-hidden"
          >
            <Image
              src={AboutUsImg}
              alt="About Group"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-[70px] shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="w-full text-left md:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
          >
            <Tag
              title="About Group"
              titleColor="text-[#F78019]"
              bgColor="bg-[#F7801926]"
            />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-4 text-xl font-bold leading-snug text-white md:text-4xl"
          >
            The i-Capital Africa Institute: A Leading Business Consulting &
            Services Company
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-xs leading-loose text-gray-300 md:text-lg md:leading-relaxed"
          >
            The i-Capital Africa Institute is a professional service firm.
            Founded in 2015, we offer a full range of Human Capital Development
            solutions to clients in various sectors. Our approach is
            business-driven and we work to co-create innovative...
          </motion.p>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: showMore ? "auto" : 0,
              opacity: showMore ? 1 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="pb-4">
              <motion.p
                variants={itemVariants}
                className="mt-4 text-xs leading-loose text-gray-300 md:text-lg md:leading-relaxed"
              >
                Our services include consulting in strategy formulation,
                organizational effectiveness, talent management, leadership
                development, and corporate training. What sets us apart is our
                unique methodology that combines global best practices with deep
                understanding of local contexts across Africa.
              </motion.p>
            </div>
          </motion.div>

          {/* Learn More Button */}
          <motion.div variants={itemVariants} className="mt-6">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={!showMore ? "pulse" : "initial"}
              onClick={toggleShowMore}
              className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-orange-600 md:px-6 md:py-3 md:text-lg"
            >
              {showMore ? "Show Less" : "Learn More"}
              <motion.span
                animate={{
                  rotate: showMore ? 180 : 0,
                  y: !showMore ? [0, 4, 0] : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  y: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              >
                <FaArrowDown className="text-xl" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
