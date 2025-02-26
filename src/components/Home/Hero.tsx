"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import HeroImg from "@/assets/hero-img.png";
import Header from "./Header";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const slides = [
  {
    title: "Register for the 10th East Africa Finance Summit",
    description:
      "Lorem ipsum dolor sit amet cons sed pretium lorem vel id ali aliquam tellus viverra velit elit in eg.",
    buttonText: "Register Now",
    buttonLink: "#",
  },
  {
    title: "Join the Global Economic Leaders Conference",
    description:
      "Gain insights from top financial experts and policymakers across the world.",
    buttonText: "Learn More",
    buttonLink: "#",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative h-screen w-full overflow-hidden rounded-br-[70px] md:rounded-br-[100px]">
      {/* Fixed Header */}
      <Header />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="h-full w-full"
      >
        {/* Custom Navigation Arrows */}

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <Image
                src={HeroImg}
                alt="Hero Background"
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
              <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-8 text-white md:px-16 lg:px-32 ">
                {/* Content Wrapper */}
                <div className="w-full max-w-4xl space-y-6 md:space-y-8">
                  {/* Event Badge */}
                  <span className="rounded-full bg-white bg-opacity-20 px-4 py-2 text-base tracking-wide text-white  lg:text-base">
                    Upcoming Event
                  </span>

                  {/* Title */}
                  <h1 className="text-4xl font-bold leading-[50px] sm:text-5xl  lg:text-6xl lg:leading-[80px]">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="max-w-2xl text-lg text-gray-200 lg:text-2xl">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col items-start space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                    <a
                      href={slide.buttonLink}
                      className="w-fit  rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-orange-600 lg:text-base"
                    >
                      {slide.buttonText} →
                    </a>
                    <button className="w-fit rounded-full border border-white px-6 py-3 text-sm text-white transition duration-300 hover:bg-white hover:text-gray-900 lg:text-base">
                      More News →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Dots Navigation */}

      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 transform items-center gap-3">
        {slides.map((_, index) => (
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
    <div
      className={twMerge(
        "h-4 w-4 rounded-full bg-[#D4D4D8] duration-200 ease-in",
        active && "h-6 w-6 bg-[#F78019]",
      )}
    />
  );
};
