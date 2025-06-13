"use client";

import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_UPCOMING_EVENTS } from "@/graphql/home/home";
import { motion } from "framer-motion";
import ModernLoader from "@/components/ui/ModernLoader";
interface Button {
  buttonText: string;
  buttonLink: string;
}

interface UpcomingEvent {
  title: string;
  tagTitle: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  buttons: Button[];
}

const tagVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut", delay: 0.1 },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
  },
};

const buttonContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const UpcomingEvents = () => {
  const { data, loading, error } = useQuery(GET_UPCOMING_EVENTS);

  if (loading) {
    return <ModernLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data?.home?.upcomingEvents) {
    return null;
  }

  const eventData = data.home.upcomingEvents;

  return (
    <section className="w-full bg-orange-500 px-2 md:px-8">
      <div className="relative w-full">
        {/* Content Container */}
        <div className="container mx-auto px-4 py-10 md:py-16 md:pl-6 md:pr-0 md:pr-[40%]">
          <div className="max-w-xl">
            {/* Tag */}
            <motion.div
              {...({
                className: "inline-block rounded-full bg-white/20 px-4 py-1",
                variants: tagVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: false, amount: 0.2 },
              } as any)}
            >
              <span className="text-sm font-medium text-white">
                {eventData.tagTitle}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              {...({
                className: "mt-4 text-3xl font-bold text-white md:text-4xl",
                variants: titleVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: false, amount: 0.2 },
              } as any)}
            >
              {eventData.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              {...({
                className: "mt-3 text-base text-white",
                variants: descriptionVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: false, amount: 0.2 },
              } as any)}
            >
              {eventData.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...({
                className: "mt-8 flex space-x-4",
                variants: buttonContainerVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: false, amount: 0.2 },
              } as any)}
            >
              {eventData.buttons.map((button: Button, index: number) => (
                <motion.div
                  key={index}
                  variants={buttonVariants}
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={button.buttonLink}
                    className={`group flex items-center transition-all duration-200 ${
                      index === 0
                        ? "rounded-full bg-white px-5 py-2.5 shadow-sm hover:scale-105 hover:bg-orange-100 hover:shadow-lg md:px-6 md:py-3"
                        : "px-4 py-2.5 hover:scale-105 hover:text-orange-300 hover:underline md:px-6 md:py-3"
                    }`}
                  >
                    <span
                      className={`font-medium transition-colors duration-200 ${
                        index === 0
                          ? "text-orange-500 group-hover:text-orange-600"
                          : "text-white group-hover:text-orange-300"
                      }`}
                    >
                      {button.buttonText}
                    </span>
                    {index === 0 && (
                      <span className="ml-2 text-orange-500 transition-colors duration-200 group-hover:text-orange-600">
                        →
                      </span>
                    )}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Image - Touching bottom of section */}
        <div className="mt-8 w-full px-4 md:hidden">
          <div className="relative h-[250px] w-full overflow-hidden rounded-tr-[40px]">
            <Image
              src={
                eventData.image.url.startsWith("http")
                  ? eventData.image.url
                  : (process.env.NEXT_PUBLIC_DATA || "http://localhost:1337") +
                    eventData.image.url
              }
              alt={eventData.title}
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>

        {/* Desktop Image Container - Positioned absolutely on larger screens */}
        <div
          className="absolute right-0 top-0 hidden h-full md:block"
          style={{
            width: "42%",
            right: "30px",
            top: "30px",
            bottom: "0",
            height: "calc(100% - 30px)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-tr-[60px]">
            <Image
              src={
                eventData.image.url.startsWith("http")
                  ? eventData.image.url
                  : (process.env.NEXT_PUBLIC_DATA || "http://localhost:1337") +
                    eventData.image.url
              }
              alt={eventData.title}
              fill
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
