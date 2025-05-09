"use client";
import AboutUsImg from "@/assets/about-us.png";
import Image from "next/image";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Tag from "@/ui/Tag";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="bg-[#253E5E] px-6 py-16 md:px-12">
      <div className="container mx-auto flex flex-col gap-12 md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[400px] w-full">
            <Image
              src={AboutUsImg}
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-[70px] shadow-xl"
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="w-full text-left md:w-1/2">
          <Tag
            title="About Us"
            titleColor="text-[#F78019]"
            bgColor="bg-[#F7801926]"
          />
          <h2 className="mt-4 text-xl font-bold leading-snug text-white md:text-4xl">
            The i-Capital Africa Institute: A Leading Business Consulting &
            Services Company
          </h2>
          <p className="mt-4 text-xs leading-loose text-gray-300 md:text-lg md:leading-relaxed">
            The i-Capital Africa Institute is a professional service firm.
            Founded in 2015, we offer a full range of Human Capital Development
            solutions to clients in various sectors. Our approach is
            business-driven and we work to co-create innovative...
          </p>

          <div
            className="overflow-hidden transition-all duration-700 ease-in-out"
            style={{ maxHeight: showMore ? `${contentHeight + 20}px` : 0 }}
          >
            <div ref={contentRef} className="pb-4">
              <p className="mt-4 text-xs leading-loose text-gray-300 md:text-lg md:leading-relaxed">
                Our services include consulting in strategy formulation,
                organizational effectiveness, talent management, leadership
                development, and corporate training. What sets us apart is our
                unique methodology that combines global best practices with deep
                understanding of local contexts across Africa.
              </p>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-6">
            <button
              onClick={toggleShowMore}
              className="font flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm text-white shadow-md transition-all duration-300 hover:bg-orange-600 md:px-6 md:py-3 md:text-lg"
            >
              {showMore ? "Show Less" : "Learn More"}
              <span
                className={`transform transition-transform duration-500 ${showMore ? "rotate-180" : "rotate-0"}`}
              >
                <FaArrowDown className="text-xl" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
