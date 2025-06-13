"use client";

import { motion, useAnimation, HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_TRUSTED_COMPANIES_SLIDER } from "@/graphql/home/home";
import ModernLoader from "@/components/ui/ModernLoader";

interface Logo {
  logo: Array<{
    url: string;
  }>;
  altText?: string;
}

interface SliderData {
  sectionTitle?: string;
  logos: Logo[];
}

const DEFAULT_SECTION_TITLE = "As Trusted by Top Companies";
const ANIMATION_DURATION = 20; // seconds for one complete loop

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

const Slider: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const { data, loading, error } = useQuery<{
    home: { trustedCompaniesSlider: SliderData };
  }>(GET_TRUSTED_COMPANIES_SLIDER);

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading slider.</div>;

  const sliderData = data?.home?.trustedCompaniesSlider;
  const sectionTitle = sliderData?.sectionTitle || DEFAULT_SECTION_TITLE;
  const logos = sliderData?.logos || [];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  const getImageUrl = (url: string): string => {
    return url.startsWith("http")
      ? url
      : `${process.env.NEXT_PUBLIC_DATA || "http://localhost:1337"}${url}`;
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
        {sectionTitle}
      </motion.h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: ANIMATION_DURATION,
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((item, index) => (
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
              className="flex h-16 w-32 flex-shrink-0 items-center justify-center md:h-20 md:w-40"
            >
              {item.logo?.[0]?.url && (
                <div className="relative h-full w-full">
                  <Image
                    src={getImageUrl(item.logo[0].url)}
                    alt={item.altText || "Company Logo"}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-contain grayscale filter transition-all duration-300 hover:brightness-110 hover:grayscale-0"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Slider;
