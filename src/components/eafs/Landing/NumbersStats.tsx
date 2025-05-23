"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaMicrophone,
  FaBuilding,
  FaUsers,
  FaGlobeAfrica,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  index: number;
}

const StatItem = ({
  icon,
  value,
  suffix = "",
  label,
  duration = 2,
  index,
}: StatItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
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

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover="hover"
      className="flex items-center space-x-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        className="flex h-14 w-14 flex-shrink-0 items-center justify-center text-2xl text-[#0A244E]"
      >
        {icon}
      </motion.div>
      <div>
        <motion.div
          variants={itemVariants}
          className="text-2xl font-bold text-[#0A244E]"
        >
          {inView ? (
            <CountUp
              start={0}
              end={value}
              duration={duration}
              separator=","
              suffix={suffix}
            />
          ) : (
            "0"
          )}
        </motion.div>
        <motion.div variants={itemVariants} className="text-sm text-gray-500">
          {label}
        </motion.div>
      </div>
    </motion.div>
  );
};

const NumbersStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
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

  const stats = [
    {
      icon: <FaMicrophone />,
      value: 8,
      label: "Summits",
    },
    {
      icon: <FaBuilding />,
      value: 20,
      suffix: "+",
      label: "Companies",
    },
    {
      icon: <FaUsers />,
      value: 500,
      suffix: "+",
      label: "Individuals",
    },
    {
      icon: <FaGlobeAfrica />,
      value: 8,
      suffix: "+",
      label: "Countries",
    },
    {
      icon: <FaUserTie />,
      value: 50,
      suffix: "+",
      label: "High Officials",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
        >
          EAFS in Numbers
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NumbersStats;
