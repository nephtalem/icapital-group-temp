"use client";

import Image from "next/image";
import HeroImg from "@/assets/hero-img.png";
import Header from "../Header";
import Link from "next/link";
import EAFSLogo from "@/assets/eafs/EAFS-Logo.png";
import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="relative h-screen w-full overflow-hidden "
    >
      {/* Header - only visible within Hero section */}
      <div className="absolute left-0 top-0 z-50 w-full">
        <Header
          logo={EAFSLogo}
          linkColor="#FFFFFF"
          linkActiveColor="#F78019"
          buttonBorderColor="#FFFFFF"
          buttonTextColor="#FFFFFF"
        />
      </div>

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
              "linear-gradient(89.66deg, rgba(37, 62, 94, 0.85) 0.29%, rgba(247, 128, 25, 0.85) 99.71%)",
          }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-6 pt-20 text-white md:px-12 lg:px-24">
          {/* Content Wrapper */}
          <div className="w-full max-w-4xl space-y-6 md:space-y-8">
            {/* Event Badge */}
            <span className="rounded-full bg-white bg-opacity-20 px-4 py-2 text-base tracking-wide text-white lg:text-base">
              Upcoming Event
            </span>

            {/* Title */}
            <h1 className="text-4xl font-bold leading-[50px] sm:text-5xl lg:text-6xl lg:leading-[80px]">
              Register for the 10th East Africa Finance Summit
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg leading-normal text-gray-200 md:text-xl lg:text-[24px] lg:leading-[48px]">
              Join industry leaders, innovators, and policymakers at the
              region&apos;s premier summit to explore emerging trends, forge
              strategic partnerships, and drive impactful financial
              transformation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-start space-y-4 md:flex-row md:space-x-6 md:space-y-0">
              <a
                href="/register-now"
                className="w-fit min-w-[180px] rounded-full bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-orange-600 lg:text-base"
              >
                Register Now
              </a>
              <Link href="/news-and-blogs">
                <button className="w-fit min-w-[180px] rounded-full border border-white px-8 py-3 text-center text-sm text-white transition duration-300 hover:bg-white hover:text-gray-900 lg:text-base">
                  More News →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
