"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_GET_STARTED_SECTION } from "@/graphql/home/home";
import ModernLoader from "@/components/ui/ModernLoader";

const GetStarted = () => {
  const { data, loading, error } = useQuery(GET_GET_STARTED_SECTION);

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading Get Started section.</div>;
  if (!data?.home?.getStartedSection) return null;

  const section = data.home.getStartedSection;
  const heading =
    section.heading ||
    "Empower Your Business—Transform, Innovate, and Lead Today!";
  const description =
    section.description ||
    "Join us in shaping the future of business excellence.";
  const buttonText = section.buttonText || "Get Started";
  const buttonLink = section.buttonLink || "/contact";
  const services = section.services || [];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="bg-white px-6 py-16 text-center">
      <motion.div
        {...({
          variants: containerVariants,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: false },
          className: "mx-auto max-w-4xl",
        } as any)}
      >
        {/* Heading */}
        <motion.h2
          {...({
            variants: itemVariants,
            className: "text-2xl font-bold text-[#061C3D] md:text-4xl",
          } as any)}
        >
          {heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          {...({
            variants: itemVariants,
            className:
              "mt-4 text-sm leading-relaxed text-gray-500 md:text-base",
          } as any)}
        >
          {description}
        </motion.p>

        {/* Services List */}
        <motion.div
          {...({
            variants: containerVariants,
            className:
              "mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-600 md:text-base",
          } as any)}
        >
          {services.map((service: any, index: number) => (
            <React.Fragment key={service.name}>
              <motion.div
                {...({
                  custom: index,
                  variants: serviceVariants,
                  className:
                    "flex items-center gap-2 border-gray-500 px-2 last:border-r-0 sm:border-r-2 rounded-lg transition-all duration-200 hover:bg-orange-50 hover:shadow-md hover:text-orange-600",
                } as any)}
              >
                {service.link.startsWith("/") ? (
                  <Link
                    href={service.link}
                    className="flex h-full w-full items-center gap-2"
                  >
                    <motion.span
                      {...({
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.2 + index * 0.1,
                        },
                        className: "text-orange-500",
                      } as any)}
                    >
                      ◆
                    </motion.span>
                    {service.name}
                  </Link>
                ) : (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full w-full items-center gap-2"
                  >
                    <motion.span
                      {...({
                        initial: { scale: 0 },
                        animate: { scale: 1 },
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.2 + index * 0.1,
                        },
                        className: "text-orange-500",
                      } as any)}
                    >
                      ◆
                    </motion.span>
                    {service.name}
                  </a>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>

        {/* Button */}
        <div className="flex justify-center">
          {buttonLink.startsWith("/") ? (
            <Link
              href={buttonLink}
              className="mt-6 flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
            >
              {buttonText}
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
          ) : (
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
            >
              {buttonText}
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
