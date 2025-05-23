"use client";

import Image from "next/image";
import ICapitalLogo from "@/assets/eafs/organizer-&-partners/iCapital.png";
import ThinkAheadLogo from "@/assets/eafs/organizer-&-partners/ThinkAhead.png";
import JimmaUniversityLogo from "@/assets/eafs/organizer-&-partners/JimmaUniversity.png";
import AEILogo from "@/assets/eafs/organizer-&-partners/AEI.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface PartnerProps {
  name: string;
  logo: any;
  width: number;
  index: number;
}

const PartnerLogo = ({ name, logo, width, index }: PartnerProps) => {
  const logoRef = useRef(null);
  const isInView = useInView(logoRef, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: 20,
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
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={logoRef}
      variants={logoVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="flex items-center justify-center"
    >
      <Image
        src={logo}
        alt={name}
        width={width}
        height={100}
        className="h-auto max-h-28 w-auto object-contain transition-all"
      />
    </motion.div>
  );
};

const OrganizersPartners = () => {
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

  const partners = [
    {
      name: "iCapital Institute",
      logo: ICapitalLogo,
      width: 200,
    },
    {
      name: "ACCA Think Ahead",
      logo: ThinkAheadLogo,
      width: 220,
    },
    {
      name: "Jimma University",
      logo: JimmaUniversityLogo,
      width: 200,
    },
    {
      name: "Association of Ethiopian Insurers",
      logo: AEILogo,
      width: 220,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
        >
          Organizers & Partners
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-evenly gap-x-24 gap-y-16 px-4"
        >
          {partners.map((partner, index) => (
            <PartnerLogo
              key={index}
              name={partner.name}
              logo={partner.logo}
              width={partner.width}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OrganizersPartners;
