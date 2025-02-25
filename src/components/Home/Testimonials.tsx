"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Testimonial1 from "@/assets/testimonial1.png";
import Testimonial2 from "@/assets/testimonial2.png";
import Testimonial3 from "@/assets/testimonial3.png";
import Testimonial4 from "@/assets/tetimonial4.png";

const testimonials = [
  {
    name: "Janet Doe",
    role: "Analyst, Nairobi Securities Exchange",
    image: Testimonial1,
    text: "Lorem ipsum dolor sit amet consectetur. Ut lorem sem tellus tincidunt purus sed pretium lorem vel. Id dictum tellus viverra velit elit in eget consequat hendrerit.",
  },
  {
    name: "Ahmed Shide",
    role: "CEO, Minister of Finance",
    image: Testimonial2,
    text: "The forum serves as a platform for exchanging information, ideas, and experiences related to the Finance Sector, promoting effective practices and trends from both policy and operational perspectives.",
  },
  {
    name: "Firehiwot D.",
    role: "CEO, EthioTelecom",
    image: Testimonial3,
    text: "Lorem ipsum dolor sit amet consectetur. Ut lorem sem tellus tincidunt purus sed pretium lorem vel.",
  },
  {
    name: "Yared Molla",
    role: "President, Association of Ethiopian Insurers",
    image: Testimonial4,
    text: "EAFS has become a central hub for discussing crucial issues in the financial industry today and tomorrow.",
  },
];

// Duplicate for smooth infinite scrolling
const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        x: ["0%", "-100%"],
        transition: {
          ease: "linear",
          duration: 20, // Adjust speed
          repeat: Infinity,
        },
      });
    };
    animate();
  }, [controls]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8 px-6">
        <span className="text-orange-500 text-sm font-semibold">
          Testimonials
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          What Our Partners Say about Us
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          ref={containerRef}
          animate={controls}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[350px] p-6 bg-white rounded-2xl shadow-lg flex-shrink-0"
            >
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
