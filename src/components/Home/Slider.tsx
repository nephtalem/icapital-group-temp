"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// Import company logos
import CompanyLogo1 from "@/assets/company-logo-1.png";
import CompanyLogo2 from "@/assets/company-logo-2.png";
import CompanyLogo3 from "@/assets/company-logo-3.png";
import CompanyLogo4 from "@/assets/company-logo-4.png";
import CompanyLogo5 from "@/assets/company-logo-5.png";
import CompanyLogo6 from "@/assets/company-logo-6.png";
import CompanyLogo7 from "@/assets/company-logo-7.png";
import CompanyLogo8 from "@/assets/company-logo-8.png";
import CompanyLogo9 from "@/assets/company-logo-1.png";
import CompanyLogo10 from "@/assets/company-logo-2.png";
import CompanyLogo11 from "@/assets/company-logo-3.png";
import CompanyLogo12 from "@/assets/company-logo-4.png";

const logos = [
  CompanyLogo1,
  CompanyLogo2,
  CompanyLogo3,
  CompanyLogo4,
  CompanyLogo5,
  CompanyLogo6,
  CompanyLogo7,
  CompanyLogo8,
  CompanyLogo9,
  CompanyLogo10,
  CompanyLogo11,
  CompanyLogo12,
];

// Duplicate logos for seamless loop
const duplicatedLogos = [...logos, ...logos];

const Slider = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 text-center text-xl font-bold text-[#061C3D] md:text-4xl"
      >
        As Trusted by Top Companies
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              initial="hidden"
              animate={controls}
              whileInView="visible"
              viewport={{ once: false }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="flex w-24 flex-shrink-0 items-center justify-center md:w-32"
            >
              <Image
                src={logo}
                alt={`Company Logo ${(index % logos.length) + 1}`}
                width={80}
                height={80}
                className="h-auto w-full object-contain transition-all duration-300 hover:brightness-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
