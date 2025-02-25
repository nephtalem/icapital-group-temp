"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

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

// Duplicate logos for smooth infinite scrolling
const duplicatedLogos = [...logos, ...logos];

const Slider = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: ["0%", "-100%"],
        transition: {
          ease: "linear",
          duration: 20, // Adjust speed for smooth scrolling
          repeat: Infinity,
        },
      });
    };
    animate();
  }, [controls]);

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-xl md:text-3xl font-bold text-gray-900 mb-8">
        As Trusted by Top Companies
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          ref={containerRef}
          animate={controls}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="w-24 md:w-32 flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo}
                alt={`Company Logo ${(index % logos.length) + 1}`}
                width={80}
                height={80}
                className="object-contain w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
