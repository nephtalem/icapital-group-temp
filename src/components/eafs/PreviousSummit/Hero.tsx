"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import eafsLogo from "@/assets/eafs/EAFS-black-Logo.png";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContent = () => {
    // Scroll to the content section
    const contentSection = document.getElementById("content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[rgba(247,128,25,0.05)] font-[var(--font-urbanist)]">
      {/* Navigation Bar */}
      <div className="relative z-10 px-6 py-4 md:py-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/eafs">
            <Image
              src={eafsLogo}
              alt="East African Finance Summit Logo"
              width={120}
              height={60}
              className="h-auto w-auto"
            />
          </Link>

          <div className="hidden space-x-6 md:flex">
            <Link
              href="/previous-summits"
              className="text-sm font-medium text-[#F78019] hover:text-[#F78019]/80"
            >
              Previous Summits
            </Link>
            <Link
              href="/upcoming-summits"
              className="text-sm font-medium text-[#1A365D] hover:text-[#F78019]"
            >
              Upcoming Summits
            </Link>
            <Link
              href="/summit-documents"
              className="text-sm font-medium text-[#1A365D] hover:text-[#F78019]"
            >
              Summit Documents
            </Link>
          </div>

          <Link
            href="/contact"
            className="rounded-full border border-[#F78019] bg-transparent px-4 py-2 text-sm font-medium text-[#F78019] transition-colors hover:bg-[#F78019] hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex min-h-[65vh] flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <Link
              href="/eafs"
              className="group inline-flex items-center gap-3 rounded-full border border-[#F78019]/20 bg-white/50 px-6 py-3 text-[#F78019] backdrop-blur-sm transition-all hover:border-[#F78019] hover:bg-[#F78019]/10 hover:shadow-md"
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
                className="text-xl font-medium"
              >
                ←
              </motion.span>
              <span className="text-sm font-semibold tracking-wide">
                Go Back to Home
              </span>
            </Link>
          </motion.div>

          <h1 className="font-urbanist text-4xl font-bold leading-relaxed tracking-wide text-[#1A365D] md:text-5xl md:leading-relaxed md:tracking-wider lg:text-6xl lg:leading-snug">
            A Legacy of Impactful Conversations and Strategic Growth
          </h1>

          <p className="mx-auto mt-8 max-w-4xl font-urbanist text-base font-light leading-loose tracking-wide text-[#2D3748] md:text-lg md:leading-loose md:tracking-wide">
            Explore highlights from past East Africa Finance Summits—where
            thought leaders, innovators, and changemakers came together to shape
            the region&apos;s financial future.
          </p>
        </motion.div>
      </div>

      {/* Arrow Section - Separated to position at bottom */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToContent}
          className="flex animate-bounce items-center justify-center rounded-full border-none bg-transparent p-0 text-[#F78019] outline-none"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 45.8C13.54 45.8 4.2 36.46 4.2 25C4.2 13.54 13.54 4.2 25 4.2C36.46 4.2 45.8 13.54 45.8 25C45.8 36.46 36.46 45.8 25 45.8Z"
              fill="#F78019"
            />
            <path
              d="M25 29.1667L14.5833 18.75L17.5 15.8333L25 23.3333L32.5 15.8333L35.4167 18.75L25 29.1667Z"
              fill="#F78019"
            />
            <path
              d="M25 37.5L14.5833 27.0833L17.5 24.1667L25 31.6667L32.5 24.1667L35.4167 27.0833L25 37.5Z"
              fill="#F78019"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
