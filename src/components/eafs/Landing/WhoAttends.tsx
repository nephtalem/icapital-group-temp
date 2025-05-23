"use client";

import Image from "next/image";
import BankIcon from "@/assets/eafs/who-attends/bank.png";
import BriefcaseIcon from "@/assets/eafs/who-attends/briefcase.png";
import RocketIcon from "@/assets/eafs/who-attends/rocket.png";
import MortarboardIcon from "@/assets/eafs/who-attends/mortarboard.png";
import EarthIcon from "@/assets/eafs/who-attends/earth.png";
import BuildingIcon from "@/assets/eafs/who-attends/building.png";
import LaptopIcon from "@/assets/eafs/who-attends/laptop.png";
import CityIcon from "@/assets/eafs/who-attends/city.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AttendeeCardProps {
  icon: any;
  title: string;
  iconColor: string;
  index: number;
}

const AttendeeCard = ({ icon, title, iconColor, index }: AttendeeCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
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
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="flex flex-col items-start rounded-lg bg-white p-8 transition-all hover:shadow-lg"
      style={{
        boxShadow: "0px 3.11px 77.76px 0px rgba(0, 0, 0, 0.03)",
      }}
    >
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        className={`mb-5 flex h-16 w-16 items-center justify-center text-${iconColor}`}
      >
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="object-contain"
        />
      </motion.div>
      <h3 className="mb-3 text-left text-xl font-bold text-[#0A244E]">
        {title}
      </h3>
    </motion.div>
  );
};

const WhoAttends = () => {
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
        staggerChildren: 0.1,
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

  const descriptionVariants = {
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

  const attendees = [
    {
      icon: BankIcon,
      title: "Banks and Insurers",
      iconColor: "cyan-500",
    },
    {
      icon: BriefcaseIcon,
      title: "Executives and Industry Leaders",
      iconColor: "purple-500",
    },
    {
      icon: RocketIcon,
      title: "Fintech and Startups",
      iconColor: "red-500",
    },
    {
      icon: MortarboardIcon,
      title: "Academia & Researchers",
      iconColor: "amber-500",
    },
    {
      icon: EarthIcon,
      title: "International Organizations",
      iconColor: "yellow-500",
    },
    {
      icon: BuildingIcon,
      title: "Government Agencies",
      iconColor: "blue-500",
    },
    {
      icon: LaptopIcon,
      title: "Tech & Innovation Hubs",
      iconColor: "pink-500",
    },
    {
      icon: CityIcon,
      title: "Corporates & SME Representatives",
      iconColor: "green-500",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-6 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
        >
          Who Attends?
        </motion.h2>

        <motion.p
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 text-center text-gray-700"
        >
          EAFS brings together a diverse group of participants, including:
        </motion.p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {attendees.map((attendee, index) => (
            <AttendeeCard
              key={index}
              icon={attendee.icon}
              title={attendee.title}
              iconColor={attendee.iconColor}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoAttends;
