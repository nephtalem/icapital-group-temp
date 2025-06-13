"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Header from "./Header";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_HOME } from "@/graphql/home/home";
import ModernLoader from "@/components/ui/ModernLoader";

const MotionSpan = motion.span as React.ComponentType<
  React.ComponentPropsWithoutRef<"span"> & HTMLMotionProps<"span">
>;
const MotionH1 = motion.h1 as React.ComponentType<
  React.ComponentPropsWithoutRef<"h1"> & HTMLMotionProps<"h1">
>;
const MotionP = motion.p as React.ComponentType<
  React.ComponentPropsWithoutRef<"p"> & HTMLMotionProps<"p">
>;
const MotionDiv = motion.div as React.ComponentType<
  React.ComponentPropsWithoutRef<"div"> & HTMLMotionProps<"div">
>;
const MotionA = motion.a as React.ComponentType<
  React.ComponentPropsWithoutRef<"a"> & HTMLMotionProps<"a">
>;
const MotionButton = motion.button as React.ComponentType<
  React.ComponentPropsWithoutRef<"button"> & HTMLMotionProps<"button">
>;

const Hero = () => {
  const [active, setActive] = useState(0);
  const { data, loading, error } = useQuery(GET_HOME);

  const strapiBaseUrl = process.env.NEXT_PUBLIC_DATA || "http://localhost:1337";

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
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
        ease: [0.6, -0.05, 0.01, 0.99],
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // Helper to extract plain text from Strapi rich text blocks
  const getDescriptionText = (description: any) => {
    if (Array.isArray(description)) {
      return description
        .map((block: any) =>
          block.children?.map((child: any) => child.text).join(" "),
        )
        .join("\n");
    }
    return "";
  };

  if (loading) return <ModernLoader />;
  if (error) {
    return (
      <div className="relative h-screen w-full overflow-hidden rounded-br-[70px] md:rounded-br-[100px]">
        <Header />
        <div className="flex h-full items-center justify-center">
          <p className="text-red-500">Error loading hero content</p>
        </div>
      </div>
    );
  }

  const slides = data?.home?.hero_slides || [];

  return (
    <div className="relative h-screen w-full overflow-hidden rounded-br-[70px] md:rounded-br-[100px]">
      {/* Fixed Header */}
      <Header />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={slides.length > 1}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <Image
                src={`${strapiBaseUrl}${slide.backgroundImage.url}`}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(89.66deg, rgba(37, 62, 94, 0.5) 0.29%, rgba(247, 128, 25, 0.5) 99.71%)",
                }}
              />

              {/* Hero Content */}
              <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-8 text-white md:px-16 lg:px-32">
                {/* Content Wrapper */}
                <div className="w-full max-w-4xl space-y-6 md:space-y-8">
                  {/* Event Badge */}
                  {slide.bagde && (
                    <MotionSpan
                      variants={badgeVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="rounded-full bg-white bg-opacity-20 px-4 py-2 text-base tracking-wide text-white lg:text-base"
                    >
                      {slide.bagde}
                    </MotionSpan>
                  )}

                  {/* Title */}
                  <motion.h1
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-4xl font-bold leading-[50px] sm:text-5xl lg:text-6xl lg:leading-[80px]"
                  >
                    {slide.title.split(" ").map((word: string, i: number) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={wordVariants}
                        className="mr-2 inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={descriptionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-2xl text-lg text-gray-200 lg:text-2xl"
                  >
                    {getDescriptionText(slide.description)}
                  </motion.p>

                  {/* Buttons */}
                  <MotionDiv
                    variants={buttonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col items-start space-y-4 md:flex-row md:space-x-4 md:space-y-0"
                  >
                    {slide.buttonText && (
                      <MotionA
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={slide.buttonLink}
                        className="w-fit rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-orange-600 lg:text-base"
                      >
                        {slide.buttonText} →
                      </MotionA>
                    )}
                    <Link href="/news">
                      <MotionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-fit rounded-full border border-white px-6 py-3 text-sm text-white transition duration-300 hover:bg-white hover:text-gray-900 lg:text-base"
                      >
                        More News →
                      </MotionButton>
                    </Link>
                  </MotionDiv>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 transform items-center gap-3">
        {slides.map((_: any, index: number) => (
          <Dot key={index} active={index === active} />
        ))}
      </div>
    </div>
  );
};

export default Hero;

// Dot Component
const Dot = ({ active }: { active: boolean }) => {
  return (
    <motion.div
      animate={{
        scale: active ? 1.2 : 1,
        backgroundColor: active ? "#F78019" : "#D4D4D8",
      }}
      transition={{ duration: 0.2 }}
      className={twMerge(
        "h-4 w-4 rounded-full duration-200 ease-in",
        active && "h-6 w-6",
      )}
    />
  );
};
