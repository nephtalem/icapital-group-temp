"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Testimonial1 from "@/assets/testimonial1.png";
import Testimonial2 from "@/assets/testimonial2.png";
import Testimonial3 from "@/assets/testimonial3.png";
import Testimonial4 from "@/assets/tetimonial4.png";
import Tag from "@/ui/Tag";

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

// Duplicate testimonials for seamless infinite scrolling
const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mb-8 px-6 text-center">
        <Tag
          title="Testimonials"
          titleColor="text-[#F78019]"
          bgColor="bg-[#F7801926]"
        />
        <h2 className="mt-4 text-2xl font-bold text-[#061C3D] md:text-3xl">
          What Our Partners Say about Us
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20, // Adjust speed if needed
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[300px] flex-shrink-0 rounded-2xl bg-white p-6 shadow-lg md:w-[350px]"
            >
              <p className="mb-4 text-gray-600">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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
