"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tag from "@/ui/Tag";
import { useQuery } from "@apollo/client";
import { GET_TESTIMONIALS_SECTION } from "@/graphql/home/home";
import ModernLoader from "@/components/ui/ModernLoader";

const Testimonials = () => {
  const { data, loading, error } = useQuery(GET_TESTIMONIALS_SECTION);

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading testimonials section.</div>;
  if (!data?.home?.testimonialsSection) return null;

  const section = data.home.testimonialsSection;
  const tagTitle = section.tagTitle || "Testimonials";
  const heading = section.heading || "What Our Partners Say about Us";
  const testimonials = section.testimonials || [];
  // Duplicate testimonials for seamless infinite scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-gray-50 py-12">
      <div className="mb-8 px-6 text-center">
        <Tag
          title={tagTitle}
          titleColor="text-[#F78019]"
          bgColor="bg-[#F7801926]"
        />
        <h2 className="mt-4 text-2xl font-bold text-[#061C3D] md:text-3xl">
          {heading}
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
          {duplicatedTestimonials.map((testimonial: any, index: number) => (
            <div
              key={index}
              className="w-[300px] flex-shrink-0 rounded-2xl bg-white p-6 shadow-lg md:w-[350px]"
            >
              <p className="mb-4 text-gray-600">
                {testimonial.testimonialText}
              </p>
              <div className="flex items-center gap-3">
                {testimonial.image?.url && (
                  <Image
                    src={
                      testimonial.image.url.startsWith("http")
                        ? testimonial.image.url
                        : (process.env.NEXT_PUBLIC_DATA ||
                            "http://localhost:1337") + testimonial.image.url
                    }
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                )}
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
