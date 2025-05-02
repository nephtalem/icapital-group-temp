"use client";

import Image from "next/image";
import Link from "next/link";
import AboutBanner from "@/assets/eafs/about-banner.png";

const About = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-6 text-3xl font-bold text-[#253E5E] md:text-4xl">
              About EAFS
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                A multilateral dialogue shaping the future of finance by uniting
                industry experts, policymakers, and government officials. The
                summit features engaging panels, presentations, and case studies
                packed with actionable insights, best practices, and industry
                knowledge.
              </p>
              <p>
                With 400+ participants, it offers rich opportunities for
                networking and collaboration with key stakeholders from East
                Africa and beyond. EAFS also enables unparalleled business
                matching, investment partnerships, and growth opportunities in
                the finance sector.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/previous-summits"
                className="inline-block min-w-[200px] rounded-full bg-[#F78019] px-8 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-orange-600 lg:text-base"
              >
                Explore Previous Summits
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-lg md:h-[500px]">
              <Image
                src={AboutBanner}
                alt="East Africa Finance Summit"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
