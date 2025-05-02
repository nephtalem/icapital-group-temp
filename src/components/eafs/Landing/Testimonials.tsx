"use client";

import Image from "next/image";
import { useState } from "react";
import { FiUser } from "react-icons/fi";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  summit: string;
  imageUrl?: string;
}

const TestimonialCard = ({
  quote,
  name,
  role,
  summit,
  imageUrl,
}: TestimonialProps) => {
  return (
    <div
      className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md"
      style={{ boxShadow: "0px 3.11px 77.76px 0px rgba(0, 0, 0, 0.03)" }}
    >
      <p className="mb-6 flex-grow text-gray-700">&quot;{quote}&quot;</p>
      <div className="flex items-center">
        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={40}
              height={40}
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <FiUser size={20} className="text-gray-500" />
          )}
        </div>
        <div>
          <h4 className="font-bold text-[#0A244E]">{name}</h4>
          <p className="text-sm text-gray-600">{summit} Summit Attendant</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Enim ium sed consectetur sed lorem quam nullam. Iiasum ut al feugiat aenean tellus. Magnus eros ti habitasse pulvinar blandit. Faucibus tortor.",
      name: "Abebe Bikila",
      role: "CEO",
      summit: "3rd",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Maecenas tortor risus risus eget ornare. At et amet mattis sed ante elit nec quis ultrices. Mattis.",
      name: "Abebe Bikila",
      role: "Director",
      summit: "5th",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. At eleifend mi arcu lectus. In imperdiet phasellus egestas iaculis eu susmod vulputate urna dus. Augue cum sit elit imperdiet egestas in. Ipsum enim eget nibh integer tempus.",
      name: "Abebe Bikila",
      role: "Manager",
      summit: "4th",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Maecenas tortor risus risus eget ornare. At et amet mattis sed ante elit nec quis ultrices. Mattis.",
      name: "Abebe Bikila",
      role: "Director",
      summit: "1st",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Quis orci adipiscing id mauris tempor. Egestas tellus egestas amet pellentesque amet. Amet amet sit phasellus porta feugiat egestas risus ultrices massa. Pretium.",
      name: "Abebe Bikila",
      role: "Analyst",
      summit: "4th",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur. Maecenas tortor risus risus eget ornare. At et amet mattis sed ante elit nec quis ultrices.",
      name: "Abebe Bikila",
      role: "Executive",
      summit: "3rd",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl">
          Who said What about the Summit?
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              summit={testimonial.summit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
